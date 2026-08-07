// Cloudflare Pages Function — POST /api/submit
// Receives the "Get Help" and "Share Your Story" forms and relays them
// to contact@commonsensecyber.org via the Resend API. Requires a
// RESEND_API_KEY environment variable/secret set on the Pages project.

function jsonResponse(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  try {
    data = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: 'Invalid request body' }, 400);
  }

  // Honeypot: bots tend to fill every field, including hidden ones a
  // real visitor never sees. Pretend success without sending anything.
  if (data.website) {
    return jsonResponse({ ok: true }, 200);
  }

  let subject, text, replyTo;

  if (data.type === 'contact') {
    const name = (data.name || '').trim();
    const email = (data.email || '').trim();
    const message = (data.message || '').trim();
    if (!name || !email || !message) {
      return jsonResponse({ ok: false, error: 'Missing required fields' }, 400);
    }
    subject = `Common Sense Cyber — message from ${name}`;
    text = `${message}\n\n— ${name} (${email})`;
    replyTo = email;
  } else if (data.type === 'community') {
    const name = (data.name || '').trim();
    const anonymous = !!data.anonymous;
    const story = (data.story || '').trim();
    const email = (data.email || '').trim();
    if (!story) {
      return jsonResponse({ ok: false, error: 'Missing story text' }, 400);
    }
    const displayName = anonymous ? 'Anonymous' : (name || 'Anonymous');
    subject = `Common Sense Cyber — community story from ${displayName}`;
    text = `${story}\n\n— ${displayName}${email ? ` (${email})` : ''}\n\n[Post anonymously: ${anonymous ? 'yes' : 'no'}]`;
    if (email) replyTo = email;
  } else {
    return jsonResponse({ ok: false, error: 'Unknown form type' }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return jsonResponse({ ok: false, error: 'Email service not configured' }, 500);
  }

  const resendResp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Common Sense Cyber <forms@commonsensecyber.org>',
      to: 'contact@commonsensecyber.org',
      reply_to: replyTo,
      subject,
      text
    })
  });

  if (!resendResp.ok) {
    return jsonResponse({ ok: false, error: 'Failed to send message' }, 502);
  }

  return jsonResponse({ ok: true }, 200);
}
