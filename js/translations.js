/* Common Sense Cyber — translations
   Keys mirror the site's content sections. Each language object has
   the same shape. Yoruba translation should get native-speaker review
   before real deployment (lower-confidence language for this author). */
window.CSC_I18N = {
  en: {
    meta: { name: 'English', dir: 'ltr', minLabel: 'min' },
    pageTitle: 'Common Sense Cyber — Cybersecurity Made Simple',
    metaDescription: "Common Sense Cyber teaches everyday online safety in plain language — for kids, seniors, and everyone in between. No jargon, no judgment.",
    skipLink: 'Skip to main content',
    logoAlt: 'Common Sense Cyber logo — a smiling shield mascot',
    heroArtAlt: 'Illustration of the Common Sense Cyber mascot, a smiling shield',
    footerLogoAlt: 'Common Sense Cyber logo',
    nav: { basics: 'Learn the Basics', tracks: 'Kids & Seniors', story: 'Real Stories', quiz: 'Quiz', resources: 'Resources', checkProtect: 'Check & Protect', report: 'Get Help', faq: 'FAQ', community: 'Share Your Story' },
    header: { textSize: 'Increase text size for easier reading', menuOpen: 'Open menu', menuClose: 'Close menu', lang: 'Choose language' },
    brand: { tagline: 'Online safety, plainly explained' },
    hero: {
      eyebrow: 'Free & friendly online safety',
      h1: 'Cybersecurity that speaks your language.',
      p: "No jargon. No judgment. Just simple, warm guidance for spotting scams, protecting your accounts, and staying safe online — whether you're 9 or 90.",
      ctaPrimary: 'Start Learning the Basics',
      ctaSecondary: 'Watch a Real Story',
      stat1: '6', stat1Label: 'Plain-language topics',
      stat2: '2', stat2Label: 'Tracks for kids & seniors',
      stat3: '5', stat3Label: 'Scam-sense quiz'
    },
    mission: {
      eyebrow: "Why we're here",
      h2: 'Everyone deserves to feel safe online — without needing a tech degree.',
      p: "Most cybersecurity advice is written for people who already understand cybersecurity. Common Sense Cyber flips that. We translate real security know-how into plain, warm, judgment-free guidance for the people who need it most: kids just getting online, older adults navigating new tech, and anyone who'd rather not decode jargon to stay safe.",
      pillars: [
        { title: 'Simple language', body: 'No acronyms, no scare tactics — just clear explanations anyone can follow the first time.' },
        { title: 'No judgment', body: "Getting fooled by a scam doesn't mean you did something wrong. We focus on building confidence, not shame." },
        { title: 'For every age', body: "From a child's first tablet to a grandparent's first smartphone — guidance built around real life, not tech expertise." }
      ]
    },
    basics: {
      eyebrow: 'Learn the basics',
      h2: 'Six things worth knowing — explained without the jargon.',
      p: 'Tap any topic to see a few practical tips you can use today.',
      seeTips: 'See the tips',
      tips: [
        { title: 'Spotting Scam Messages', summary: 'Texts and emails built to make you panic and click fast.', points: [
          'Real companies rarely rush you — urgency is the biggest red flag.',
          'Check the sender’s address closely, not just the display name.',
          'When in doubt, contact the company using a number you already trust — not one from the message.'
        ]},
        { title: 'Password Safety', summary: 'A few small habits stop most account break-ins.', points: [
          'Use a passphrase of 3–4 random words instead of a short complex password.',
          'Never reuse the same password across different sites.',
          'Turn on two-step verification wherever it’s offered — it’s the single best upgrade you can make.',
          'A good password should never be a real word, your name, birthday, or pet’s name — those are the first things guessed.',
          'Avoid predictable patterns like "123456", "password", or keyboard runs like "qwerty".',
          'No legitimate company will ever call, text, or email asking you to say your password out loud.'
        ]},
        { title: 'Safe Browsing', summary: 'Small signs tell you a site (or warning) is trustworthy.', points: [
          'Look for the padlock icon and "https" before entering any information.',
          'Ignore pop-ups claiming your device is infected — real security software never works that way.',
          'Keep your browser and apps updated; updates often fix safety holes.'
        ]},
        { title: 'Social Media & Privacy', summary: 'What you share can be used against you in surprising ways.', points: [
          'Think twice before posting your birthday, address, or travel plans.',
          'Review your privacy settings every few months — defaults change.',
          'Be cautious accepting requests from people you don’t actually know.'
        ]},
        { title: 'Protecting Your Money', summary: 'How to recognize a financial scam before it costs you.', points: [
          'No real bank or government agency will ever ask for payment in gift cards or crypto.',
          'Get an unexpected request for money — even from "family"? Call them back on a number you already have.',
          'Slow down. Legitimate requests can always wait until you’ve double-checked.'
        ]},
        { title: 'Wi-Fi & Devices', summary: 'Everyday habits that keep your devices locked down.', points: [
          'Avoid entering passwords or banking info on public Wi-Fi.',
          'Keep your phone and computer software up to date.',
          'Lock your devices with a PIN, passcode, or fingerprint — always.'
        ]}
      ]
    },
    tracks: {
      eyebrow: 'Made for you',
      h2: "Guidance tailored to where you're starting from.",
      kids: { badge: 'For Young Explorers', title: 'For Young Explorers', body: 'Simple rules for kids and teens getting comfortable online.', points: [
        "Your passwords are yours — don't share them, even with friends.",
        'Keep your real name, school, and address private online.',
        "If something online feels weird or scary, tell a trusted adult. You won't be in trouble.",
        'Be kind — the same rules for being nice in person apply online too.'
      ], cta: 'See more tips' },
      seniors: { badge: 'For Wiser Web Users', title: 'For Wiser Web Users', body: 'Reassuring, practical guidance — because scammers target smart people every day.', points: [
        'It is never rude to hang up, slow down, or ask questions before acting.',
        'A "family member" asking for urgent money? Call them back on a number you already know.',
        'No real bank, agency, or company will ask you to pay with gift cards.',
        "Getting a tricky message doesn't mean you're behind — it means someone's trying to trick you."
      ], cta: 'See more tips' }
    },
    anatomy: {
      eyebrow: 'The pattern behind the panic',
      h2: 'Anatomy of a scam call',
      p: "Almost every phone or text scam follows the same four moves. Once you can spot the pattern, it's much easier to spot the scam.",
      steps: [
        { title: 'The Hook', body: 'A call or text creates a fake emergency — often pretending to be someone you love.' },
        { title: 'The Urgency', body: '"You have to act right now" — scammers don\'t give you time to think or check.' },
        { title: 'The Secrecy', body: '"Please don\'t tell anyone" — this cuts off the people who could catch the scam.' },
        { title: 'The Ask', body: 'A request for money, gift cards, or account details — the actual goal of the call.' }
      ],
      calloutStrong: 'You can break the pattern at any step.',
      calloutBody: 'Hang up, call the person back on a number you already have for them, and take your time — a real emergency can survive a five-minute pause.'
    },
    story: {
      eyebrow: 'Real stories',
      h2: 'What real scam calls actually sound like.',
      p: 'Scam calls work because they create panic and urgency — a "relative" in trouble, needing help right now, asking you to keep it secret. These short videos show how the scam unfolds and what to listen for.',
      videoFallback: "Your browser doesn't support embedded video.",
      videoDownload: 'Download the video',
      items: [
        { title: 'The "Grandchild in Trouble" Call', body: 'A dramatization of a classic grandparent scam call, showing how a scammer builds panic and urgency in the first few seconds.', quote: '"If a call ever asks you to act immediately and keep it quiet, that secrecy is the biggest warning sign of all."', videoLabel: 'Video demonstrating a grandparent scam phone call' },
        { title: 'How Grandparent Scams Really Target Seniors', body: 'A news report on how these scams operate at scale, and why they work so well on smart, careful people.', quote: '"These calls are designed to make you feel like there\'s no time to check — that feeling itself is the warning sign."', videoLabel: 'News segment about grandparent scams targeting senior citizens' },
        { title: 'When an Online "Friend" Turns Into Blackmail', body: 'A news report on sextortion scams, where a stranger poses as a friend online, then threatens to share private photos unless the target pays or sends more. It targets kids and teens far more often than most parents realize.', quote: '"The photo isn\'t the emergency — telling a trusted adult right away is. No one is in trouble, and there are ways to get it taken down."', videoLabel: 'News segment about sextortion scams targeting children and teens online' },
        { title: 'The "Free Skins" That Aren\'t Free', body: 'A news report on how scammers target kids inside online games and chat apps, using fake giveaways, "free" items, and rigged trade links to steal accounts and payment details.', quote: '"If a trade or giveaway inside a game feels too good to be true, it almost always is — a real prize never asks for your password first."', videoLabel: 'News segment about scams targeting children in online gaming' }
      ]
    },
    resources: {
      eyebrow: 'Stay informed',
      h2: 'Where to check for known scams and fraud alerts.',
      p: 'These trusted organizations track active scams, publish alerts, and take reports — bookmark a few and check in when something feels off.',
      groups: [
        { title: 'Canada', items: [
          { title: 'Canadian Anti-Fraud Centre', body: "Canada's national scam and fraud reporting centre — search current scam alerts and file a report." },
          { title: 'Canadian Centre for Cyber Security', body: 'Government of Canada guidance on phishing, malware, and staying safe online.' },
          { title: 'Get Cyber Safe', body: 'A national public awareness campaign with plain-language tips and current threat alerts.' },
          { title: 'Competition Bureau Canada', body: 'Tracks deceptive marketing and consumer scams, with a searchable list of known scams.' }
        ]},
        { title: 'Global', items: [
          { title: 'FTC Consumer Advice (United States)', body: "The US Federal Trade Commission's consumer scam alerts, guides, and reporting tool." },
          { title: 'Action Fraud (United Kingdom)', body: "The UK's national reporting centre for fraud and cybercrime." },
          { title: 'FBI Internet Crime Complaint Center (IC3)', body: 'Tracks and investigates internet-enabled crime reported in the United States.' }
        ]},
        { title: 'Cyber & Online Scams', items: [
          { title: 'Anti-Phishing Working Group', body: 'Tracks global phishing and fake-website trends; a place to report suspicious sites.' },
          { title: 'Google Safe Browsing', body: 'Check whether a website has already been flagged as unsafe or deceptive.' },
          { title: 'Canadian Securities Administrators', body: 'Investor protection resources for spotting investment and cryptocurrency scams.' }
        ]}
      ]
    },
    checkProtect: {
      eyebrow: 'Take action',
      h2: 'Check & Protect',
      p: "See what's exposed. Fix what's vulnerable. Protect your accounts.",
      breach: {
        h3: 'Check if your email has appeared in a data breach',
        p1: "A data breach happens when a company's data is stolen — usernames, emails, and sometimes passwords end up in the hands of criminals. It happens to big, well-known companies too, and it's not your fault.",
        p2: "Have I Been Pwned is a free, independent tool used by security professionals worldwide. It lets you check whether your email address has shown up in a known breach — without ever asking for your password.",
        tip1: 'If you appear in a breach, change the password for that account — and any other account using the same password.',
        tip2: "Turn on two-step verification if you haven't already (see below).",
        tip3: "Appearing in a breach doesn't automatically mean your current account is compromised — but it's a good reason to double-check.",
        cta: 'Check on Have I Been Pwned',
        note: "You're leaving Common Sense Cyber for a trusted external tool. We don't send, store, or see your email address."
      },
      passwordManager: {
        h3: 'Use a password manager',
        p: 'A password manager creates and remembers a long, unique password for every account, so you only have to remember one. Reusing passwords is one of the biggest risks online — if one site is breached, criminals try that same password everywhere else.',
        browserTitle: 'Browser-based',
        browser1: 'Built into Chrome, Safari, Firefox, and Edge — no extra app needed.',
        browser2: "Free, and syncs automatically if you're signed in.",
        browser3: 'A good starting point, especially if you mostly use one browser.',
        dedicatedTitle: 'Dedicated apps',
        dedicated1: 'Works across every browser, app, and device — not just one.',
        dedicated2: 'Often includes extras like breach alerts and secure sharing.',
        dedicated3: 'Worth it if you use multiple browsers or devices, or want more control.',
        lookForTitle: 'What to look for when choosing one',
        lookFor1: 'Strong, independently-audited encryption.',
        lookFor2: 'Works across the devices you actually use.',
        lookFor3: 'A clear, honest privacy policy.',
        lookFor4: 'Support for passkeys and two-step verification.'
      },
      mfa: {
        h3: 'Turn on two-step verification (MFA)',
        p: "Two-step verification — also called MFA or 2FA — adds a second check after your password, so a stolen password alone isn't enough to break in. It's one of the single best things you can do to protect an account.",
        type1Badge: 'Strong', type1Title: 'Authenticator app', type1Body: '— generates a changing code on your phone.',
        type2Badge: 'Strongest', type2Title: 'Security key', type2Body: '— a small physical device you tap or plug in.',
        type3Badge: 'Strongest', type3Title: 'Passkey', type3Body: '— see below.', type3Link: 'Learn more',
        type4Badge: 'Weaker, but still helpful', type4Title: 'Text message (SMS) codes', type4Body: '— better than nothing, but codes can sometimes be intercepted.',
        type5Badge: 'Backup only', type5Title: 'Backup codes', type5Body: '— not for everyday use; save these somewhere safe in case you lose access.',
        platformsTitle: 'Set it up on your accounts',
        officialGuide: 'Official guide ↗',
        bankingTitle: 'Banking',
        bankingBody: "Check your bank's app or website settings"
      },
      passkeys: {
        h3: "What's a passkey?",
        p1: "A passkey replaces your password with your device's fingerprint, face, or screen lock. Instead of typing anything, you approve the sign-in on a device you already trust.",
        p2: "Passkeys are built to resist phishing: they're tied to the exact website or app they were created for, so a fake look-alike site simply can't use them — even if it tricks you into visiting.",
        p3: 'Look for "Passkey" in the security settings of accounts like Google, Apple, and Microsoft — more services are adding support all the time.'
      },
      recovery: {
        h3: 'Prepare for account recovery — before you need it',
        p: 'The best time to set up account recovery is before something goes wrong. A few minutes now can save you from being permanently locked out later.',
        item1Label: 'Recovery email', item1Body: '— a second email address only you can access.',
        item2Label: 'Recovery phone number', item2Body: '— kept up to date, even if you change numbers.',
        item3Label: 'Backup codes', item3Body: '— download or print them, and store them somewhere safe (not in your email inbox).',
        item4Label: 'Trusted devices', item4Body: '— check which devices are currently trusted on your important accounts.',
        item5Label: 'Emergency access', item5Body: "— some services let a trusted contact help you regain access if you're ever locked out."
      },
      checkup: {
        h3: 'Your security checkup',
        p: 'Answer honestly — nothing here is sent anywhere. It stays on this page, on your device.',
        item1: 'I use unique passwords for my important accounts',
        item2: 'Two-step verification is turned on for my email',
        item3: 'Two-step verification is turned on for my banking',
        item4: 'I have recovery methods set up on my important accounts',
        item5: 'My devices install updates automatically',
        item6: "I lock my phone and computer when I'm not using them",
        item7: 'I verify unusual money or emergency requests independently before acting',
        item8: 'I know where to report a scam if it happens to me',
        strongLabel: 'Strong protection',
        strongBody: "You're doing a great job protecting your accounts. Keep it up, and revisit this checkup occasionally as your accounts change.",
        okayLabel: 'A few improvements recommended',
        okayBody: "You've got a solid foundation. A couple of small changes below would make a real difference.",
        needsLabel: 'Important actions recommended',
        needsBody: "A few important gaps could leave your accounts vulnerable. The steps below are a great place to start — you don't have to do them all today.",
        recommendedTitle: 'Recommended next steps',
        recLink: 'Learn more',
        rec1: 'Consider a password manager to create and remember unique passwords.',
        rec2: 'Your email is the key to every other account — turn on two-step verification first.',
        rec3: "Check your bank's app or website for a two-step verification or MFA option.",
        rec4: 'Add a recovery email, phone number, or backup codes before you need them.',
        rec5: 'Turn on automatic updates — most security fixes arrive through routine updates.',
        rec6: 'Set a short auto-lock time with a PIN, passcode, or biometric lock.',
        rec7: 'Always call back on a number you already have — never one given to you in the message or call.',
        rec8: 'Bookmark the Canadian Anti-Fraud Centre and the Resources section for when you need them.'
      }
    },
    quiz: {
      eyebrow: 'Test your scam sense',
      h2: 'Think you can spot a scam? Give it a try.',
      p: 'Five quick real-world scenarios. No score is a bad score — every question makes you a little safer.',
      questionOf: 'Question {n} of {total}',
      answerGroupLabel: 'Answer options',
      nextLabel: 'Next question',
      resultsLabel: 'See my results',
      resultTitle: 'You got {score} out of {total}!',
      resultBody: 'Every question you thought through makes you a little harder to fool. Share this quiz with someone you care about — especially anyone new to spotting scams.',
      retryLabel: 'Try again',
      questions: [
        { q: 'You get a text from an unknown number: "Your package couldn’t be delivered, click here to reschedule." What’s the safest move?',
          options: ['Click the link right away so I don’t miss my package', 'Check tracking directly on the retailer’s official site or app instead', 'Reply "STOP" to unsubscribe'],
          correct: 1,
          why: { correct: 'Exactly right — typing in the retailer’s real site yourself means a fake link can never fool you.', incorrect: 'Safer bet: skip the link entirely and check tracking on the retailer’s real site or app.' } },
        { q: 'Your "grandchild" calls saying they’re in trouble and need money wired right now — and asks you to keep it secret. What’s the safest move?',
          options: ['Send the money immediately, it sounded urgent', 'Hang up and call your grandchild back on a number you already have for them', 'Ask them a personal question over the phone to check'],
          correct: 1,
          why: { correct: 'A callback to a number you already trust is the safest way to confirm who you’re really talking to.', incorrect: 'Voices can be surprisingly convincing over the phone. Hang up and call a number you already have for them instead.' } },
        { q: 'An email says "Your account will be suspended in 24 hours — verify your password now," with a big urgent red banner. What’s the safest move?',
          options: ['Click the link right away to be safe', 'Go to the official website by typing the address yourself'],
          correct: 1,
          why: { correct: 'Urgency is a classic scam tactic. Typing the address yourself means you always land on the real site.', incorrect: 'Type the company’s real address yourself instead of clicking the email link — urgent tone is a red flag.' } },
        { q: 'A pop-up says "Virus detected! Call this number now for support." What should you do?',
          options: ['Call the number, it looks official', 'Close the pop-up (or restart the browser) and ignore it'],
          correct: 1,
          why: { correct: 'Right — real security software never asks you to call a phone number.', incorrect: 'Real security warnings never ask you to call a phone number. Close the pop-up and move on.' } },
        { q: 'Someone you just met online asks for your home address and full name "just to be friends." What’s the safest move?',
          options: ['Share it, they seem nice', 'Keep personal details private and tell a trusted adult or friend about the request'],
          correct: 1,
          why: { correct: 'Well done — keeping personal details private and looping in someone you trust is always the safer choice.', incorrect: 'Best to keep personal details private, even with people who seem friendly, and tell someone you trust.' } }
      ]
    },
    report: {
      eyebrow: 'Get help',
      h2: "Think you've spotted a scam — or been targeted by one?",
      p: "You're not alone, and it's not too late to act. Here's where to turn.",
      resourcesTitle: 'Trusted places to report',
      resources: [
        { title: 'Canadian Anti-Fraud Centre', body: '1-888-495-8501 — report scams and get advice, free and confidential.' },
        { title: 'Your bank or card provider', body: 'Call the number printed on your card or statement — never a number given to you by the caller.' },
        { title: 'A trusted family member or friend', body: 'Talking it through with someone you trust is always a smart first step.' }
      ],
      formTitle: 'Ask us a question',
      formNote: 'Your message is sent directly to us — no email app required.',
      nameLabel: 'Your name', emailLabel: 'Email address', messageLabel: 'What happened?',
      submitLabel: 'Send my message',
      successMsg: 'Sending your message…',
      errorMsg: 'Something went wrong. Please try again, or email us directly at contact@commonsensecyber.org.'
    },
    faq: {
      eyebrow: 'Questions', h2: 'Frequently asked questions',
      items: [
        { q: 'Is Common Sense Cyber a government agency?', a: "No. We're an independent awareness resource, not affiliated with any government agency, bank, or police service. We share general educational guidance — always verify anything urgent through official channels." },
        { q: 'I think I already fell for a scam. What do I do first?', a: "Contact your bank or card provider right away using the number on your card, then reach out to the Canadian Anti-Fraud Centre. Acting quickly can make a real difference — and there's no shame in asking for help." },
        { q: 'Do I need to be "tech-savvy" to use this site?', a: 'Not at all — that\'s the whole point. Every guide here is written in plain language, with no assumed technical background.' },
        { q: 'Can I share this site with my family?', a: 'Please do! Common Sense Cyber is free to use and share — especially with the young explorers and wiser web users in your life.' }
      ]
    },
    community: {
      eyebrow: 'Community stories',
      h2: 'Has something like this happened to you?',
      p: "Real experiences help other visitors recognize the same warning signs. Every story is reviewed before it's posted, and you're welcome to stay anonymous.",
      emptyTitle: 'No stories yet',
      emptyBody: 'Be the first to share — your experience could help someone else spot the same scam.',
      anonymousName: 'Anonymous',
      formTitle: 'Share your story',
      formNote: "Your story is sent directly to us. Nothing is posted automatically — a real person reviews every submission before it goes on the site.",
      nameLabel: 'Your name (optional)', anonymousLabel: 'Post this anonymously', storyLabel: 'What happened?',
      emailLabel: 'Your email (private — only used if we have a follow-up question, never published)',
      consentLabel: "I'm okay with this story being reviewed and possibly shared on this site.",
      submitLabel: 'Send my story',
      successMsg: 'Sending your story…',
      errorMsg: 'Something went wrong. Please try again, or email us directly at contact@commonsensecyber.org.'
    },
    legal: {
      h2: 'Privacy & Terms',
      p: 'How we handle information on this site, in plain language.',
      items: [
        { q: 'What information do you collect?', a: "The Get Help and Share Your Story forms send your message directly to us through a transactional email service (Resend) — we don't run a database, so nothing is stored beyond that one email. Community stories are only published after a real person reviews them, and you can ask to have your story edited, anonymized, or removed at any time. See Resend's privacy policy for how they handle message delivery." },
        { q: 'What do you store on my device?', a: "Just two small preferences, saved in your browser's local storage: your chosen language and text-size setting. Both stay on your device and are never sent to us." },
        { q: 'Do you use cookies, tracking, or analytics?', a: "No advertising cookies, tracking scripts, or analytics of any kind. The one exception is Google Fonts, used to display text in multiple languages — loading it may share your IP address with Google. See Google's privacy policy for details." },
        { q: "What about children's privacy?", a: "Common Sense Cyber is written for readers of every age, including children, but we don't knowingly collect personal information from anyone. Every form is optional, and we encourage a parent or guardian to review anything before it's sent." },
        { q: 'Is this official government or legal advice?', a: "No. Common Sense Cyber is an independent educational resource and is not affiliated with any government agency, bank, or law enforcement body. Nothing on this site is professional legal, financial, or security advice — always verify anything urgent through official channels. Links to outside sites (like Have I Been Pwned or government resources) lead to independent organizations we don't control." },
        { q: 'Questions about this page?', a: 'Reach us anytime at contact@commonsensecyber.org.' }
      ]
    },
    footer: {
      tagline: 'Online safety, plainly explained.',
      disclaimer: 'Common Sense Cyber is an independent educational resource and is not affiliated with any government agency, bank, or law enforcement body. In an emergency, or if money has already been sent, contact your bank and the Canadian Anti-Fraud Centre right away.',
      copyright: '© {year} Common Sense Cyber. Built with care.'
    }
  },
  fr: {
    meta: { name: 'Français', dir: 'ltr', minLabel: 'min' },
    pageTitle: 'Common Sense Cyber — La cybersécurité simplifiée',
    metaDescription: "Common Sense Cyber enseigne la sécurité en ligne au quotidien, en langage simple — pour les enfants, les aînés et tous les autres. Pas de jargon, pas de jugement.",
    skipLink: 'Aller au contenu principal',
    logoAlt: 'Logo de Common Sense Cyber — une mascotte bouclier souriante',
    heroArtAlt: 'Illustration de la mascotte de Common Sense Cyber, un bouclier souriant',
    footerLogoAlt: 'Logo de Common Sense Cyber',
    nav: { basics: 'Les bases', tracks: 'Enfants et aînés', story: 'Histoires vécues', quiz: 'Quiz', resources: 'Ressources', report: "Obtenir de l'aide", faq: 'FAQ', community: 'Partagez votre histoire' },
    header: { textSize: 'Augmenter la taille du texte pour une lecture plus facile', menuOpen: 'Ouvrir le menu', menuClose: 'Fermer le menu', lang: 'Choisir la langue' },
    brand: { tagline: "La sécurité en ligne, expliquée simplement" },
    hero: {
      eyebrow: 'Sécurité en ligne, simple et bienveillante',
      h1: 'La cybersécurité qui parle votre langue.',
      p: "Pas de jargon. Pas de jugement. Juste des conseils simples et chaleureux pour repérer les arnaques, protéger vos comptes et rester en sécurité en ligne — que vous ayez 9 ou 90 ans.",
      ctaPrimary: 'Découvrir les bases',
      ctaSecondary: 'Regarder une histoire vécue',
      stat1: '6', stat1Label: 'Sujets expliqués simplement',
      stat2: '2', stat2Label: 'Parcours pour enfants et aînés',
      stat3: '5', stat3Label: 'Quiz de flair anti-arnaque'
    },
    mission: {
      eyebrow: 'Pourquoi nous existons',
      h2: "Tout le monde mérite de se sentir en sécurité en ligne — sans avoir besoin d'un diplôme en informatique.",
      p: "La plupart des conseils en cybersécurité sont écrits pour des gens qui comprennent déjà la cybersécurité. Common Sense Cyber fait l'inverse. Nous traduisons de vraies connaissances en sécurité dans un langage simple, chaleureux et sans jugement, pour ceux qui en ont le plus besoin : les enfants qui découvrent Internet, les adultes plus âgés qui apprivoisent la technologie, et toute personne qui préfère ne pas déchiffrer du jargon pour rester en sécurité.",
      pillars: [
        { title: 'Un langage simple', body: "Pas de sigles, pas de tactiques alarmistes — juste des explications claires que tout le monde peut suivre dès la première fois." },
        { title: 'Aucun jugement', body: "Se faire avoir par une arnaque ne veut pas dire que vous avez mal agi. Nous visons à renforcer votre confiance, pas votre honte." },
        { title: 'Pour tous les âges', body: "De la première tablette d'un enfant au premier téléphone intelligent d'un grand-parent — des conseils pensés pour la vraie vie, pas pour les experts." }
      ]
    },
    basics: {
      eyebrow: 'Apprendre les bases',
      h2: 'Six choses à savoir — expliquées sans jargon.',
      p: "Touchez un sujet pour voir quelques conseils pratiques à utiliser dès aujourd'hui.",
      seeTips: 'Voir les conseils',
      tips: [
        { title: 'Repérer les messages frauduleux', summary: 'Des textos et courriels conçus pour vous faire paniquer et cliquer vite.', points: [
          "Les vraies entreprises vous pressent rarement — l'urgence est le plus grand signal d'alarme.",
          "Vérifiez attentivement l'adresse de l'expéditeur, pas seulement le nom affiché.",
          "En cas de doute, contactez l'entreprise avec un numéro que vous connaissez déjà — pas celui du message."
        ]},
        { title: 'Sécurité des mots de passe', summary: 'Quelques petites habitudes suffisent à bloquer la plupart des intrusions.', points: [
          "Utilisez une phrase de passe de 3 à 4 mots aléatoires plutôt qu'un mot de passe court et complexe.",
          "Ne réutilisez jamais le même mot de passe sur différents sites.",
          "Activez la vérification en deux étapes partout où c'est proposé — c'est la meilleure amélioration possible.",
          "Un bon mot de passe ne devrait jamais être un vrai mot, votre nom, votre date de naissance ou le nom de votre animal — ce sont les premières choses que l'on devine.",
          'Évitez les suites prévisibles comme "123456", "motdepasse", ou des séquences de clavier comme "azerty".',
          "Aucune entreprise sérieuse ne vous appellera, ne vous enverra un texto ou un courriel pour vous demander de dire votre mot de passe à voix haute."
        ]},
        { title: 'Navigation sécurisée', summary: 'De petits signes indiquent qu\'un site (ou un avertissement) est fiable.', points: [
          'Cherchez l\'icône du cadenas et "https" avant d\'entrer la moindre information.',
          "Ignorez les fenêtres surgissantes prétendant que votre appareil est infecté — un vrai logiciel de sécurité ne fonctionne jamais ainsi.",
          "Gardez votre navigateur et vos applications à jour; les mises à jour corrigent souvent des failles."
        ]},
        { title: 'Réseaux sociaux et vie privée', summary: 'Ce que vous partagez peut être utilisé contre vous de façon surprenante.', points: [
          "Réfléchissez à deux fois avant de publier votre date de naissance, votre adresse ou vos projets de voyage.",
          "Vérifiez vos paramètres de confidentialité tous les quelques mois — les réglages par défaut changent.",
          "Soyez prudent avec les demandes d'amitié de personnes que vous ne connaissez pas vraiment."
        ]},
        { title: 'Protéger votre argent', summary: "Comment reconnaître une arnaque financière avant qu'elle ne vous coûte cher.", points: [
          "Aucune vraie banque ni agence gouvernementale ne demandera jamais un paiement en cartes-cadeaux ou en cryptomonnaie.",
          'Une demande d\'argent inattendue, même d\'un "proche"? Rappelez-le à un numéro que vous avez déjà.',
          "Prenez votre temps. Une demande légitime peut toujours attendre que vous ayez vérifié."
        ]},
        { title: 'Wi-Fi et appareils', summary: 'Des habitudes simples pour garder vos appareils bien protégés.', points: [
          "Évitez d'entrer des mots de passe ou des informations bancaires sur un Wi-Fi public.",
          "Gardez le logiciel de votre téléphone et de votre ordinateur à jour.",
          "Verrouillez toujours vos appareils avec un code, un mot de passe ou une empreinte digitale."
        ]}
      ]
    },
    tracks: {
      eyebrow: 'Fait pour vous',
      h2: 'Des conseils adaptés à votre point de départ.',
      kids: { badge: 'Pour les jeunes explorateurs', title: 'Pour les jeunes explorateurs', body: "Des règles simples pour les enfants et ados qui découvrent Internet.", points: [
        "Vos mots de passe vous appartiennent — ne les partagez pas, même avec des amis.",
        "Gardez votre vrai nom, votre école et votre adresse privés en ligne.",
        "Si quelque chose en ligne vous semble étrange ou effrayant, parlez-en à un adulte de confiance. Vous ne serez pas puni.",
        "Soyez gentil — les mêmes règles de politesse en personne s'appliquent aussi en ligne."
      ], cta: 'Voir plus de conseils' },
      seniors: { badge: 'Pour les internautes avisés', title: 'Pour les internautes avisés', body: "Des conseils rassurants et pratiques — parce que les arnaqueurs ciblent des gens intelligents chaque jour.", points: [
        "Ce n'est jamais impoli de raccrocher, de ralentir ou de poser des questions avant d'agir.",
        'Un "proche" qui demande de l\'argent en urgence? Rappelez-le à un numéro que vous connaissez déjà.',
        "Aucune vraie banque, agence ou entreprise ne vous demandera de payer avec des cartes-cadeaux.",
        "Recevoir un message piège ne veut pas dire que vous êtes dépassé — cela veut dire que quelqu'un essaie de vous tromper."
      ], cta: 'Voir plus de conseils' }
    },
    anatomy: {
      eyebrow: 'Le schéma derrière la panique',
      h2: "Anatomie d'un appel frauduleux",
      p: "Presque toutes les arnaques par téléphone ou texto suivent les quatre mêmes étapes. Une fois que vous reconnaissez le schéma, il devient bien plus facile de repérer l'arnaque.",
      steps: [
        { title: "L'accroche", body: "Un appel ou un texto crée une fausse urgence — souvent en se faisant passer pour un être cher." },
        { title: "L'urgence", body: '"Vous devez agir tout de suite" — les arnaqueurs ne vous laissent pas le temps de réfléchir ou de vérifier.' },
        { title: 'Le secret', body: '"Ne le dites à personne" — cela coupe les personnes qui pourraient repérer l\'arnaque.' },
        { title: 'La demande', body: "Une demande d'argent, de cartes-cadeaux ou de renseignements bancaires — le véritable but de l'appel." }
      ],
      calloutStrong: "Vous pouvez briser le schéma à n'importe quelle étape.",
      calloutBody: "Raccrochez, rappelez la personne à un numéro que vous avez déjà pour elle, et prenez votre temps — une vraie urgence peut attendre cinq minutes."
    },
    story: {
      eyebrow: 'Histoires vécues',
      h2: 'À quoi ressemblent vraiment les appels frauduleux.',
      p: "Les appels frauduleux fonctionnent parce qu'ils créent panique et urgence — un \"proche\" en difficulté, ayant besoin d'aide immédiatement, vous demandant de garder le secret. Ces courtes vidéos montrent comment l'arnaque se déroule et ce qu'il faut écouter.",
      videoFallback: "Votre navigateur ne prend pas en charge la vidéo intégrée.",
      videoDownload: 'Télécharger la vidéo',
      items: [
        { title: "L'appel du « petit-enfant en difficulté »", body: "Une reconstitution d'un appel classique d'arnaque aux grands-parents, montrant comment un fraudeur crée panique et urgence dès les premières secondes.", quote: '"Si un appel vous demande d\'agir immédiatement et de garder le silence, ce secret est le plus grand signal d\'alarme de tous."', videoLabel: 'Vidéo illustrant un appel frauduleux de type arnaque aux grands-parents' },
        { title: 'Comment les arnaques aux grands-parents ciblent vraiment les aînés', body: "Un reportage sur la façon dont ces arnaques fonctionnent à grande échelle, et pourquoi elles marchent si bien même sur des gens intelligents et prudents.", quote: '"Ces appels sont conçus pour vous donner l\'impression qu\'il n\'y a pas le temps de vérifier — ce sentiment lui-même est le signal d\'alarme."', videoLabel: 'Reportage sur les arnaques aux grands-parents ciblant les personnes âgées' },
        { title: 'Quand un « ami » en ligne se transforme en maître chanteur', body: "Un reportage sur les arnaques de sextorsion, où un inconnu se fait passer pour un ami en ligne, puis menace de partager des photos privées si la victime ne paie pas ou n'en envoie pas davantage. Cela touche les enfants et les adolescents bien plus souvent que la plupart des parents ne le pensent.", quote: '"La photo n\'est pas l\'urgence — en parler tout de suite à un adulte de confiance, ça l\'est. Personne n\'aura d\'ennuis, et il existe des moyens de faire retirer les images."', videoLabel: 'Reportage sur les arnaques de sextorsion ciblant les enfants et les adolescents en ligne' },
        { title: '« Les objets gratuits » qui ne le sont pas', body: "Un reportage sur la façon dont les fraudeurs ciblent les enfants dans les jeux en ligne et les applications de messagerie, à l'aide de faux concours, d'objets « gratuits » et de liens d'échange truqués pour voler des comptes et des informations de paiement.", quote: '"Si un échange ou un concours dans un jeu semble trop beau pour être vrai, c\'est presque toujours le cas — un vrai prix ne demande jamais votre mot de passe."', videoLabel: "Reportage sur les arnaques ciblant les enfants dans les jeux en ligne" }
      ]
    },
    resources: {
      eyebrow: 'Restez informé',
      h2: 'Où vérifier les arnaques connues et les alertes de fraude.',
      p: "Ces organismes fiables suivent les arnaques actives, publient des alertes et reçoivent des signalements — mettez-en quelques-uns en favoris et consultez-les dès que quelque chose vous semble louche.",
      groups: [
        { title: 'Canada', items: [
          { title: 'Centre antifraude du Canada', body: "Le centre national de signalement des arnaques et de la fraude au Canada — consultez les alertes actuelles et déposez un signalement." },
          { title: 'Centre canadien pour la cybersécurité', body: 'Conseils du gouvernement du Canada sur l\'hameçonnage, les logiciels malveillants et la sécurité en ligne.' },
          { title: 'Pensez cybersécurité', body: 'Une campagne nationale de sensibilisation avec des conseils en langage simple et des alertes de menaces actuelles.' },
          { title: 'Bureau de la concurrence Canada', body: "Suit le marketing trompeur et les arnaques à la consommation, avec une liste consultable des arnaques connues." }
        ]},
        { title: 'À l\'international', items: [
          { title: 'FTC Consumer Advice (États-Unis)', body: "Les alertes, guides et outil de signalement de la Federal Trade Commission américaine." },
          { title: 'Action Fraud (Royaume-Uni)', body: "Le centre national britannique de signalement de la fraude et de la cybercriminalité." },
          { title: 'FBI Internet Crime Complaint Center (IC3)', body: "Suit et enquête sur la cybercriminalité signalée aux États-Unis." }
        ]},
        { title: 'Arnaques en ligne et cybersécurité', items: [
          { title: 'Anti-Phishing Working Group', body: "Suit les tendances mondiales d'hameçonnage et de faux sites; un endroit où signaler les sites suspects." },
          { title: 'Google Safe Browsing', body: "Vérifiez si un site web a déjà été signalé comme dangereux ou trompeur." },
          { title: 'Autorités canadiennes en valeurs mobilières', body: "Ressources de protection des investisseurs pour repérer les arnaques d'investissement et de cryptomonnaie." }
        ]}
      ]
    },
    quiz: {
      eyebrow: 'Testez votre flair anti-arnaque',
      h2: 'Pensez-vous pouvoir repérer une arnaque? Essayez.',
      p: "Cinq courts scénarios réels. Aucun score n'est un mauvais score — chaque question vous rend un peu plus prudent.",
      questionOf: 'Question {n} sur {total}',
      answerGroupLabel: 'Options de réponse',
      nextLabel: 'Question suivante',
      resultsLabel: 'Voir mes résultats',
      resultTitle: 'Vous avez obtenu {score} sur {total}!',
      resultBody: "Chaque question à laquelle vous avez réfléchi vous rend un peu plus difficile à tromper. Partagez ce quiz avec quelqu'un qui vous tient à cœur — surtout s'il découvre tout juste comment repérer les arnaques.",
      retryLabel: 'Recommencer',
      questions: [
        { q: 'Vous recevez un texto d\'un numéro inconnu : "Votre colis n\'a pas pu être livré, cliquez ici pour reprogrammer la livraison." Quelle est la solution la plus sûre?',
          options: ['Cliquer sur le lien tout de suite pour ne pas manquer mon colis', "Vérifier le suivi directement sur le site ou l'application officielle du détaillant", 'Répondre "STOP" pour se désabonner'],
          correct: 1,
          why: { correct: "Exactement — taper vous-même l'adresse réelle du détaillant fait qu'un faux lien ne peut jamais vous tromper.", incorrect: "Plus prudent : évitez complètement le lien et vérifiez le suivi sur le site ou l'application officielle du détaillant." } },
        { q: 'Votre "petit-enfant" vous appelle en disant qu\'il a des ennuis et a besoin d\'argent immédiatement — en vous demandant de garder le secret. Quelle est la solution la plus sûre?',
          options: ['Envoyer l\'argent immédiatement, cela semblait urgent', 'Raccrocher et rappeler votre petit-enfant à un numéro que vous avez déjà pour lui', 'Lui poser une question personnelle au téléphone pour vérifier'],
          correct: 1,
          why: { correct: "Rappeler à un numéro que vous connaissez déjà est le moyen le plus sûr de confirmer à qui vous parlez réellement.", incorrect: "Les voix peuvent être étonnamment convaincantes au téléphone. Raccrochez plutôt et rappelez à un numéro que vous avez déjà pour cette personne." } },
        { q: 'Un courriel dit : "Votre compte sera suspendu dans 24 heures — vérifiez votre mot de passe maintenant", avec une grande bannière rouge urgente. Quelle est la solution la plus sûre?',
          options: ['Cliquer sur le lien tout de suite par précaution', 'Aller sur le site officiel en tapant vous-même l\'adresse'],
          correct: 1,
          why: { correct: "L'urgence est une tactique d'arnaque classique. Taper vous-même l'adresse vous garantit d'arriver sur le vrai site.", incorrect: "Tapez vous-même la vraie adresse de l'entreprise plutôt que de cliquer sur le lien du courriel — un ton urgent est un signal d'alarme." } },
        { q: 'Une fenêtre surgissante dit : "Virus détecté! Appelez ce numéro immédiatement pour obtenir de l\'aide." Que devriez-vous faire?',
          options: ['Appeler le numéro, ça semble officiel', 'Fermer la fenêtre (ou redémarrer le navigateur) et l\'ignorer'],
          correct: 1,
          why: { correct: "Exactement — un vrai logiciel de sécurité ne vous demande jamais d'appeler un numéro de téléphone.", incorrect: "Les vrais avertissements de sécurité ne demandent jamais d'appeler un numéro. Fermez la fenêtre et continuez." } },
        { q: 'Quelqu\'un que vous venez de rencontrer en ligne vous demande votre adresse et votre nom complet "juste pour être ami·e·s." Quelle est la solution la plus sûre?',
          options: ['Les partager, la personne semble sympathique', 'Garder vos renseignements personnels privés et en parler à un adulte ou un ami de confiance'],
          correct: 1,
          why: { correct: "Bien joué — garder vos renseignements personnels privés et en parler à quelqu'un de confiance est toujours le choix le plus sûr.", incorrect: "Mieux vaut garder vos renseignements personnels privés, même avec des gens qui semblent sympathiques, et en parler à quelqu'un de confiance." } }
      ]
    },
    report: {
      eyebrow: "Obtenir de l'aide",
      h2: "Vous pensez avoir repéré une arnaque — ou en avoir été victime?",
      p: "Vous n'êtes pas seul, et il n'est pas trop tard pour agir. Voici où vous adresser.",
      resourcesTitle: 'Ressources fiables pour signaler une arnaque',
      resources: [
        { title: 'Centre antifraude du Canada', body: '1-888-495-8501 — signalez les arnaques et obtenez des conseils, gratuitement et en toute confidentialité.' },
        { title: 'Votre banque ou fournisseur de carte', body: "Appelez le numéro inscrit sur votre carte ou votre relevé — jamais un numéro donné par l'appelant." },
        { title: 'Un proche ou un ami de confiance', body: "En parler avec quelqu'un en qui vous avez confiance est toujours une bonne première étape." }
      ],
      formTitle: 'Posez-nous une question',
      formNote: "Votre message nous est envoyé directement — aucune application de courriel requise.",
      nameLabel: 'Votre nom', emailLabel: 'Adresse courriel', messageLabel: "Que s'est-il passé?",
      submitLabel: 'Envoyer mon message',
      successMsg: 'Envoi de votre message…',
      errorMsg: "Une erreur s'est produite. Veuillez réessayer, ou écrivez-nous directement à contact@commonsensecyber.org."
    },
    faq: {
      eyebrow: 'Questions', h2: 'Foire aux questions',
      items: [
        { q: 'Common Sense Cyber est-il un organisme gouvernemental?', a: "Non. Nous sommes une ressource de sensibilisation indépendante, non affiliée à un organisme gouvernemental, une banque ou un service de police. Nous partageons des conseils éducatifs généraux — vérifiez toujours ce qui semble urgent par les canaux officiels." },
        { q: 'Je pense être déjà tombé dans une arnaque. Que dois-je faire en premier?', a: "Contactez immédiatement votre banque ou fournisseur de carte au numéro inscrit sur votre carte, puis communiquez avec le Centre antifraude du Canada. Agir rapidement peut vraiment faire une différence — et il n'y a aucune honte à demander de l'aide." },
        { q: 'Dois-je être "à l\'aise avec la technologie" pour utiliser ce site?', a: "Pas du tout — c'est justement le but. Chaque guide ici est écrit dans un langage simple, sans supposer de connaissances techniques." },
        { q: 'Puis-je partager ce site avec ma famille?', a: "Avec plaisir! Common Sense Cyber est gratuit à utiliser et à partager — surtout avec les jeunes explorateurs et les internautes avisés de votre entourage." }
      ]
    },
    community: {
      eyebrow: 'Histoires de la communauté',
      h2: 'Est-ce que quelque chose comme ça vous est déjà arrivé?',
      p: "Les expériences vécues aident les autres visiteurs à reconnaître les mêmes signaux d'alarme. Chaque histoire est vérifiée avant d'être publiée, et vous pouvez rester anonyme si vous le souhaitez.",
      emptyTitle: 'Aucune histoire pour le moment',
      emptyBody: "Soyez la première personne à partager la vôtre — votre expérience pourrait aider quelqu'un d'autre à repérer la même arnaque.",
      anonymousName: 'Anonyme',
      formTitle: 'Partagez votre histoire',
      formNote: "Votre histoire nous est envoyée directement. Rien n'est publié automatiquement — une vraie personne vérifie chaque soumission avant sa publication sur le site.",
      nameLabel: 'Votre nom (facultatif)', anonymousLabel: 'Publier ceci de façon anonyme', storyLabel: "Que s'est-il passé?",
      emailLabel: 'Votre courriel (privé — utilisé seulement en cas de question de suivi, jamais publié)',
      consentLabel: "J'accepte que cette histoire soit vérifiée et possiblement partagée sur ce site.",
      submitLabel: 'Envoyer mon histoire',
      successMsg: 'Envoi de votre histoire…',
      errorMsg: "Une erreur s'est produite. Veuillez réessayer, ou écrivez-nous directement à contact@commonsensecyber.org."
    },
    legal: {
      h2: 'Confidentialité et conditions',
      p: 'Comment nous traitons les renseignements sur ce site, en langage simple.',
      items: [
        { q: 'Quelles informations recueillez-vous?', a: "Les formulaires « Obtenir de l'aide » et « Partagez votre histoire » nous envoient votre message directement, par l'intermédiaire d'un service de courriel transactionnel (Resend) — nous n'exploitons aucune base de données, donc rien n'est conservé au-delà de ce courriel. Les histoires communautaires ne sont publiées qu'après vérification par une vraie personne, et vous pouvez demander que votre histoire soit modifiée, rendue anonyme ou retirée en tout temps. Consultez la politique de confidentialité de Resend pour savoir comment ils traitent l'acheminement des messages." },
        { q: 'Que stockez-vous sur mon appareil?', a: "Seulement deux petites préférences, enregistrées dans le stockage local de votre navigateur : votre langue choisie et votre taille de texte. Les deux restent sur votre appareil et ne nous sont jamais envoyées." },
        { q: 'Utilisez-vous des témoins (cookies), du suivi ou des analyses?', a: "Aucun témoin publicitaire, script de suivi ou outil d'analyse, peu importe le type. La seule exception est Google Fonts, utilisé pour afficher le texte dans plusieurs langues — son chargement peut partager votre adresse IP avec Google. Consultez la politique de confidentialité de Google pour plus de détails." },
        { q: "Qu'en est-il de la confidentialité des enfants?", a: "Common Sense Cyber s'adresse à des lecteurs de tous âges, y compris les enfants, mais nous ne recueillons sciemment aucun renseignement personnel auprès de qui que ce soit. Chaque formulaire est facultatif, et nous encourageons un parent ou tuteur à réviser tout message avant son envoi." },
        { q: 'Est-ce un avis gouvernemental ou juridique officiel?', a: "Non. Common Sense Cyber est une ressource éducative indépendante et n'est affiliée à aucun organisme gouvernemental, banque ou service policier. Rien sur ce site ne constitue un avis juridique, financier ou de sécurité professionnel — vérifiez toujours tout ce qui est urgent par les voies officielles. Les liens vers des sites externes (comme Have I Been Pwned ou des ressources gouvernementales) mènent à des organisations indépendantes que nous ne contrôlons pas." },
        { q: 'Des questions à propos de cette page?', a: 'Écrivez-nous en tout temps à contact@commonsensecyber.org.' }
      ]
    },
    footer: {
      tagline: 'La sécurité en ligne, expliquée simplement.',
      disclaimer: "Common Sense Cyber est une ressource éducative indépendante et n'est affiliée à aucun organisme gouvernemental, banque ou service d'application de la loi. En cas d'urgence, ou si de l'argent a déjà été envoyé, contactez immédiatement votre banque et le Centre antifraude du Canada.",
      copyright: '© {year} Common Sense Cyber. Conçu avec soin.'
    }
  },
  es: {
    meta: { name: 'Español', dir: 'ltr', minLabel: 'min' },
    pageTitle: 'Common Sense Cyber — Ciberseguridad simplificada',
    metaDescription: 'Common Sense Cyber enseña seguridad en línea cotidiana en lenguaje sencillo, para niños, mayores y todos los demás. Sin jerga, sin juicios.',
    skipLink: 'Saltar al contenido principal',
    logoAlt: 'Logotipo de Common Sense Cyber — una mascota escudo sonriente',
    heroArtAlt: 'Ilustración de la mascota de Common Sense Cyber, un escudo sonriente',
    footerLogoAlt: 'Logotipo de Common Sense Cyber',
    nav: { basics: 'Aprende lo básico', tracks: 'Niños y mayores', story: 'Historias reales', quiz: 'Cuestionario', resources: 'Recursos', report: 'Obtener ayuda', faq: 'Preguntas frecuentes', community: 'Comparte tu historia' },
    header: { textSize: 'Aumentar el tamaño del texto para facilitar la lectura', menuOpen: 'Abrir menú', menuClose: 'Cerrar menú', lang: 'Elegir idioma' },
    brand: { tagline: 'Seguridad en línea, explicada con sencillez' },
    hero: {
      eyebrow: 'Seguridad en línea, gratuita y amigable',
      h1: 'Ciberseguridad que habla tu idioma.',
      p: 'Sin jerga. Sin juicios. Solo orientación simple y cercana para detectar estafas, proteger tus cuentas y estar seguro en línea, ya sea que tengas 9 o 90 años.',
      ctaPrimary: 'Aprende lo básico',
      ctaSecondary: 'Mira una historia real',
      stat1: '6', stat1Label: 'Temas explicados con sencillez',
      stat2: '2', stat2Label: 'Rutas para niños y mayores',
      stat3: '5', stat3Label: 'Cuestionario de detección de estafas'
    },
    mission: {
      eyebrow: 'Por qué existimos',
      h2: 'Todos merecen sentirse seguros en línea, sin necesitar un título en informática.',
      p: 'La mayoría de los consejos de ciberseguridad están escritos para personas que ya entienden de ciberseguridad. Common Sense Cyber hace lo contrario. Traducimos conocimientos reales de seguridad en orientación simple, cercana y sin juicios para quienes más lo necesitan: niños que recién empiezan a usar internet, adultos mayores que se adaptan a la tecnología, y cualquiera que prefiera no descifrar jerga para mantenerse seguro.',
      pillars: [
        { title: 'Lenguaje sencillo', body: 'Sin siglas, sin tácticas de miedo — solo explicaciones claras que cualquiera puede seguir desde la primera vez.' },
        { title: 'Sin juicios', body: 'Caer en una estafa no significa que hiciste algo mal. Nos enfocamos en generar confianza, no vergüenza.' },
        { title: 'Para todas las edades', body: 'Desde la primera tableta de un niño hasta el primer teléfono inteligente de un abuelo — orientación pensada para la vida real, no para expertos en tecnología.' }
      ]
    },
    basics: {
      eyebrow: 'Aprende lo básico',
      h2: 'Seis cosas que vale la pena saber, explicadas sin jerga.',
      p: 'Toca cualquier tema para ver algunos consejos prácticos que puedes usar hoy mismo.',
      seeTips: 'Ver los consejos',
      tips: [
        { title: 'Cómo detectar mensajes fraudulentos', summary: 'Textos y correos diseñados para hacerte entrar en pánico y hacer clic rápido.', points: [
          'Las empresas legítimas casi nunca te apuran — la urgencia es la señal de alarma más grande.',
          'Revisa con cuidado la dirección del remitente, no solo el nombre que aparece.',
          'Si tienes dudas, contacta a la empresa usando un número que ya conoces, no el que aparece en el mensaje.'
        ]},
        { title: 'Seguridad de las contraseñas', summary: 'Unos pocos hábitos simples evitan la mayoría de los accesos no autorizados.', points: [
          'Usa una frase de 3 a 4 palabras aleatorias en lugar de una contraseña corta y complicada.',
          'Nunca reutilices la misma contraseña en distintos sitios.',
          'Activa la verificación en dos pasos siempre que esté disponible — es la mejor mejora que puedes hacer.',
          'Una buena contraseña nunca debería ser una palabra real, tu nombre, tu fecha de nacimiento o el nombre de tu mascota — eso es lo primero que adivinan.',
          'Evita patrones predecibles como "123456", "contraseña" o secuencias de teclado como "qwerty".',
          'Ninguna empresa legítima te llamará, enviará un mensaje de texto o un correo pidiéndote que digas tu contraseña en voz alta.'
        ]},
        { title: 'Navegación segura', summary: 'Pequeñas señales indican si un sitio (o una advertencia) es confiable.', points: [
          'Busca el ícono del candado y "https" antes de ingresar cualquier información.',
          'Ignora las ventanas emergentes que dicen que tu dispositivo está infectado — un software de seguridad real nunca funciona así.',
          'Mantén tu navegador y aplicaciones actualizados; las actualizaciones suelen corregir fallas de seguridad.'
        ]},
        { title: 'Redes sociales y privacidad', summary: 'Lo que compartes puede usarse en tu contra de maneras sorprendentes.', points: [
          'Piénsalo dos veces antes de publicar tu fecha de nacimiento, dirección o planes de viaje.',
          'Revisa tu configuración de privacidad cada pocos meses — las opciones predeterminadas cambian.',
          'Ten cuidado al aceptar solicitudes de personas que en realidad no conoces.'
        ]},
        { title: 'Cómo proteger tu dinero', summary: 'Cómo reconocer una estafa financiera antes de que te cueste caro.', points: [
          'Ningún banco o agencia gubernamental real te pedirá pago con tarjetas de regalo o criptomonedas.',
          '¿Recibiste una solicitud de dinero inesperada, incluso de un "familiar"? Llámalo de vuelta a un número que ya tengas.',
          'Tómate tu tiempo. Una solicitud legítima siempre puede esperar a que verifiques.'
        ]},
        { title: 'Wi-Fi y dispositivos', summary: 'Hábitos cotidianos que mantienen tus dispositivos protegidos.', points: [
          'Evita ingresar contraseñas o datos bancarios en redes Wi-Fi públicas.',
          'Mantén actualizado el software de tu teléfono y computadora.',
          'Bloquea siempre tus dispositivos con un PIN, contraseña o huella digital.'
        ]}
      ]
    },
    tracks: {
      eyebrow: 'Hecho para ti',
      h2: 'Orientación adaptada a tu punto de partida.',
      kids: { badge: 'Para jóvenes exploradores', title: 'Para jóvenes exploradores', body: 'Reglas simples para niños y adolescentes que se familiarizan con internet.', points: [
        'Tus contraseñas son tuyas — no las compartas, ni siquiera con amigos.',
        'Mantén tu nombre real, escuela y dirección privados en línea.',
        'Si algo en línea te parece raro o da miedo, cuéntaselo a un adulto de confianza. No te meterás en problemas.',
        'Sé amable — las mismas reglas de buen trato en persona aplican también en línea.'
      ], cta: 'Ver más consejos' },
      seniors: { badge: 'Para navegantes con experiencia', title: 'Para navegantes con experiencia', body: 'Orientación tranquilizadora y práctica, porque los estafadores atacan a personas inteligentes todos los días.', points: [
        'Nunca es de mala educación colgar, tomarte tu tiempo o hacer preguntas antes de actuar.',
        '¿Un "familiar" te pide dinero con urgencia? Llámalo de vuelta a un número que ya conozcas.',
        'Ningún banco, agencia o empresa real te pedirá que pagues con tarjetas de regalo.',
        'Recibir un mensaje engañoso no significa que estés desactualizado — significa que alguien está tratando de engañarte.'
      ], cta: 'Ver más consejos' }
    },
    anatomy: {
      eyebrow: 'El patrón detrás del pánico',
      h2: 'Anatomía de una llamada fraudulenta',
      p: 'Casi todas las estafas por teléfono o texto siguen los mismos cuatro pasos. Una vez que reconoces el patrón, es mucho más fácil detectar la estafa.',
      steps: [
        { title: 'El gancho', body: 'Una llamada o texto crea una emergencia falsa, a menudo haciéndose pasar por alguien que quieres.' },
        { title: 'La urgencia', body: '"Tienes que actuar ahora mismo" — los estafadores no te dan tiempo para pensar o verificar.' },
        { title: 'El secreto', body: '"Por favor, no se lo digas a nadie" — esto aísla a las personas que podrían detectar la estafa.' },
        { title: 'La petición', body: 'Una solicitud de dinero, tarjetas de regalo o datos de la cuenta — el verdadero objetivo de la llamada.' }
      ],
      calloutStrong: 'Puedes romper el patrón en cualquier paso.',
      calloutBody: 'Cuelga, llama de vuelta a la persona a un número que ya tengas para ella, y tómate tu tiempo — una emergencia real puede esperar cinco minutos.'
    },
    story: {
      eyebrow: 'Historias reales',
      h2: 'Así suenan realmente las llamadas de estafa.',
      p: 'Las llamadas fraudulentas funcionan porque generan pánico y urgencia: un "familiar" en problemas que necesita ayuda de inmediato y te pide guardar el secreto. Estos breves videos muestran cómo se desarrolla la estafa y qué debes escuchar con atención.',
      videoFallback: 'Tu navegador no admite video incrustado.',
      videoDownload: 'Descargar el video',
      items: [
        { title: 'La llamada del "nieto en problemas"', body: 'Una dramatización de una llamada clásica de estafa del nieto, que muestra cómo un estafador genera pánico y urgencia en los primeros segundos.', quote: '"Si una llamada te pide actuar de inmediato y guardar silencio, ese secreto es la señal de alarma más grande de todas."', videoLabel: 'Video que muestra una llamada de estafa del tipo "estafa del nieto"' },
        { title: 'Cómo las estafas del nieto realmente atacan a los mayores', body: 'Un reportaje sobre cómo operan estas estafas a gran escala, y por qué funcionan tan bien incluso con personas inteligentes y cuidadosas.', quote: '"Estas llamadas están diseñadas para hacerte sentir que no hay tiempo para verificar — esa misma sensación es la señal de alarma."', videoLabel: 'Reportaje sobre estafas del nieto dirigidas a personas mayores' },
        { title: 'Cuando un "amigo" en línea se convierte en chantajista', body: 'Un reportaje sobre las estafas de sextorsión, donde un desconocido se hace pasar por un amigo en línea y luego amenaza con compartir fotos privadas a menos que la víctima pague o envíe más. Afecta a niños y adolescentes con más frecuencia de lo que la mayoría de los padres imagina.', quote: '"La foto no es la emergencia — hablar de inmediato con un adulto de confianza sí lo es. Nadie se meterá en problemas, y existen formas de eliminar las imágenes."', videoLabel: 'Reportaje sobre estafas de sextorsión dirigidas a niños y adolescentes en línea' },
        { title: 'Los "objetos gratis" que no son gratis', body: 'Un reportaje sobre cómo los estafadores atacan a los niños dentro de videojuegos en línea y aplicaciones de chat, usando sorteos falsos, objetos "gratuitos" y enlaces de intercambio manipulados para robar cuentas y datos de pago.', quote: '"Si un intercambio o sorteo dentro de un juego parece demasiado bueno para ser verdad, casi siempre lo es — un premio real nunca pide tu contraseña primero."', videoLabel: 'Reportaje sobre estafas dirigidas a niños en videojuegos en línea' }
      ]
    },
    resources: {
      eyebrow: 'Mantente informado',
      h2: 'Dónde consultar estafas conocidas y alertas de fraude.',
      p: 'Estas organizaciones confiables rastrean estafas activas, publican alertas y reciben denuncias — guarda algunas en favoritos y revísalas cuando algo te parezca sospechoso.',
      groups: [
        { title: 'Canadá', items: [
          { title: 'Centro Antifraude de Canadá', body: 'El centro nacional de Canadá para denunciar estafas y fraudes — consulta alertas actuales y presenta una denuncia.' },
          { title: 'Centro Canadiense para la Ciberseguridad', body: 'Orientación del gobierno de Canadá sobre phishing, malware y seguridad en línea.' },
          { title: 'Get Cyber Safe', body: 'Una campaña nacional de concientización con consejos en lenguaje sencillo y alertas de amenazas actuales.' },
          { title: 'Oficina de Competencia de Canadá', body: 'Rastrea el marketing engañoso y las estafas al consumidor, con una lista consultable de estafas conocidas.' }
        ]},
        { title: 'Global', items: [
          { title: 'FTC Consumer Advice (Estados Unidos)', body: 'Alertas, guías y herramienta de denuncia de estafas de la Comisión Federal de Comercio de EE. UU.' },
          { title: 'Action Fraud (Reino Unido)', body: 'El centro nacional del Reino Unido para denunciar fraude y delitos cibernéticos.' },
          { title: 'FBI Internet Crime Complaint Center (IC3)', body: 'Rastrea e investiga delitos habilitados por internet denunciados en Estados Unidos.' }
        ]},
        { title: 'Estafas cibernéticas y en línea', items: [
          { title: 'Anti-Phishing Working Group', body: 'Rastrea tendencias globales de phishing y sitios falsos; un lugar para denunciar sitios sospechosos.' },
          { title: 'Google Safe Browsing', body: 'Verifica si un sitio web ya ha sido marcado como inseguro o engañoso.' },
          { title: 'Administradores de Valores de Canadá (CSA)', body: 'Recursos de protección al inversionista para detectar estafas de inversión y criptomonedas.' }
        ]}
      ]
    },
    quiz: {
      eyebrow: 'Pon a prueba tu sentido para detectar estafas',
      h2: '¿Crees que puedes detectar una estafa? Compruébalo.',
      p: 'Cinco escenarios reales y breves. Ningún puntaje es un mal puntaje — cada pregunta te hace un poco más seguro.',
      questionOf: 'Pregunta {n} de {total}',
      answerGroupLabel: 'Opciones de respuesta',
      nextLabel: 'Siguiente pregunta',
      resultsLabel: 'Ver mis resultados',
      resultTitle: '¡Obtuviste {score} de {total}!',
      resultBody: 'Cada pregunta que pensaste con calma te hace un poco más difícil de engañar. Comparte este cuestionario con alguien que te importe, especialmente si recién está aprendiendo a detectar estafas.',
      retryLabel: 'Intentar de nuevo',
      questions: [
        { q: 'Recibes un texto de un número desconocido: "No pudimos entregar tu paquete, haz clic aquí para reprogramar." ¿Cuál es la opción más segura?',
          options: ['Hacer clic en el enlace de inmediato para no perder mi paquete', 'Revisar el rastreo directamente en el sitio o app oficial de la tienda', 'Responder "STOP" para darme de baja'],
          correct: 1,
          why: { correct: 'Exacto — escribir tú mismo la dirección real de la tienda hace que un enlace falso nunca pueda engañarte.', incorrect: 'Más seguro: evita el enlace por completo y revisa el rastreo en el sitio o app oficial de la tienda.' } },
        { q: 'Tu "nieto" te llama diciendo que está en problemas y necesita dinero de inmediato, pidiéndote que guardes el secreto. ¿Cuál es la opción más segura?',
          options: ['Enviar el dinero de inmediato, sonaba urgente', 'Colgar y volver a llamar a tu nieto a un número que ya tengas para él', 'Hacerle una pregunta personal por teléfono para comprobarlo'],
          correct: 1,
          why: { correct: 'Volver a llamar a un número que ya conoces es la forma más segura de confirmar con quién estás hablando realmente.', incorrect: 'Las voces pueden ser sorprendentemente convincentes por teléfono. Es mejor colgar y llamar a un número que ya tengas para esa persona.' } },
        { q: 'Un correo dice: "Tu cuenta será suspendida en 24 horas — verifica tu contraseña ahora", con un gran aviso urgente en rojo. ¿Cuál es la opción más segura?',
          options: ['Hacer clic en el enlace de inmediato para estar seguro', 'Ir al sitio web oficial escribiendo tú mismo la dirección'],
          correct: 1,
          why: { correct: 'La urgencia es una táctica clásica de estafa. Escribir tú mismo la dirección garantiza que llegues al sitio real.', incorrect: 'Escribe tú mismo la dirección real de la empresa en lugar de hacer clic en el enlace del correo — un tono urgente es una señal de alarma.' } },
        { q: 'Una ventana emergente dice: "¡Virus detectado! Llama a este número ahora para recibir ayuda." ¿Qué deberías hacer?',
          options: ['Llamar al número, parece oficial', 'Cerrar la ventana (o reiniciar el navegador) e ignorarla'],
          correct: 1,
          why: { correct: 'Correcto — un software de seguridad real nunca te pide llamar a un número de teléfono.', incorrect: 'Las advertencias de seguridad reales nunca piden llamar a un número de teléfono. Cierra la ventana y continúa.' } },
        { q: 'Alguien que acabas de conocer en línea te pide tu dirección y nombre completo "solo para ser amigos." ¿Cuál es la opción más segura?',
          options: ['Compartirlos, parece buena persona', 'Mantener tus datos personales privados y contárselo a un adulto o amigo de confianza'],
          correct: 1,
          why: { correct: 'Bien hecho — mantener tus datos personales privados y contárselo a alguien de confianza siempre es la opción más segura.', incorrect: 'Es mejor mantener tus datos personales privados, incluso con personas que parecen amables, y contárselo a alguien de confianza.' } }
      ]
    },
    report: {
      eyebrow: 'Obtener ayuda',
      h2: '¿Crees que detectaste una estafa, o fuiste blanco de una?',
      p: 'No estás solo, y no es demasiado tarde para actuar. Aquí es donde puedes acudir.',
      resourcesTitle: 'Lugares confiables para reportar',
      resources: [
        { title: 'Centro Antifraude de Canadá', body: '1-888-495-8501 — reporta estafas y recibe orientación, de forma gratuita y confidencial.' },
        { title: 'Tu banco o proveedor de tarjeta', body: 'Llama al número impreso en tu tarjeta o estado de cuenta, nunca a uno que te haya dado quien te llamó.' },
        { title: 'Un familiar o amigo de confianza', body: 'Hablarlo con alguien en quien confías siempre es un buen primer paso.' }
      ],
      formTitle: 'Haznos una pregunta',
      formNote: 'Tu mensaje se envía directamente a nosotros — no necesitas ninguna aplicación de correo.',
      nameLabel: 'Tu nombre', emailLabel: 'Correo electrónico', messageLabel: '¿Qué sucedió?',
      submitLabel: 'Enviar mi mensaje',
      successMsg: 'Enviando tu mensaje…',
      errorMsg: 'Algo salió mal. Vuelve a intentarlo, o escríbenos directamente a contact@commonsensecyber.org.'
    },
    faq: {
      eyebrow: 'Preguntas', h2: 'Preguntas frecuentes',
      items: [
        { q: '¿Common Sense Cyber es una agencia gubernamental?', a: 'No. Somos un recurso independiente de concientización, no afiliado a ninguna agencia gubernamental, banco o servicio policial. Compartimos orientación educativa general — siempre verifica cualquier cosa urgente por canales oficiales.' },
        { q: 'Creo que ya caí en una estafa. ¿Qué debo hacer primero?', a: 'Contacta de inmediato a tu banco o proveedor de tarjeta usando el número que aparece en tu tarjeta, y luego comunícate con el Centro Antifraude de Canadá. Actuar con rapidez puede marcar una verdadera diferencia, y no hay nada de vergonzoso en pedir ayuda.' },
        { q: '¿Necesito ser "experto en tecnología" para usar este sitio?', a: 'Para nada — de eso se trata. Cada guía aquí está escrita en lenguaje sencillo, sin suponer conocimientos técnicos previos.' },
        { q: '¿Puedo compartir este sitio con mi familia?', a: '¡Por favor, hazlo! Common Sense Cyber es gratuito para usar y compartir, especialmente con los jóvenes exploradores y los navegantes con experiencia de tu vida.' }
      ]
    },
    community: {
      eyebrow: 'Historias de la comunidad',
      h2: '¿Te ha pasado algo parecido a esto?',
      p: 'Las experiencias reales ayudan a otros visitantes a reconocer las mismas señales de alerta. Cada historia se revisa antes de publicarse, y puedes quedar en el anonimato si lo prefieres.',
      emptyTitle: 'Todavía no hay historias',
      emptyBody: 'Sé la primera persona en compartir la tuya — tu experiencia podría ayudar a alguien más a reconocer la misma estafa.',
      anonymousName: 'Anónimo',
      formTitle: 'Comparte tu historia',
      formNote: 'Tu historia se envía directamente a nosotros. Nada se publica automáticamente — una persona real revisa cada historia antes de que aparezca en el sitio.',
      nameLabel: 'Tu nombre (opcional)', anonymousLabel: 'Publicar esto de forma anónima', storyLabel: '¿Qué sucedió?',
      emailLabel: 'Tu correo electrónico (privado — solo se usa si tenemos una pregunta de seguimiento, nunca se publica)',
      consentLabel: 'Estoy de acuerdo con que esta historia sea revisada y posiblemente compartida en este sitio.',
      submitLabel: 'Enviar mi historia',
      successMsg: 'Enviando tu historia…',
      errorMsg: 'Algo salió mal. Vuelve a intentarlo, o escríbenos directamente a contact@commonsensecyber.org.'
    },
    legal: {
      h2: 'Privacidad y términos',
      p: 'Cómo manejamos la información en este sitio, en lenguaje sencillo.',
      items: [
        { q: '¿Qué información recopilan?', a: "Los formularios de Obtener ayuda y Comparte tu historia envían tu mensaje directamente a nosotros a través de un servicio de correo transaccional (Resend) — no operamos ninguna base de datos, así que no se guarda nada más allá de ese correo. Las historias comunitarias solo se publican después de que una persona real las revise, y puedes pedir que tu historia sea editada, anonimizada o eliminada en cualquier momento. Consulta la política de privacidad de Resend para saber cómo manejan la entrega de mensajes." },
        { q: '¿Qué guardan en mi dispositivo?', a: "Solo dos pequeñas preferencias, guardadas en el almacenamiento local de tu navegador: tu idioma elegido y el tamaño de texto. Ambas permanecen en tu dispositivo y nunca se nos envían." },
        { q: '¿Usan cookies, rastreo o análisis?', a: "Ninguna cookie publicitaria, script de rastreo o análisis de ningún tipo. La única excepción es Google Fonts, usado para mostrar texto en varios idiomas — al cargarlo, es posible que se comparta tu dirección IP con Google. Consulta la política de privacidad de Google para más detalles." },
        { q: '¿Qué hay de la privacidad de los niños?', a: "Common Sense Cyber está escrito para lectores de todas las edades, incluidos los niños, pero no recopilamos conscientemente información personal de nadie. Cada formulario es opcional, y recomendamos que un padre, madre o tutor revise cualquier mensaje antes de enviarlo." },
        { q: '¿Es esto un aviso oficial del gobierno o legal?', a: "No. Common Sense Cyber es un recurso educativo independiente y no está afiliado a ninguna agencia gubernamental, banco o cuerpo policial. Nada en este sitio es asesoría legal, financiera o de seguridad profesional — siempre verifica cualquier asunto urgente a través de canales oficiales. Los enlaces a sitios externos (como Have I Been Pwned o recursos gubernamentales) llevan a organizaciones independientes que no controlamos." },
        { q: '¿Preguntas sobre esta página?', a: 'Escríbenos cuando quieras a contact@commonsensecyber.org.' }
      ]
    },
    footer: {
      tagline: 'Seguridad en línea, explicada con sencillez.',
      disclaimer: 'Common Sense Cyber es un recurso educativo independiente y no está afiliado a ninguna agencia gubernamental, banco o cuerpo policial. En caso de emergencia, o si ya se envió dinero, contacta de inmediato a tu banco y al Centro Antifraude de Canadá.',
      copyright: '© {year} Common Sense Cyber. Hecho con cuidado.'
    }
  },
  zh: {
    meta: { name: '中文', dir: 'ltr', minLabel: '分钟' },
    pageTitle: 'Common Sense Cyber — 网络安全，简单易懂',
    metaDescription: 'Common Sense Cyber 用简单的语言讲解日常网络安全知识——面向儿童、长者以及每一个人。没有术语，没有指责。',
    skipLink: '跳转到主要内容',
    logoAlt: 'Common Sense Cyber 标志——一个微笑的盾牌吉祥物',
    heroArtAlt: 'Common Sense Cyber 吉祥物插图，一个微笑的盾牌',
    footerLogoAlt: 'Common Sense Cyber 标志',
    nav: { basics: '学习基础知识', tracks: '儿童与长者', story: '真实案例', quiz: '小测验', resources: '资源', report: '获取帮助', faq: '常见问题', community: '分享你的故事' },
    header: { textSize: '放大文字，方便阅读', menuOpen: '打开菜单', menuClose: '关闭菜单', lang: '选择语言' },
    brand: { tagline: '网络安全，简单易懂' },
    hero: {
      eyebrow: '免费又友善的网络安全指南',
      h1: '用您听得懂的语言讲网络安全。',
      p: '没有术语，没有指责。只有简单、温暖的建议，帮您识别诈骗、保护账户，安全上网——无论您是9岁还是90岁。',
      ctaPrimary: '开始学习基础知识',
      ctaSecondary: '观看真实案例',
      stat1: '6', stat1Label: '通俗易懂的主题',
      stat2: '2', stat2Label: '儿童与长者专属指南',
      stat3: '5', stat3Label: '防骗小测验'
    },
    mission: {
      eyebrow: '我们的初衷',
      h2: '每个人都应该能安心上网——不需要懂计算机。',
      p: '大多数网络安全建议都是写给已经懂网络安全的人看的。Common Sense Cyber 反其道而行之。我们把真正有用的安全知识，转化为简单、温暖、不带评判的建议，献给最需要它的人：刚开始上网的孩子、正在适应新科技的长者，以及任何不想为了安全而去研究术语的人。',
      pillars: [
        { title: '语言简单', body: '没有缩写词，没有恐吓手段——只有任何人第一次就能看懂的清晰解释。' },
        { title: '没有指责', body: '被骗并不代表您做错了什么。我们注重建立信心，而不是制造羞愧感。' },
        { title: '适合所有年龄', body: '从孩子的第一台平板电脑，到祖父母的第一部智能手机——我们的建议贴近真实生活，而非只面向技术专家。' }
      ]
    },
    basics: {
      eyebrow: '学习基础知识',
      h2: '六件值得了解的事——没有术语，简单明了。',
      p: '点击任意主题，查看今天就能用上的实用建议。',
      seeTips: '查看建议',
      tips: [
        { title: '识别诈骗信息', summary: '让您恐慌并迅速点击的短信和邮件。', points: [
          '正规公司很少催促您——紧迫感是最大的警示信号。',
          '仔细核对发件人地址，而不只是显示的名字。',
          '如有疑问，请使用您已知的号码联系该公司——而不是信息里提供的号码。'
        ]},
        { title: '密码安全', summary: '几个小习惯就能防住大多数账户入侵。', points: [
          '使用3到4个随机单词组成的密码短语，而不是简短复杂的密码。',
          '不要在不同网站重复使用同一个密码。',
          '只要有提供，就开启两步验证——这是您能做的最有效的升级。',
          '好密码绝不应该是真实单词、您的姓名、生日或宠物的名字——这些都是最容易被猜到的。',
          '避免使用"123456"、"password"这类可预测组合，或"qwerty"这样的键盘连排。',
          '任何正规公司都绝不会打电话、发短信或发邮件要求您把密码说出来。'
        ]},
        { title: '安全上网', summary: '一些小细节能告诉您某个网站（或警告）是否可信。', points: [
          '输入任何信息前，先查看锁形图标和网址是否为"https"。',
          '忽略声称您的设备已感染病毒的弹窗——真正的安全软件从不这样运作。',
          '及时更新浏览器和应用程序；更新通常会修补安全漏洞。'
        ]},
        { title: '社交媒体与隐私', summary: '您分享的内容，可能会以意想不到的方式被用来对付您。', points: [
          '发布生日、住址或旅行计划前，请三思。',
          '每隔几个月检查一次隐私设置——默认设置可能会改变。',
          '对来自不认识的人的好友请求要谨慎接受。'
        ]},
        { title: '保护您的钱财', summary: '在造成损失之前，识别金融诈骗。', points: [
          '任何真正的银行或政府机构，都绝不会要求您用礼品卡或加密货币付款。',
          '收到意外的转账请求，即使对方自称是"家人"？请用您已有的号码回拨确认。',
          '放慢脚步。真正合理的请求，总能等到您核实清楚之后。'
        ]},
        { title: 'Wi-Fi 与设备安全', summary: '保护设备安全的日常好习惯。', points: [
          '避免在公共Wi-Fi上输入密码或银行信息。',
          '保持手机和电脑软件为最新版本。',
          '始终使用密码、PIN码或指纹锁定您的设备。'
        ]}
      ]
    },
    tracks: {
      eyebrow: '为您量身定制',
      h2: '根据您的起点，量身定制的建议。',
      kids: { badge: '小小探索家专区', title: '小小探索家专区', body: '为刚开始熟悉网络的儿童和青少年准备的简单规则。', points: [
        '密码是您自己的——即使是朋友也不要分享。',
        '在网上保护好您的真实姓名、学校和住址等隐私信息。',
        '如果网上有什么让您觉得奇怪或害怕的事，请告诉您信任的成年人。您不会因此惹上麻烦。',
        '友善待人——线下的礼貌规则，在线上同样适用。'
      ], cta: '查看更多建议' },
      seniors: { badge: '智慧网络达人专区', title: '智慧网络达人专区', body: '安心实用的建议——因为骗子每天都在盯上聪明的人。', points: [
        '挂断电话、放慢节奏或在行动前多问几句，这从来都不失礼。',
        '"家人"打来电话紧急要钱？请用您已有的号码回拨确认。',
        '任何真正的银行、机构或公司，都不会要求您用礼品卡付款。',
        '收到棘手的信息，并不代表您跟不上时代——这只说明有人正试图欺骗您。'
      ], cta: '查看更多建议' }
    },
    anatomy: {
      eyebrow: '恐慌背后的套路',
      h2: '诈骗电话解剖图',
      p: '几乎所有电话或短信诈骗，都遵循相同的四个步骤。一旦您能识别这个套路，就更容易识破诈骗。',
      steps: [
        { title: '引子', body: '一通电话或短信制造一个虚假的紧急情况——常常冒充您所爱的人。' },
        { title: '制造紧迫感', body: '"您必须立刻行动"——骗子不会给您时间思考或核实。' },
        { title: '要求保密', body: '"请不要告诉任何人"——这会切断可能识破骗局的人。' },
        { title: '提出要求', body: '索要钱款、礼品卡或账户信息——这才是这通电话真正的目的。' }
      ],
      calloutStrong: '在任何一个环节，您都可以打破这个套路。',
      calloutBody: '挂断电话，用您已有的号码回拨确认，慢慢来——真正的紧急情况，经得起五分钟的等待。'
    },
    story: {
      eyebrow: '真实案例',
      h2: '真实的诈骗电话，听起来是什么样的。',
      p: '诈骗电话之所以有效，是因为它们制造恐慌和紧迫感——一位"亲人"陷入麻烦，急需帮助，并要求您保密。这些短片展示了骗局如何展开，以及您应该留意什么。',
      videoFallback: '您的浏览器不支持嵌入视频播放。',
      videoDownload: '下载视频',
      items: [
        { title: '"孙辈遇到麻烦"电话', body: '一段假冒亲人诈骗电话的情景重现，展示骗子如何在最初几秒内制造恐慌和紧迫感。', quote: '"如果一通电话要求您立刻行动并保守秘密，这种保密要求本身，就是最大的警示信号。"', videoLabel: '展示假冒亲人诈骗电话的视频' },
        { title: '假冒亲人诈骗如何真正盯上长者', body: '一段新闻报道，讲述这类诈骗如何大规模运作，以及为什么即使是聪明谨慎的人也常常上当。', quote: '"这些电话的设计目的，就是让您觉得没有时间核实——而这种感觉本身，就是警示信号。"', videoLabel: '关于假冒亲人诈骗针对长者的新闻报道' },
        { title: '当网上的"朋友"变成勒索者', body: '一段关于"性勒索"诈骗的新闻报道：陌生人在网上冒充朋友，取得私密照片后，威胁受害者付款或发送更多照片，否则就公开这些照片。这种诈骗针对儿童和青少年的频率，远超大多数家长的想象。', quote: '"照片本身不是最要紧的事——立刻告诉信任的成年人才是。没有人会因此惹上麻烦，而且有办法让这些照片被撤下。"', videoLabel: '关于针对儿童和青少年的性勒索诈骗的新闻报道' },
        { title: '"免费皮肤"其实并不免费', body: '一段新闻报道，讲述骗子如何在网络游戏和聊天软件中盯上孩子，利用虚假抽奖、"免费"道具和精心设计的交易链接，窃取账号和支付信息。', quote: '"如果游戏里的交易或抽奖好得不像真的，那多半就不是真的——真正的奖品绝不会先向你索要密码。"', videoLabel: '关于针对儿童的网络游戏诈骗的新闻报道' }
      ]
    },
    resources: {
      eyebrow: '保持知情',
      h2: '在哪里查询已知诈骗和欺诈警报。',
      p: '这些值得信赖的机构追踪活跃的诈骗活动、发布警报并接受举报——收藏几个，遇到可疑情况时随时查阅。',
      groups: [
        { title: '加拿大', items: [
          { title: '加拿大反诈骗中心', body: '加拿大国家级诈骗与欺诈举报中心——查询最新诈骗警报并提交举报。' },
          { title: '加拿大网络安全中心', body: '加拿大政府关于网络钓鱼、恶意软件及网络安全的指导。' },
          { title: 'Get Cyber Safe', body: '一项全国性公众宣传活动，提供通俗易懂的建议和最新威胁警报。' },
          { title: '加拿大竞争局', body: '追踪欺骗性营销和消费者诈骗，提供可查询的已知诈骗列表。' }
        ]},
        { title: '国际', items: [
          { title: 'FTC 消费者建议（美国）', body: '美国联邦贸易委员会提供的消费者诈骗警报、指南和举报工具。' },
          { title: 'Action Fraud（英国）', body: '英国国家级诈骗与网络犯罪举报中心。' },
          { title: 'FBI 网络犯罪投诉中心（IC3）', body: '追踪并调查在美国举报的网络犯罪。' }
        ]},
        { title: '网络与线上诈骗', items: [
          { title: '反网络钓鱼工作组（APWG）', body: '追踪全球网络钓鱼和虚假网站趋势，可用于举报可疑网站。' },
          { title: 'Google 安全浏览', body: '查询某个网站是否已被标记为不安全或具有欺骗性。' },
          { title: '加拿大证券管理机构（CSA）', body: '帮助识别投资和加密货币诈骗的投资者保护资源。' }
        ]}
      ]
    },
    quiz: {
      eyebrow: '测测您的防骗直觉',
      h2: '您觉得自己能识破诈骗吗？来试试看。',
      p: '五个真实场景快问快答。得分高低都没关系——每答一题，您都会更安全一点。',
      questionOf: '第 {n} 题，共 {total} 题',
      answerGroupLabel: '答案选项',
      nextLabel: '下一题',
      resultsLabel: '查看结果',
      resultTitle: '您答对了 {total} 题中的 {score} 题！',
      resultBody: '您认真思考过的每一道题，都让骗子更难得逞。请把这个测验分享给您关心的人——尤其是刚开始学习识别诈骗的人。',
      retryLabel: '再试一次',
      questions: [
        { q: '您收到一条来自陌生号码的短信："您的包裹无法投递，点击这里重新安排。"最安全的做法是什么？',
          options: ['立刻点击链接，以免错过包裹', '直接在快递公司官方网站或App上查询物流', '回复"STOP"退订'],
          correct: 1,
          why: { correct: '完全正确——自己输入快递公司的真实网址，假链接就永远骗不了您。', incorrect: '更安全的做法是：完全不点这个链接，直接在快递公司官方网站或App上查询物流。' } },
        { q: '您的"孙子/孙女"打电话说自己遇到麻烦，急需汇款，并要求您保密。最安全的做法是什么？',
          options: ['立刻汇款，听起来很紧急', '挂断电话，用您已有的号码回拨给孙子/孙女确认', '在电话里问一个私人问题来核实身份'],
          correct: 1,
          why: { correct: '用您已知的号码回拨，是确认对方真实身份最安全的方式。', incorrect: '电话里的声音可能出奇地逼真。更安全的做法是挂断电话，用您已有的号码回拨确认。' } },
        { q: '一封邮件写道："您的账户将在24小时内被冻结——请立即验证密码"，并附有醒目的红色紧急提示。最安全的做法是什么？',
          options: ['立刻点击链接，以防万一', '自己手动输入网址，前往官方网站'],
          correct: 1,
          why: { correct: '制造紧迫感是典型的诈骗手法。自己输入网址，能确保您登录的是真实网站。', incorrect: '请自己输入公司的真实网址，而不是点击邮件中的链接——紧急的语气就是一个警示信号。' } },
        { q: '一个弹窗提示："检测到病毒！请立即拨打此号码获取帮助。"您应该怎么做？',
          options: ['拨打这个号码，看起来很正规', '关闭弹窗（或重启浏览器），不予理会'],
          correct: 1,
          why: { correct: '没错——真正的安全软件绝不会要求您拨打电话号码。', incorrect: '真正的安全警告绝不会要求您拨打电话号码。请关闭弹窗，继续做您的事。' } },
        { q: '一位您刚在网上认识的人，以"只是想做朋友"为由，向您索要家庭住址和全名。最安全的做法是什么？',
          options: ['分享给对方，看起来人挺好', '保护好个人隐私信息，并告诉信任的成年人或朋友这件事'],
          correct: 1,
          why: { correct: '做得好——保护好个人隐私信息，并告诉信任的人，永远是更安全的选择。', incorrect: '即使对方看起来很友善，也最好保护好个人隐私信息，并告诉信任的人这件事。' } }
      ]
    },
    report: {
      eyebrow: '获取帮助',
      h2: '您觉得自己发现了诈骗——或者已经成为受害者？',
      p: '您并不孤单，现在行动也为时不晚。以下是您可以求助的渠道。',
      resourcesTitle: '值得信赖的举报渠道',
      resources: [
        { title: '加拿大反诈骗中心', body: '1-888-495-8501——举报诈骗并获取建议，完全免费且保密。' },
        { title: '您的银行或信用卡发卡机构', body: '请拨打印在您卡片或对账单上的号码——切勿使用来电者提供的号码。' },
        { title: '信任的家人或朋友', body: '找信任的人聊一聊，永远是明智的第一步。' }
      ],
      formTitle: '向我们提问',
      formNote: '您的留言将直接发送给我们——无需任何邮件应用。',
      nameLabel: '您的姓名', emailLabel: '电子邮箱', messageLabel: '发生了什么事？',
      submitLabel: '发送我的留言',
      successMsg: '正在发送您的留言……',
      errorMsg: '出了点问题，请重试，或直接发邮件至 contact@commonsensecyber.org 与我们联系。'
    },
    faq: {
      eyebrow: '常见问题', h2: '常见问题解答',
      items: [
        { q: 'Common Sense Cyber 是政府机构吗？', a: '不是。我们是一个独立的宣传教育平台，不隶属于任何政府机构、银行或警察部门。我们提供的是通用的教育性建议——如遇紧急情况，请务必通过官方渠道核实。' },
        { q: '我觉得自己可能已经上当受骗了，第一步该怎么做？', a: '请立即使用卡片上的号码联系您的银行或发卡机构，然后联系加拿大反诈骗中心。尽快行动能带来真正的改变——寻求帮助并不丢人。' },
        { q: '我需要"很懂技术"才能使用这个网站吗？', a: '完全不需要——这正是我们的宗旨。这里的每一篇指南都用简单的语言写成，不假设您具备任何技术背景。' },
        { q: '我可以把这个网站分享给家人吗？', a: '请一定要分享！Common Sense Cyber 完全免费，欢迎使用和分享——尤其是分享给您身边的小小探索家和智慧网络达人。' }
      ]
    },
    community: {
      eyebrow: '社区故事',
      h2: '类似的事情发生在您身上过吗？',
      p: '真实的经历能帮助其他访客识别同样的警示信号。每一篇投稿在发布前都会经过审核，您也可以选择匿名。',
      emptyTitle: '暂时还没有故事',
      emptyBody: '成为第一个分享故事的人——您的经历也许能帮助别人识破同样的骗局。',
      anonymousName: '匿名用户',
      formTitle: '分享您的故事',
      formNote: '您的故事将直接发送给我们。内容不会自动发布——每一篇投稿都会经过真人审核后才会出现在网站上。',
      nameLabel: '您的姓名（可选）', anonymousLabel: '匿名发布', storyLabel: '发生了什么事？',
      emailLabel: '您的电子邮箱（保密——仅在需要跟进提问时使用，绝不会公开）',
      consentLabel: '我同意这篇故事被审核，并可能被分享到本网站上。',
      submitLabel: '发送我的故事',
      successMsg: '正在发送您的故事……',
      errorMsg: '出了点问题，请重试，或直接发邮件至 contact@commonsensecyber.org 与我们联系。'
    },
    legal: {
      h2: '隐私与条款',
      p: '我们如何处理本网站上的信息，用简单易懂的语言说明。',
      items: [
        { q: '你们会收集哪些信息？', a: '"获取帮助"和"分享您的故事"表单会通过一个事务性邮件服务（Resend）将您的留言直接发送给我们——我们不运营任何数据库，因此除了那封邮件之外不会保存任何内容。社区故事只有在真人审核后才会发布，您可以随时要求编辑、匿名处理或删除您的故事。有关邮件投递的处理方式，请参阅 Resend 的隐私政策。' },
        { q: '你们会在我的设备上存储什么？', a: '仅有两项很小的偏好设置，保存在您浏览器的本地存储中：您选择的语言和文字大小。两者都只保留在您的设备上，绝不会发送给我们。' },
        { q: '你们使用 Cookie、跟踪或分析工具吗？', a: '不使用任何广告 Cookie、跟踪脚本或分析工具。唯一的例外是 Google Fonts，用于显示多语言文本——加载它可能会将您的 IP 地址分享给 Google。详情请参阅 Google 的隐私政策。' },
        { q: '关于儿童隐私呢？', a: 'Common Sense Cyber 面向所有年龄段的读者，包括儿童，但我们不会在明知情况下收集任何人的个人信息。所有表单都是可选的，我们建议家长或监护人在发送前先查看内容。' },
        { q: '这是官方政府或法律建议吗？', a: '不是。Common Sense Cyber 是一个独立的教育资源网站，并未与任何政府机构、银行或执法部门存在关联。本网站上的内容均不构成专业的法律、财务或安全建议——紧急情况请务必通过官方渠道核实。指向外部网站的链接（如 Have I Been Pwned 或政府资源）会带您前往我们无法控制的独立机构网站。' },
        { q: '对本页面有疑问？', a: '欢迎随时通过 contact@commonsensecyber.org 与我们联系。' }
      ]
    },
    footer: {
      tagline: '网络安全，简单易懂。',
      disclaimer: 'Common Sense Cyber 是一个独立的教育资源平台，不隶属于任何政府机构、银行或执法部门。如遇紧急情况，或已经汇出款项，请立即联系您的银行和加拿大反诈骗中心。',
      copyright: '© {year} Common Sense Cyber。用心制作。'
    }
  },
  ar: {
    meta: { name: 'العربية', dir: 'rtl', minLabel: 'دقائق' },
    pageTitle: 'Common Sense Cyber — الأمان الرقمي ببساطة',
    metaDescription: 'يُعلّم Common Sense Cyber الأمان الرقمي اليومي بلغة بسيطة — للأطفال وكبار السن وكل شخص بينهما. بلا مصطلحات معقدة، وبلا إصدار أحكام.',
    skipLink: 'الانتقال إلى المحتوى الرئيسي',
    logoAlt: 'شعار Common Sense Cyber — تميمة درع مبتسم',
    heroArtAlt: 'رسم توضيحي لتميمة Common Sense Cyber، درع مبتسم',
    footerLogoAlt: 'شعار Common Sense Cyber',
    nav: { basics: 'تعلّم الأساسيات', tracks: 'الأطفال وكبار السن', story: 'قصص حقيقية', quiz: 'اختبار', resources: 'مصادر', report: 'طلب المساعدة', faq: 'الأسئلة الشائعة', community: 'شارك قصتك' },
    header: { textSize: 'تكبير حجم النص لتسهيل القراءة', menuOpen: 'فتح القائمة', menuClose: 'إغلاق القائمة', lang: 'اختر اللغة' },
    brand: { tagline: 'الأمان الرقمي، مشروحًا ببساطة' },
    hero: {
      eyebrow: 'أمان رقمي مجاني وودود',
      h1: 'أمان رقمي يتحدث بلغتك.',
      p: 'بلا مصطلحات معقدة، وبلا إصدار أحكام. مجرد إرشادات بسيطة ودافئة لاكتشاف عمليات الاحتيال، وحماية حساباتك، والبقاء آمنًا على الإنترنت — سواء كان عمرك 9 سنوات أو 90 سنة.',
      ctaPrimary: 'ابدأ بتعلّم الأساسيات',
      ctaSecondary: 'شاهد قصة حقيقية',
      stat1: '6', stat1Label: 'مواضيع مشروحة ببساطة',
      stat2: '2', stat2Label: 'مسارات للأطفال وكبار السن',
      stat3: '5', stat3Label: 'اختبار الحس الوقائي من الاحتيال'
    },
    mission: {
      eyebrow: 'لماذا نقوم بهذا',
      h2: 'يستحق الجميع الشعور بالأمان على الإنترنت — دون الحاجة إلى شهادة في التكنولوجيا.',
      p: 'مُعظم نصائح الأمان الرقمي مكتوبة لأشخاص يفهمون الأمان الرقمي أصلًا. Common Sense Cyber يقلب هذه المعادلة. نحن نترجم معرفة أمنية حقيقية إلى إرشادات بسيطة ودافئة وخالية من إصدار الأحكام، لمن هم بأمسّ الحاجة إليها: الأطفال الذين بدؤوا للتو استخدام الإنترنت، وكبار السن الذين يتأقلمون مع التقنيات الجديدة، وأي شخص يفضّل عدم فك رموز المصطلحات التقنية ليبقى آمنًا.',
      pillars: [
        { title: 'لغة بسيطة', body: 'بلا اختصارات، وبلا أساليب تخويف — فقط شروحات واضحة يمكن لأي شخص فهمها من المرة الأولى.' },
        { title: 'بلا إصدار أحكام', body: 'الوقوع ضحية لعملية احتيال لا يعني أنك فعلت شيئًا خاطئًا. نحن نركّز على بناء الثقة، لا الشعور بالخجل.' },
        { title: 'لكل الأعمار', body: 'من أول جهاز لوحي لطفل، إلى أول هاتف ذكي لجدّ أو جدة — إرشادات مبنية على الحياة الواقعية، لا على الخبرة التقنية.' }
      ]
    },
    basics: {
      eyebrow: 'تعلّم الأساسيات',
      h2: 'ستة أمور تستحق المعرفة — موضّحة بلا مصطلحات معقدة.',
      p: 'اضغط على أي موضوع لرؤية بعض النصائح العملية التي يمكنك استخدامها اليوم.',
      seeTips: 'عرض النصائح',
      tips: [
        { title: 'اكتشاف الرسائل الاحتيالية', summary: 'رسائل نصية وإلكترونية مصمَّمة لجعلك تصاب بالذعر وتضغط بسرعة.', points: [
          'الشركات الحقيقية نادرًا ما تستعجلك — الإلحاح هو أكبر إشارة تحذير.',
          'تحقّق بعناية من عنوان المُرسِل، وليس فقط من الاسم الظاهر.',
          'عند الشك، تواصل مع الشركة عبر رقم تثق به مسبقًا — وليس الرقم الوارد في الرسالة.'
        ]},
        { title: 'أمان كلمات المرور', summary: 'بضع عادات بسيطة تمنع معظم عمليات اختراق الحسابات.', points: [
          'استخدم عبارة مرور من 3 إلى 4 كلمات عشوائية بدلًا من كلمة مرور قصيرة ومعقدة.',
          'لا تعيد استخدام كلمة المرور نفسها على مواقع مختلفة.',
          'فعّل التحقق بخطوتين أينما كان متاحًا — إنه أفضل تحسين يمكنك القيام به.',
          'يجب ألا تكون كلمة المرور الجيدة كلمة حقيقية، أو اسمك، أو تاريخ ميلادك، أو اسم حيوانك الأليف — فهذه أول ما يتم تخمينه.',
          'تجنّب الأنماط المتوقعة مثل "123456" أو "password"، أو تسلسلات لوحة المفاتيح مثل "qwerty".',
          'لن تطلب منك أي شركة حقيقية أبدًا، عبر الهاتف أو الرسائل النصية أو البريد الإلكتروني، أن تنطق كلمة مرورك بصوت عالٍ.'
        ]},
        { title: 'تصفّح آمن', summary: 'علامات صغيرة تخبرك أن موقعًا ما (أو تحذيرًا ما) جدير بالثقة.', points: [
          'ابحث عن رمز القفل و"https" قبل إدخال أي معلومات.',
          'تجاهل النوافذ المنبثقة التي تدّعي إصابة جهازك بفيروس — برامج الأمان الحقيقية لا تعمل بهذه الطريقة أبدًا.',
          'حافظ على تحديث متصفحك وتطبيقاتك؛ فالتحديثات غالبًا ما تصلح ثغرات أمنية.'
        ]},
        { title: 'وسائل التواصل الاجتماعي والخصوصية', summary: 'ما تشاركه يمكن أن يُستخدم ضدك بطرق مفاجئة.', points: [
          'فكّر مرتين قبل نشر تاريخ ميلادك أو عنوانك أو خطط سفرك.',
          'راجع إعدادات الخصوصية كل بضعة أشهر — فالإعدادات الافتراضية تتغيّر.',
          'كن حذرًا عند قبول طلبات صداقة من أشخاص لا تعرفهم فعليًا.'
        ]},
        { title: 'حماية أموالك', summary: 'كيف تتعرّف على احتيال مالي قبل أن يكلّفك ثمنًا باهظًا.', points: [
          'لا يطلب أي بنك أو جهة حكومية حقيقية الدفع عبر بطاقات هدايا أو عملات مشفّرة أبدًا.',
          'وصلك طلب غير متوقع للمال، حتى لو من "أحد أفراد العائلة"؟ اتصل به على رقم تملكه مسبقًا للتأكد.',
          'خذ وقتك. الطلب المشروع يمكن أن ينتظر دائمًا حتى تتحقق منه.'
        ]},
        { title: 'واي فاي والأجهزة', summary: 'عادات يومية تحافظ على أمان أجهزتك.', points: [
          'تجنّب إدخال كلمات المرور أو المعلومات المصرفية على شبكات واي فاي عامة.',
          'حافظ على تحديث برامج هاتفك وحاسوبك.',
          'أغلق أجهزتك دائمًا برمز سرّي أو كلمة مرور أو بصمة إصبع.'
        ]}
      ]
    },
    tracks: {
      eyebrow: 'مصمَّم من أجلك',
      h2: 'إرشادات مصمَّمة بحسب نقطة انطلاقك.',
      kids: { badge: 'للمستكشفين الصغار', title: 'للمستكشفين الصغار', body: 'قواعد بسيطة للأطفال والمراهقين الذين بدؤوا للتو التعوّد على الإنترنت.', points: [
        'كلمات مرورك ملكك وحدك — لا تشاركها، حتى مع الأصدقاء.',
        'احتفظ باسمك الحقيقي ومدرستك وعنوانك خاصة على الإنترنت.',
        'إذا شعرت بأن شيئًا ما على الإنترنت غريب أو مخيف، أخبر شخصًا بالغًا تثق به. لن تقع في مشكلة.',
        'كن لطيفًا — نفس قواعد اللطف الشخصي تنطبق أيضًا على الإنترنت.'
      ], cta: 'عرض المزيد من النصائح' },
      seniors: { badge: 'لمستخدمي الإنترنت الحكماء', title: 'لمستخدمي الإنترنت الحكماء', body: 'إرشادات عملية ومطمئنة — لأن المحتالين يستهدفون أشخاصًا أذكياء كل يوم.', points: [
        'لا حرج أبدًا في إنهاء المكالمة، أو التمهّل، أو طرح الأسئلة قبل التصرّف.',
        '"أحد أفراد العائلة" يطلب مالًا بشكل عاجل؟ اتصل به على رقم تملكه مسبقًا للتأكد.',
        'لا يطلب أي بنك أو جهة أو شركة حقيقية منك الدفع ببطاقات الهدايا.',
        'تلقّي رسالة مخادعة لا يعني أنك متأخر عن العصر — بل يعني أن أحدهم يحاول خداعك.'
      ], cta: 'عرض المزيد من النصائح' }
    },
    anatomy: {
      eyebrow: 'النمط الكامن وراء الذعر',
      h2: 'تشريح مكالمة احتيالية',
      p: 'تتبع كل عملية احتيال عبر الهاتف أو الرسائل النصية تقريبًا نفس الخطوات الأربع. بمجرد أن تتعرّف على هذا النمط، يصبح اكتشاف الاحتيال أسهل بكثير.',
      steps: [
        { title: 'الطُعم', body: 'مكالمة أو رسالة تخلق حالة طوارئ وهمية — غالبًا بانتحال شخصية شخص تحبّه.' },
        { title: 'الإلحاح', body: '"يجب أن تتصرف الآن فورًا" — لا يمنحك المحتالون وقتًا للتفكير أو التحقق.' },
        { title: 'الكتمان', body: '"من فضلك لا تخبر أحدًا" — هذا يقطع الطريق أمام من قد يكتشف الاحتيال.' },
        { title: 'الطلب', body: 'طلب مال أو بطاقات هدايا أو بيانات حساب — الهدف الحقيقي من المكالمة.' }
      ],
      calloutStrong: 'يمكنك كسر هذا النمط في أي خطوة.',
      calloutBody: 'أنهِ المكالمة، واتصل بالشخص على رقم تملكه مسبقًا، وخذ وقتك — أي حالة طوارئ حقيقية يمكنها الانتظار خمس دقائق.'
    },
    story: {
      eyebrow: 'قصص حقيقية',
      h2: 'كيف تبدو مكالمات الاحتيال الحقيقية فعليًا.',
      p: 'تنجح المكالمات الاحتيالية لأنها تخلق ذعرًا وإلحاحًا — "قريب" في ورطة، بحاجة إلى مساعدة فورية، ويطلب منك كتمان الأمر. تعرض هذه الفيديوهات القصيرة كيف تتكشّف عملية الاحتيال وما يجب الانتباه إليه.',
      videoFallback: 'متصفحك لا يدعم عرض الفيديو المضمّن.',
      videoDownload: 'تحميل الفيديو',
      items: [
        { title: 'مكالمة "الحفيد في ورطة"', body: 'تمثيل درامي لمكالمة احتيال أجداد كلاسيكية، يوضّح كيف يخلق المحتال الذعر والإلحاح في الثواني الأولى.', quote: '"إذا طلبت منك مكالمة ما التصرف فورًا والتزام الصمت، فإن هذا الكتمان بحد ذاته هو أكبر إشارة تحذير."', videoLabel: 'فيديو يوضّح مكالمة احتيال من نوع احتيال الأجداد' },
        { title: 'كيف تستهدف احتيالات الأجداد كبار السن فعليًا', body: 'تقرير إخباري عن كيفية عمل هذه الاحتيالات على نطاق واسع، ولماذا تنجح بشكل جيد حتى مع الأشخاص الأذكياء والحذرين.', quote: '"صُمّمت هذه المكالمات لتجعلك تشعر بأنه لا وقت للتحقق — وهذا الشعور بحد ذاته هو إشارة التحذير."', videoLabel: 'تقرير إخباري عن احتيالات الأجداد التي تستهدف كبار السن' },
        { title: 'عندما يتحوّل "صديق" افتراضي إلى مبتزّ', body: 'تقرير إخباري عن عمليات الابتزاز الجنسي، حيث يتظاهر شخص غريب بأنه صديق عبر الإنترنت، ثم يهدد بمشاركة صور خاصة ما لم يدفع الهدف أو يرسل المزيد. يستهدف هذا النوع من الاحتيال الأطفال والمراهقين أكثر بكثير مما يتصور معظم الآباء.', quote: '"الصورة ليست هي الحالة الطارئة — إخبار شخص بالغ موثوق به فورًا هو الأهم. لن يقع أحد في مشكلة، وهناك طرق لإزالة الصور."', videoLabel: 'تقرير إخباري عن عمليات الابتزاز الجنسي التي تستهدف الأطفال والمراهقين عبر الإنترنت' },
        { title: '"الإكسسوارات المجانية" التي ليست مجانية فعلًا', body: 'تقرير إخباري عن كيفية استهداف المحتالين للأطفال داخل الألعاب الإلكترونية وتطبيقات الدردشة، باستخدام مسابقات وهمية وعناصر "مجانية" وروابط تبادل مزيفة لسرقة الحسابات وبيانات الدفع.', quote: '"إذا بدت صفقة تبادل أو مسابقة داخل لعبة جيدة أكثر من اللازم، فهي على الأرجح كذلك — الجائزة الحقيقية لا تطلب كلمة مرورك أبدًا."', videoLabel: 'تقرير إخباري عن عمليات احتيال تستهدف الأطفال في الألعاب الإلكترونية' }
      ]
    },
    resources: {
      eyebrow: 'ابقَ على اطّلاع',
      h2: 'أين تتحقق من عمليات الاحتيال المعروفة وتنبيهات الاحتيال.',
      p: 'تتابع هذه الجهات الموثوقة عمليات الاحتيال النشطة، وتنشر التنبيهات، وتستقبل البلاغات — احفظ بعضها واطّلع عليها كلما شعرت أن شيئًا ما غير طبيعي.',
      groups: [
        { title: 'كندا', items: [
          { title: 'المركز الكندي لمكافحة الاحتيال', body: 'المركز الوطني الكندي للإبلاغ عن الاحتيال والغش — اطّلع على التنبيهات الحالية وقدّم بلاغًا.' },
          { title: 'المركز الكندي للأمن السيبراني', body: 'إرشادات حكومة كندا حول التصيّد الاحتيالي والبرمجيات الخبيثة والأمان على الإنترنت.' },
          { title: 'Get Cyber Safe', body: 'حملة توعية وطنية بنصائح بلغة بسيطة وتنبيهات حول التهديدات الحالية.' },
          { title: 'مكتب المنافسة الكندي', body: 'يتتبّع التسويق المضلّل واحتيالات المستهلكين، مع قائمة قابلة للبحث بعمليات الاحتيال المعروفة.' }
        ]},
        { title: 'عالميًا', items: [
          { title: 'FTC Consumer Advice (الولايات المتحدة)', body: 'تنبيهات ودلائل وأداة إبلاغ عن الاحتيال من لجنة التجارة الفيدرالية الأمريكية.' },
          { title: 'Action Fraud (المملكة المتحدة)', body: 'المركز الوطني البريطاني للإبلاغ عن الاحتيال والجرائم الإلكترونية.' },
          { title: 'مركز شكاوى جرائم الإنترنت التابع لمكتب التحقيقات الفيدرالي (IC3)', body: 'يتتبّع ويحقّق في الجرائم الإلكترونية المُبلَّغ عنها في الولايات المتحدة.' }
        ]},
        { title: 'الاحتيال الإلكتروني وعبر الإنترنت', items: [
          { title: 'Anti-Phishing Working Group', body: 'يتتبّع اتجاهات التصيّد الاحتيالي والمواقع المزيّفة عالميًا؛ مكان للإبلاغ عن المواقع المشبوهة.' },
          { title: 'التصفح الآمن من جوجل (Google Safe Browsing)', body: 'تحقّق مما إذا كان موقع ما قد صُنّف بالفعل كموقع غير آمن أو مضلّل.' },
          { title: 'الهيئات الكندية للأوراق المالية (CSA)', body: 'موارد لحماية المستثمرين تساعد على اكتشاف احتيالات الاستثمار والعملات المشفّرة.' }
        ]}
      ]
    },
    quiz: {
      eyebrow: 'اختبر حسك الوقائي من الاحتيال',
      h2: 'أتظن أنك قادر على اكتشاف عملية احتيال؟ جرّب ذلك.',
      p: 'خمسة سيناريوهات واقعية وسريعة. لا توجد نتيجة سيئة — كل سؤال يجعلك أكثر أمانًا قليلًا.',
      questionOf: 'السؤال {n} من {total}',
      answerGroupLabel: 'خيارات الإجابة',
      nextLabel: 'السؤال التالي',
      resultsLabel: 'عرض نتيجتي',
      resultTitle: 'حصلت على {score} من {total}!',
      resultBody: 'كل سؤال فكّرت فيه بعناية يجعل خداعك أصعب قليلًا. شارك هذا الاختبار مع من تهتم لأمره — خصوصًا من هو جديد على اكتشاف عمليات الاحتيال.',
      retryLabel: 'حاول مجددًا',
      questions: [
        { q: 'وصلتك رسالة نصية من رقم مجهول: "تعذّر تسليم طردك، اضغط هنا لإعادة الجدولة." ما هو التصرف الأكثر أمانًا؟',
          options: ['الضغط على الرابط فورًا حتى لا يفوتني الطرد', 'التحقق من التتبع مباشرة عبر الموقع أو التطبيق الرسمي للمتجر', 'الرد بكلمة "STOP" لإلغاء الاشتراك'],
          correct: 1,
          why: { correct: 'بالضبط — كتابة عنوان الموقع الرسمي للمتجر بنفسك تعني أن أي رابط مزيّف لن يخدعك أبدًا.', incorrect: 'الخيار الأكثر أمانًا: تجاهل الرابط تمامًا وتحقّق من التتبّع عبر الموقع أو التطبيق الرسمي للمتجر.' } },
        { q: 'اتصل بك "حفيدك" قائلًا إنه في ورطة ويحتاج إلى إرسال مال فورًا، وطلب منك كتمان الأمر. ما هو التصرف الأكثر أمانًا؟',
          options: ['إرسال المال فورًا، فالأمر بدا عاجلًا', 'إنهاء المكالمة والاتصال بحفيدك على رقم تملكه مسبقًا', 'طرح سؤال شخصي عليه عبر الهاتف للتحقق'],
          correct: 1,
          why: { correct: 'الاتصال برقم تعرفه وتثق به مسبقًا هو الطريقة الأكثر أمانًا للتأكد ممن تتحدث معه فعليًا.', incorrect: 'يمكن أن تكون الأصوات مقنعة بشكل مفاجئ عبر الهاتف. الأفضل إنهاء المكالمة والاتصال برقم تملكه مسبقًا لذلك الشخص.' } },
        { q: 'رسالة بريد إلكتروني تقول: "سيتم تعليق حسابك خلال 24 ساعة — تحقق من كلمة مرورك الآن"، مصحوبة بشريط أحمر عاجل كبير. ما هو التصرف الأكثر أمانًا؟',
          options: ['الضغط على الرابط فورًا للاحتياط', 'الذهاب إلى الموقع الرسمي بكتابة العنوان بنفسك'],
          correct: 1,
          why: { correct: 'الإلحاح تكتيك احتيالي كلاسيكي. كتابة العنوان بنفسك تضمن وصولك دائمًا إلى الموقع الحقيقي.', incorrect: 'اكتب عنوان الشركة الحقيقي بنفسك بدلًا من الضغط على رابط البريد الإلكتروني — فالنبرة العاجلة إشارة تحذير.' } },
        { q: 'نافذة منبثقة تقول: "تم اكتشاف فيروس! اتصل بهذا الرقم الآن للحصول على الدعم." ماذا يجب أن تفعل؟',
          options: ['الاتصال بالرقم، فهو يبدو رسميًا', 'إغلاق النافذة (أو إعادة تشغيل المتصفح) وتجاهلها'],
          correct: 1,
          why: { correct: 'صحيح — برامج الأمان الحقيقية لا تطلب منك أبدًا الاتصال برقم هاتف.', incorrect: 'التحذيرات الأمنية الحقيقية لا تطلب منك أبدًا الاتصال برقم هاتف. أغلق النافذة وتابع.' } },
        { q: 'شخص تعرّفت عليه للتو على الإنترنت يطلب منك عنوانك واسمك الكامل "لمجرد أن تصبحا صديقين." ما هو التصرف الأكثر أمانًا؟',
          options: ['مشاركتها، فهو يبدو لطيفًا', 'الحفاظ على خصوصية معلوماتك الشخصية وإخبار شخص بالغ أو صديق تثق به بالأمر'],
          correct: 1,
          why: { correct: 'أحسنت — الحفاظ على خصوصية معلوماتك الشخصية وإخبار شخص تثق به دائمًا هو الخيار الأكثر أمانًا.', incorrect: 'من الأفضل الحفاظ على خصوصية معلوماتك الشخصية، حتى مع من يبدون ودودين، وإخبار شخص تثق به بالأمر.' } }
      ]
    },
    report: {
      eyebrow: 'طلب المساعدة',
      h2: 'أتظن أنك اكتشفت عملية احتيال — أو كنت هدفًا لواحدة؟',
      p: 'لست وحدك، ولم يفت الأوان بعد للتصرف. إليك الجهات التي يمكنك اللجوء إليها.',
      resourcesTitle: 'جهات موثوقة للإبلاغ',
      resources: [
        { title: 'المركز الكندي لمكافحة الاحتيال', body: '1-888-495-8501 — أبلغ عن حالات الاحتيال واحصل على استشارة، مجانًا وبسرّية تامة.' },
        { title: 'بنكك أو مزوّد بطاقتك', body: 'اتصل بالرقم المطبوع على بطاقتك أو كشف حسابك — وليس أبدًا رقمًا أعطاك إياه المتصل.' },
        { title: 'أحد أفراد العائلة أو صديق تثق به', body: 'التحدث في الأمر مع شخص تثق به هو دائمًا خطوة أولى ذكية.' }
      ],
      formTitle: 'اطرح علينا سؤالًا',
      formNote: 'تُرسَل رسالتك إلينا مباشرة — لا حاجة إلى أي تطبيق بريد إلكتروني.',
      nameLabel: 'اسمك', emailLabel: 'البريد الإلكتروني', messageLabel: 'ماذا حدث؟',
      submitLabel: 'إرسال رسالتي',
      successMsg: 'جارٍ إرسال رسالتك…',
      errorMsg: 'حدث خطأ ما. يرجى المحاولة مرة أخرى، أو راسلنا مباشرة على contact@commonsensecyber.org.'
    },
    faq: {
      eyebrow: 'أسئلة', h2: 'الأسئلة الشائعة',
      items: [
        { q: 'هل Common Sense Cyber جهة حكومية؟', a: 'لا. نحن مصدر توعوي مستقل، وغير تابعين لأي جهة حكومية أو بنك أو جهاز شرطة. نقدّم إرشادات تعليمية عامة — تحقق دائمًا من أي أمر عاجل عبر القنوات الرسمية.' },
        { q: 'أعتقد أنني وقعت ضحية لعملية احتيال بالفعل. ما الذي يجب أن أفعله أولًا؟', a: 'تواصل فورًا مع بنكك أو مزوّد بطاقتك باستخدام الرقم المطبوع على بطاقتك، ثم تواصل مع المركز الكندي لمكافحة الاحتيال. التصرف السريع يمكن أن يُحدث فرقًا حقيقيًا — ولا عيب أبدًا في طلب المساعدة.' },
        { q: 'هل يجب أن أكون "بارعًا في التقنية" لاستخدام هذا الموقع؟', a: 'إطلاقًا — هذا بالضبط هو الهدف. كل دليل هنا مكتوب بلغة بسيطة، ودون افتراض أي خلفية تقنية مسبقة.' },
        { q: 'هل يمكنني مشاركة هذا الموقع مع عائلتي؟', a: 'بالتأكيد، افعل ذلك! Common Sense Cyber مجاني للاستخدام والمشاركة — خصوصًا مع المستكشفين الصغار ومستخدمي الإنترنت الحكماء في حياتك.' }
      ]
    },
    community: {
      eyebrow: 'قصص من المجتمع',
      h2: 'هل حدث لك شيء مشابه لهذا من قبل؟',
      p: 'التجارب الحقيقية تساعد الزوار الآخرين على التعرف على نفس علامات التحذير. تتم مراجعة كل قصة قبل نشرها، ويمكنك البقاء مجهول الهوية إذا رغبت.',
      emptyTitle: 'لا توجد قصص بعد',
      emptyBody: 'كن أول من يشارك قصته — قد تساعد تجربتك شخصًا آخر على اكتشاف نفس الاحتيال.',
      anonymousName: 'مجهول',
      formTitle: 'شارك قصتك',
      formNote: 'تُرسَل قصتك إلينا مباشرة. لا يُنشر شيء تلقائيًا — يقوم شخص حقيقي بمراجعة كل قصة قبل نشرها على الموقع.',
      nameLabel: 'اسمك (اختياري)', anonymousLabel: 'نشر هذا بشكل مجهول', storyLabel: 'ماذا حدث؟',
      emailLabel: 'بريدك الإلكتروني (خاص — يُستخدم فقط إذا كان لدينا سؤال متابعة، ولن يُنشر أبدًا)',
      consentLabel: 'أوافق على مراجعة هذه القصة واحتمال مشاركتها على هذا الموقع.',
      submitLabel: 'إرسال قصتي',
      successMsg: 'جارٍ إرسال قصتك…',
      errorMsg: 'حدث خطأ ما. يرجى المحاولة مرة أخرى، أو راسلنا مباشرة على contact@commonsensecyber.org.'
    },
    legal: {
      h2: 'الخصوصية والشروط',
      p: 'كيف نتعامل مع المعلومات على هذا الموقع، بلغة بسيطة.',
      items: [
        { q: 'ما المعلومات التي تجمعونها؟', a: 'ترسل نماذج "طلب المساعدة" و"شارك قصتك" رسالتك إلينا مباشرة عبر خدمة بريد إلكتروني معاملاتية (Resend) — نحن لا نشغّل أي قاعدة بيانات، لذا لا يُحفظ شيء سوى تلك الرسالة. تُنشر القصص المجتمعية فقط بعد مراجعتها من قِبل شخص حقيقي، ويمكنك طلب تعديل قصتك أو إخفاء هويتها أو حذفها في أي وقت. راجع سياسة خصوصية Resend لمعرفة كيفية تعاملهم مع إيصال الرسائل.' },
        { q: 'ماذا تخزّنون على جهازي؟', a: 'فقط تفضيلان صغيران، محفوظان في التخزين المحلي لمتصفحك: لغتك المختارة وحجم النص. يبقى كلاهما على جهازك ولا يُرسلان إلينا أبدًا.' },
        { q: 'هل تستخدمون ملفات تعريف الارتباط أو التتبع أو التحليلات؟', a: 'لا نستخدم أي ملفات تعريف ارتباط إعلانية أو نصوص تتبع أو أدوات تحليل من أي نوع. الاستثناء الوحيد هو Google Fonts، المستخدم لعرض النص بعدة لغات — قد يؤدي تحميله إلى مشاركة عنوان IP الخاص بك مع Google. راجع سياسة خصوصية Google لمزيد من التفاصيل.' },
        { q: 'ماذا عن خصوصية الأطفال؟', a: 'مصمَّم Common Sense Cyber للقراء من جميع الأعمار، بمن فيهم الأطفال، لكننا لا نجمع عن قصد أي معلومات شخصية من أي شخص. كل نموذج اختياري، ونشجّع على أن يراجع أحد الوالدين أو الوصي أي رسالة قبل إرسالها.' },
        { q: 'هل هذه نصيحة حكومية أو قانونية رسمية؟', a: 'لا. Common Sense Cyber هو مورد تعليمي مستقل وغير تابع لأي جهة حكومية أو بنك أو جهة إنفاذ قانون. لا شيء في هذا الموقع يُعد نصيحة قانونية أو مالية أو أمنية احترافية — تحقق دائمًا من أي أمر عاجل عبر القنوات الرسمية. الروابط إلى مواقع خارجية (مثل Have I Been Pwned أو الموارد الحكومية) تقودك إلى منظمات مستقلة لا نتحكم بها.' },
        { q: 'أسئلة حول هذه الصفحة؟', a: 'تواصل معنا في أي وقت عبر contact@commonsensecyber.org.' }
      ]
    },
    footer: {
      tagline: 'الأمان الرقمي، مشروحًا ببساطة.',
      disclaimer: 'Common Sense Cyber مصدر تعليمي مستقل وغير تابع لأي جهة حكومية أو بنك أو جهة إنفاذ قانون. في حالات الطوارئ، أو إذا تم إرسال المال بالفعل، تواصل فورًا مع بنكك ومع المركز الكندي لمكافحة الاحتيال.',
      copyright: '© {year} Common Sense Cyber. صُنع بعناية.'
    }
  },
  hi: {
    meta: { name: 'हिन्दी', dir: 'ltr', minLabel: 'मिनट' },
    pageTitle: 'Common Sense Cyber — साइबर सुरक्षा, आसान भाषा में',
    metaDescription: 'Common Sense Cyber रोज़मर्रा की ऑनलाइन सुरक्षा सरल भाषा में सिखाता है — बच्चों, बुज़ुर्गों और हर किसी के लिए। कोई मुश्किल शब्द नहीं, कोई जजमेंट नहीं।',
    skipLink: 'मुख्य सामग्री पर जाएं',
    logoAlt: 'Common Sense Cyber लोगो — एक मुस्कुराता हुआ शील्ड शुभंकर',
    heroArtAlt: 'Common Sense Cyber शुभंकर का चित्रण, एक मुस्कुराता हुआ शील्ड',
    footerLogoAlt: 'Common Sense Cyber लोगो',
    nav: { basics: 'बुनियादी बातें सीखें', tracks: 'बच्चों और बुज़ुर्गों के लिए', story: 'असली कहानियाँ', quiz: 'क्विज़', resources: 'संसाधन', report: 'मदद पाएं', faq: 'अक्सर पूछे जाने वाले सवाल', community: 'अपनी कहानी साझा करें' },
    header: { textSize: 'आसानी से पढ़ने के लिए टेक्स्ट बड़ा करें', menuOpen: 'मेनू खोलें', menuClose: 'मेनू बंद करें', lang: 'भाषा चुनें' },
    brand: { tagline: 'ऑनलाइन सुरक्षा, आसान भाषा में' },
    hero: {
      eyebrow: 'मुफ़्त और दोस्ताना ऑनलाइन सुरक्षा',
      h1: 'साइबर सुरक्षा, जो आपकी भाषा में बात करे।',
      p: 'कोई मुश्किल शब्द नहीं। कोई जजमेंट नहीं। बस सरल और आत्मीय सलाह, ताकि आप धोखाधड़ी पहचान सकें, अपने अकाउंट सुरक्षित रख सकें, और ऑनलाइन सुरक्षित रह सकें — चाहे आपकी उम्र 9 हो या 90।',
      ctaPrimary: 'बुनियादी बातें सीखना शुरू करें',
      ctaSecondary: 'एक असली कहानी देखें',
      stat1: '6', stat1Label: 'सरल भाषा में बताए गए विषय',
      stat2: '2', stat2Label: 'बच्चों और बुज़ुर्गों के लिए रास्ते',
      stat3: '5', stat3Label: 'धोखाधड़ी पहचान क्विज़'
    },
    mission: {
      eyebrow: 'हम यह क्यों कर रहे हैं',
      h2: 'हर किसी को बिना किसी तकनीकी डिग्री के, ऑनलाइन सुरक्षित महसूस करने का हक़ है।',
      p: 'ज़्यादातर साइबर सुरक्षा की सलाह उन लोगों के लिए लिखी जाती है जो पहले से साइबर सुरक्षा समझते हैं। Common Sense Cyber इसे उल्टा करता है। हम असली सुरक्षा ज्ञान को सरल, आत्मीय और बिना किसी जजमेंट वाली सलाह में बदलते हैं, उन लोगों के लिए जिन्हें इसकी सबसे ज़्यादा ज़रूरत है: वे बच्चे जो अभी-अभी इंटरनेट इस्तेमाल करना शुरू कर रहे हैं, वे बुज़ुर्ग जो नई तकनीक सीख रहे हैं, और हर वह व्यक्ति जो मुश्किल शब्दों को समझे बिना सुरक्षित रहना चाहता है।',
      pillars: [
        { title: 'सरल भाषा', body: 'कोई मुश्किल शब्द नहीं, कोई डराने वाली बातें नहीं — बस साफ़ समझाई गई बातें, जिन्हें कोई भी पहली बार में समझ सके।' },
        { title: 'कोई जजमेंट नहीं', body: 'धोखा खा जाने का मतलब यह नहीं कि आपने कुछ गलत किया। हमारा ध्यान आपका आत्मविश्वास बढ़ाने पर है, शर्मिंदा करने पर नहीं।' },
        { title: 'हर उम्र के लिए', body: 'बच्चे की पहली टैबलेट से लेकर दादा-दादी के पहले स्मार्टफ़ोन तक — असली ज़िंदगी को ध्यान में रखकर बनाई गई सलाह, न कि सिर्फ़ तकनीकी जानकार लोगों के लिए।' }
      ]
    },
    basics: {
      eyebrow: 'बुनियादी बातें सीखें',
      h2: 'जानने लायक छह बातें — बिना किसी मुश्किल शब्द के।',
      p: 'आज ही इस्तेमाल कर सकने वाले कुछ व्यावहारिक सुझाव देखने के लिए किसी भी विषय पर टैप करें।',
      seeTips: 'सुझाव देखें',
      tips: [
        { title: 'धोखाधड़ी वाले संदेश पहचानना', summary: 'ऐसे मैसेज और ईमेल जो आपको घबराकर जल्दी क्लिक करने पर मजबूर करते हैं।', points: [
          'असली कंपनियाँ शायद ही कभी आपको जल्दी करने को कहती हैं — जल्दबाज़ी सबसे बड़ा खतरे का संकेत है।',
          'भेजने वाले का पता ध्यान से जांचें, सिर्फ़ दिखने वाला नाम नहीं।',
          'अगर शक हो, तो कंपनी से उस नंबर पर संपर्क करें जिस पर आपको पहले से भरोसा है — मैसेज में दिए नंबर पर नहीं।'
        ]},
        { title: 'पासवर्ड सुरक्षा', summary: 'कुछ छोटी आदतें ज़्यादातर अकाउंट हैक होने से रोक देती हैं।', points: [
          'छोटे और जटिल पासवर्ड की जगह 3–4 बेतरतीब शब्दों वाला पासफ़्रेज़ इस्तेमाल करें।',
          'अलग-अलग साइट पर कभी एक ही पासवर्ड दोबारा इस्तेमाल न करें।',
          'जहाँ भी मिले, टू-स्टेप वेरिफिकेशन चालू करें — यह सबसे अच्छा सुधार है जो आप कर सकते हैं।',
          'एक अच्छा पासवर्ड कभी भी कोई आम शब्द, आपका नाम, जन्मतिथि, या पालतू जानवर का नाम नहीं होना चाहिए — इन्हें सबसे पहले अंदाज़ा लगाया जाता है।',
          '"123456" या "password" जैसे आसानी से समझे जाने वाले पैटर्न, या "qwerty" जैसे कीबोर्ड क्रम से बचें।',
          'कोई भी असली कंपनी कभी फ़ोन, टेक्स्ट या ईमेल पर आपसे पासवर्ड ज़ोर से बोलने के लिए नहीं कहेगी।'
        ]},
        { title: 'सुरक्षित ब्राउज़िंग', summary: 'छोटे-छोटे संकेत बताते हैं कि कोई वेबसाइट (या चेतावनी) भरोसेमंद है या नहीं।', points: [
          'कोई भी जानकारी डालने से पहले लॉक आइकन और "https" देखें।',
          '"आपका डिवाइस संक्रमित है" जैसे पॉप-अप को नज़रअंदाज़ करें — असली सुरक्षा सॉफ़्टवेयर कभी ऐसे काम नहीं करता।',
          'अपने ब्राउज़र और ऐप हमेशा अपडेट रखें; अपडेट अक्सर सुरक्षा की खामियाँ ठीक करते हैं।'
        ]},
        { title: 'सोशल मीडिया और निजता', summary: 'आप जो शेयर करते हैं, वह हैरान करने वाले तरीकों से आपके खिलाफ़ इस्तेमाल हो सकता है।', points: [
          'अपनी जन्मतिथि, पता, या यात्रा योजना पोस्ट करने से पहले दो बार सोचें।',
          'हर कुछ महीनों में अपनी प्राइवेसी सेटिंग्स जांचें — डिफ़ॉल्ट सेटिंग्स बदलती रहती हैं।',
          'उन लोगों की फ्रेंड रिक्वेस्ट स्वीकार करने में सावधानी बरतें जिन्हें आप असल में नहीं जानते।'
        ]},
        { title: 'अपने पैसों की सुरक्षा', summary: 'नुकसान होने से पहले वित्तीय धोखाधड़ी को कैसे पहचानें।', points: [
          'कोई भी असली बैंक या सरकारी विभाग कभी गिफ़्ट कार्ड या क्रिप्टो में भुगतान नहीं मांगेगा।',
          'अचानक पैसों की मांग आई, चाहे "परिवार के किसी सदस्य" से भी? उन्हें उस नंबर पर वापस कॉल करें जो आपके पास पहले से है।',
          'जल्दबाज़ी न करें। असली मांग हमेशा तब तक इंतज़ार कर सकती है जब तक आप जांच न कर लें।'
        ]},
        { title: 'वाई-फ़ाई और डिवाइस', summary: 'रोज़मर्रा की आदतें जो आपके डिवाइस को सुरक्षित रखती हैं।', points: [
          'पब्लिक वाई-फ़ाई पर पासवर्ड या बैंकिंग जानकारी डालने से बचें।',
          'अपने फ़ोन और कंप्यूटर का सॉफ़्टवेयर अपडेट रखें।',
          'अपने डिवाइस को हमेशा पिन, पासकोड या फिंगरप्रिंट से लॉक रखें।'
        ]}
      ]
    },
    tracks: {
      eyebrow: 'आपके लिए बनाया गया',
      h2: 'आप जहाँ से शुरू कर रहे हैं, उसी के हिसाब से सलाह।',
      kids: { badge: 'युवा खोजकर्ताओं के लिए', title: 'युवा खोजकर्ताओं के लिए', body: 'इंटरनेट पर सहज होने वाले बच्चों और किशोरों के लिए सरल नियम।', points: [
        'आपका पासवर्ड सिर्फ़ आपका है — इसे दोस्तों के साथ भी साझा न करें।',
        'अपना असली नाम, स्कूल और पता ऑनलाइन निजी रखें।',
        'अगर ऑनलाइन कुछ अजीब या डरावना लगे, तो किसी भरोसेमंद बड़े से बताएं। आप मुसीबत में नहीं पड़ेंगे।',
        'दयालु बनें — व्यक्तिगत रूप से अच्छे व्यवहार के जो नियम हैं, वही ऑनलाइन भी लागू होते हैं।'
      ], cta: 'और सुझाव देखें' },
      seniors: { badge: 'समझदार वेब उपयोगकर्ताओं के लिए', title: 'समझदार वेब उपयोगकर्ताओं के लिए', body: 'भरोसेमंद और व्यावहारिक सलाह — क्योंकि धोखेबाज़ हर दिन समझदार लोगों को निशाना बनाते हैं।', points: [
        'फ़ोन काटना, धीरे चलना, या कुछ करने से पहले सवाल पूछना — यह कभी असभ्य नहीं होता।',
        'क्या कोई "परिवार का सदस्य" जल्दी में पैसे मांग रहा है? उन्हें उस नंबर पर वापस कॉल करें जो आपके पास पहले से है।',
        'कोई भी असली बैंक, विभाग या कंपनी आपसे गिफ़्ट कार्ड से भुगतान करने को नहीं कहेगी।',
        'कोई मुश्किल मैसेज आना इस बात का मतलब नहीं कि आप पिछड़ रहे हैं — इसका मतलब है कि कोई आपको धोखा देने की कोशिश कर रहा है।'
      ], cta: 'और सुझाव देखें' }
    },
    anatomy: {
      eyebrow: 'घबराहट के पीछे का पैटर्न',
      h2: 'धोखाधड़ी कॉल की कार्यप्रणाली',
      p: 'लगभग हर फ़ोन या मैसेज धोखाधड़ी एक ही चार कदमों को अपनाती है। एक बार जब आप यह पैटर्न पहचान लेते हैं, तो धोखाधड़ी पकड़ना बहुत आसान हो जाता है।',
      steps: [
        { title: 'चारा', body: 'एक कॉल या मैसेज एक नकली इमरजेंसी बनाता है — अक्सर किसी अपने की तरह बनकर।' },
        { title: 'जल्दबाज़ी', body: '"आपको अभी कार्रवाई करनी होगी" — धोखेबाज़ आपको सोचने या जांचने का समय नहीं देते।' },
        { title: 'गोपनीयता की मांग', body: '"कृपया किसी को मत बताना" — यह उन लोगों को दूर कर देता है जो धोखाधड़ी पकड़ सकते हैं।' },
        { title: 'मांग', body: 'पैसे, गिफ़्ट कार्ड, या अकाउंट की जानकारी मांगना — कॉल का असली मकसद।' }
      ],
      calloutStrong: 'आप किसी भी कदम पर इस पैटर्न को तोड़ सकते हैं।',
      calloutBody: 'फ़ोन काट दें, उस व्यक्ति को उस नंबर पर वापस कॉल करें जो आपके पास पहले से है, और अपना समय लें — असली इमरजेंसी पाँच मिनट का इंतज़ार झेल सकती है।'
    },
    story: {
      eyebrow: 'असली कहानियाँ',
      h2: 'असली धोखाधड़ी वाली कॉल असल में कैसी लगती हैं।',
      p: 'धोखाधड़ी वाली कॉल इसलिए कामयाब होती हैं क्योंकि वे घबराहट और जल्दबाज़ी पैदा करती हैं — कोई "रिश्तेदार" मुसीबत में है, उसे तुरंत मदद चाहिए, और आपसे इसे गुप्त रखने को कहा जाता है। ये छोटे वीडियो दिखाते हैं कि यह धोखाधड़ी कैसे होती है और आपको किन बातों पर ध्यान देना चाहिए।',
      videoFallback: 'आपका ब्राउज़र एम्बेडेड वीडियो सपोर्ट नहीं करता।',
      videoDownload: 'वीडियो डाउनलोड करें',
      items: [
        { title: '"पोता/पोती मुसीबत में है" वाली कॉल', body: 'एक क्लासिक दादा-दादी धोखाधड़ी कॉल का नाट्य रूपांतरण, जो दिखाता है कि एक ठग शुरुआती कुछ सेकंड में ही घबराहट और जल्दबाज़ी कैसे पैदा करता है।', quote: '"अगर कोई कॉल आपसे तुरंत कार्रवाई करने और चुप रहने को कहे, तो यह गोपनीयता खुद सबसे बड़ा खतरे का संकेत है।"', videoLabel: 'दादा-दादी धोखाधड़ी वाली फ़ोन कॉल दिखाता वीडियो' },
        { title: 'दादा-दादी धोखाधड़ी असल में बुज़ुर्गों को कैसे निशाना बनाती है', body: 'एक न्यूज़ रिपोर्ट जो बताती है कि ये धोखाधड़ियाँ बड़े पैमाने पर कैसे काम करती हैं, और समझदार, सतर्क लोगों पर भी ये इतनी अच्छी तरह क्यों असर करती हैं।', quote: '"ये कॉल इस तरह बनाई जाती हैं कि आपको लगे कि जांचने का समय नहीं है — यह एहसास खुद ही खतरे का संकेत है।"', videoLabel: 'बुज़ुर्ग नागरिकों को निशाना बनाने वाली दादा-दादी धोखाधड़ी पर न्यूज़ रिपोर्ट' },
        { title: 'जब ऑनलाइन "दोस्त" ब्लैकमेलर बन जाए', body: 'सेक्सटॉर्शन (यौन तस्वीरों के ज़रिए ब्लैकमेल) धोखाधड़ी पर एक न्यूज़ रिपोर्ट, जिसमें एक अजनबी ऑनलाइन दोस्त बनकर निजी तस्वीरें हासिल करता है, फिर पैसे या और तस्वीरें न मिलने पर उन्हें सार्वजनिक करने की धमकी देता है। यह जितना माता-पिता सोचते हैं, उससे कहीं ज़्यादा बच्चों और किशोरों को निशाना बनाता है।', quote: '"तस्वीर आपातकाल नहीं है — किसी भरोसेमंद बड़े को तुरंत बताना ही असली ज़रूरी कदम है। कोई मुसीबत में नहीं पड़ेगा, और तस्वीरें हटवाने के तरीके मौजूद हैं।"', videoLabel: 'बच्चों और किशोरों को निशाना बनाने वाले सेक्सटॉर्शन धोखाधड़ी पर न्यूज़ रिपोर्ट' },
        { title: '"मुफ़्त स्किन्स" जो असल में मुफ़्त नहीं होतीं', body: 'एक न्यूज़ रिपोर्ट जो बताती है कि कैसे ठग ऑनलाइन गेम्स और चैट ऐप्स के अंदर बच्चों को निशाना बनाते हैं — नकली गिवअवे, "मुफ़्त" आइटम, और जाल में फंसाने वाले ट्रेड लिंक के ज़रिए अकाउंट और पेमेंट जानकारी चुराने के लिए।', quote: '"अगर किसी गेम के अंदर कोई ट्रेड या गिवअवे बहुत ही अच्छा लगे, तो अक्सर वह सच नहीं होता — असली इनाम कभी पहले आपका पासवर्ड नहीं मांगता।"', videoLabel: 'ऑनलाइन गेमिंग में बच्चों को निशाना बनाने वाली धोखाधड़ी पर न्यूज़ रिपोर्ट' }
      ]
    },
    resources: {
      eyebrow: 'जानकारी रखें',
      h2: 'जानी-मानी धोखाधड़ी और फ़्रॉड अलर्ट कहाँ जांचें।',
      p: 'ये भरोसेमंद संस्थाएं सक्रिय धोखाधड़ी पर नज़र रखती हैं, अलर्ट जारी करती हैं, और शिकायतें लेती हैं — कुछ को बुकमार्क करें और जब भी कुछ गड़बड़ लगे, उन्हें जांच लें।',
      groups: [
        { title: 'कनाडा', items: [
          { title: 'कनाडाई एंटी-फ़्रॉड सेंटर', body: 'कनाडा का राष्ट्रीय धोखाधड़ी और फ़्रॉड रिपोर्टिंग सेंटर — मौजूदा धोखाधड़ी अलर्ट देखें और शिकायत दर्ज करें।' },
          { title: 'कनाडाई साइबर सुरक्षा केंद्र', body: 'फ़िशिंग, मैलवेयर और ऑनलाइन सुरक्षा पर कनाडा सरकार का मार्गदर्शन।' },
          { title: 'Get Cyber Safe', body: 'सरल भाषा में सुझावों और मौजूदा खतरों के अलर्ट के साथ एक राष्ट्रीय जन-जागरूकता अभियान।' },
          { title: 'कनाडा प्रतिस्पर्धा ब्यूरो', body: 'भ्रामक मार्केटिंग और उपभोक्ता धोखाधड़ी पर नज़र रखता है, साथ ही जानी-मानी धोखाधड़ी की खोज योग्य सूची भी देता है।' }
        ]},
        { title: 'वैश्विक', items: [
          { title: 'FTC कंज़्यूमर एडवाइस (अमेरिका)', body: 'अमेरिका के फ़ेडरल ट्रेड कमीशन की उपभोक्ता धोखाधड़ी अलर्ट, गाइड और रिपोर्टिंग टूल।' },
          { title: 'Action Fraud (यूनाइटेड किंगडम)', body: 'फ़्रॉड और साइबर क्राइम की रिपोर्ट के लिए यूके का राष्ट्रीय केंद्र।' },
          { title: 'FBI इंटरनेट क्राइम कंप्लेंट सेंटर (IC3)', body: 'अमेरिका में रिपोर्ट किए गए इंटरनेट-आधारित अपराधों पर नज़र रखता है और जांच करता है।' }
        ]},
        { title: 'साइबर और ऑनलाइन धोखाधड़ी', items: [
          { title: 'Anti-Phishing Working Group', body: 'दुनियाभर में फ़िशिंग और नकली वेबसाइट के रुझानों पर नज़र रखता है; संदिग्ध साइट की रिपोर्ट करने की जगह।' },
          { title: 'Google Safe Browsing', body: 'जांचें कि क्या किसी वेबसाइट को पहले से ही असुरक्षित या भ्रामक चिह्नित किया गया है।' },
          { title: 'कैनेडियन सिक्योरिटीज़ एडमिनिस्ट्रेटर्स (CSA)', body: 'निवेश और क्रिप्टोकरेंसी धोखाधड़ी पहचानने के लिए निवेशक सुरक्षा संसाधन।' }
        ]}
      ]
    },
    quiz: {
      eyebrow: 'अपनी धोखाधड़ी पहचानने की समझ जांचें',
      h2: 'लगता है आप धोखाधड़ी पहचान सकते हैं? आज़माकर देखिए।',
      p: 'पाँच त्वरित, असल दुनिया जैसे उदाहरण। कोई भी स्कोर खराब स्कोर नहीं है — हर सवाल आपको थोड़ा और सुरक्षित बनाता है।',
      questionOf: 'सवाल {n}, कुल {total} में से',
      answerGroupLabel: 'जवाब के विकल्प',
      nextLabel: 'अगला सवाल',
      resultsLabel: 'मेरे नतीजे देखें',
      resultTitle: 'आपको {total} में से {score} सही मिले!',
      resultBody: 'जिस भी सवाल पर आपने सोच-समझकर जवाब दिया, वह आपको धोखा देना थोड़ा और मुश्किल बनाता है। इस क्विज़ को उस व्यक्ति के साथ साझा करें जिसकी आपको परवाह है — खासकर जो धोखाधड़ी पहचानना अभी सीख रहा हो।',
      retryLabel: 'फिर से कोशिश करें',
      questions: [
        { q: 'आपको एक अनजान नंबर से मैसेज आता है: "आपका पार्सल डिलीवर नहीं हो पाया, दोबारा शेड्यूल करने के लिए यहाँ क्लिक करें।" सबसे सुरक्षित तरीका क्या है?',
          options: ['तुरंत लिंक पर क्लिक करना ताकि पार्सल मिस न हो', 'सीधे रिटेलर की असली वेबसाइट या ऐप पर ट्रैकिंग चेक करना', '"STOP" लिखकर जवाब देना'],
          correct: 1,
          why: { correct: 'बिल्कुल सही — रिटेलर की असली वेबसाइट खुद टाइप करने का मतलब है कि कोई भी नकली लिंक आपको कभी धोखा नहीं दे सकता।', incorrect: 'ज़्यादा सुरक्षित तरीका: लिंक को पूरी तरह नज़रअंदाज़ करें और रिटेलर की असली वेबसाइट या ऐप पर ट्रैकिंग चेक करें।' } },
        { q: 'आपका "पोता/पोती" कॉल करके कहता है कि वह मुसीबत में है और उसे तुरंत पैसे चाहिए — और आपसे इसे गुप्त रखने को कहता है। सबसे सुरक्षित तरीका क्या है?',
          options: ['तुरंत पैसे भेज देना, क्योंकि यह ज़रूरी लगा', 'फ़ोन काटकर, अपने पोते/पोती को उस नंबर पर वापस कॉल करना जो आपके पास पहले से है', 'फ़ोन पर उससे कोई निजी सवाल पूछकर जांचना'],
          correct: 1,
          why: { correct: 'जिस नंबर पर आपको पहले से भरोसा है, उस पर वापस कॉल करना यह पुष्टि करने का सबसे सुरक्षित तरीका है कि आप असल में किससे बात कर रहे हैं।', incorrect: 'फ़ोन पर आवाज़ें हैरानी की हद तक असली लग सकती हैं। बेहतर है कि फ़ोन काट दें और उस व्यक्ति के लिए पहले से मौजूद नंबर पर वापस कॉल करें।' } },
        { q: 'एक ईमेल कहता है: "आपका अकाउंट 24 घंटे में बंद कर दिया जाएगा — अभी अपना पासवर्ड वेरिफ़ाई करें," साथ में एक बड़ा लाल अर्जेंट बैनर। सबसे सुरक्षित तरीका क्या है?',
          options: ['सुरक्षित रहने के लिए तुरंत लिंक पर क्लिक करना', 'खुद वेबसाइट का पता टाइप करके असली वेबसाइट पर जाना'],
          correct: 1,
          why: { correct: 'जल्दबाज़ी एक क्लासिक धोखाधड़ी तरीका है। खुद पता टाइप करने से आप हमेशा असली वेबसाइट पर ही पहुँचते हैं।', incorrect: 'ईमेल के लिंक पर क्लिक करने के बजाय कंपनी का असली पता खुद टाइप करें — जल्दबाज़ी वाला लहजा खतरे का संकेत है।' } },
        { q: 'एक पॉप-अप कहता है: "वायरस मिला! मदद के लिए अभी इस नंबर पर कॉल करें।" आपको क्या करना चाहिए?',
          options: ['नंबर पर कॉल करना, यह असली लगता है', 'पॉप-अप बंद करना (या ब्राउज़र रीस्टार्ट करना) और उसे नज़रअंदाज़ करना'],
          correct: 1,
          why: { correct: 'सही — असली सुरक्षा सॉफ़्टवेयर कभी आपसे फ़ोन नंबर पर कॉल करने को नहीं कहता।', incorrect: 'असली सुरक्षा चेतावनी कभी आपसे फ़ोन नंबर पर कॉल करने को नहीं कहती। पॉप-अप बंद करें और आगे बढ़ें।' } },
        { q: 'कोई व्यक्ति जिससे आप अभी-अभी ऑनलाइन मिले हैं, "बस दोस्ती के लिए" आपका घर का पता और पूरा नाम मांगता है। सबसे सुरक्षित तरीका क्या है?',
          options: ['बता देना, वह अच्छा लग रहा है', 'अपनी निजी जानकारी गुप्त रखना और किसी भरोसेमंद बड़े या दोस्त को इस बारे में बताना'],
          correct: 1,
          why: { correct: 'बहुत बढ़िया — अपनी निजी जानकारी गुप्त रखना और किसी भरोसेमंद व्यक्ति को बताना हमेशा ज़्यादा सुरक्षित विकल्प है।', incorrect: 'बेहतर है कि अपनी निजी जानकारी गुप्त रखें, भले ही सामने वाला व्यक्ति दोस्ताना लगे, और किसी भरोसेमंद व्यक्ति को बताएं।' } }
      ]
    },
    report: {
      eyebrow: 'मदद पाएं',
      h2: 'लगता है आपने कोई धोखाधड़ी पकड़ी है — या आप इसका शिकार बने हैं?',
      p: 'आप अकेले नहीं हैं, और कार्रवाई करने में अभी देर नहीं हुई। यहाँ बताया गया है कि कहाँ जाएं।',
      resourcesTitle: 'शिकायत के लिए भरोसेमंद जगहें',
      resources: [
        { title: 'कनाडाई एंटी-फ़्रॉड सेंटर', body: '1-888-495-8501 — धोखाधड़ी की शिकायत करें और सलाह पाएं, बिल्कुल मुफ़्त और गोपनीय।' },
        { title: 'आपका बैंक या कार्ड प्रदाता', body: 'अपने कार्ड या स्टेटमेंट पर छपे नंबर पर कॉल करें — कभी भी कॉलर द्वारा दिए गए नंबर पर नहीं।' },
        { title: 'कोई भरोसेमंद परिवार का सदस्य या दोस्त', body: 'किसी ऐसे व्यक्ति से बात करना जिस पर आप भरोसा करते हैं, हमेशा एक समझदारी भरा पहला कदम होता है।' }
      ],
      formTitle: 'हमसे सवाल पूछें',
      formNote: 'आपका मैसेज सीधे हमें भेजा जाता है — किसी ईमेल ऐप की ज़रूरत नहीं।',
      nameLabel: 'आपका नाम', emailLabel: 'ईमेल पता', messageLabel: 'क्या हुआ था?',
      submitLabel: 'मेरा मैसेज भेजें',
      successMsg: 'आपका मैसेज भेजा जा रहा है…',
      errorMsg: 'कुछ गड़बड़ हो गई। कृपया फिर से कोशिश करें, या हमें सीधे contact@commonsensecyber.org पर ईमेल करें।'
    },
    faq: {
      eyebrow: 'सवाल', h2: 'अक्सर पूछे जाने वाले सवाल',
      items: [
        { q: 'क्या Common Sense Cyber एक सरकारी एजेंसी है?', a: 'नहीं। हम एक स्वतंत्र जागरूकता संसाधन हैं, किसी भी सरकारी एजेंसी, बैंक या पुलिस सेवा से जुड़े नहीं हैं। हम सामान्य शैक्षिक सलाह साझा करते हैं — किसी भी अर्जेंट बात की पुष्टि हमेशा आधिकारिक माध्यमों से करें।' },
        { q: 'मुझे लगता है कि मैं पहले ही किसी धोखाधड़ी का शिकार हो चुका हूँ। मुझे सबसे पहले क्या करना चाहिए?', a: 'तुरंत अपने कार्ड पर लिखे नंबर का उपयोग करके अपने बैंक या कार्ड प्रदाता से संपर्क करें, फिर कनाडाई एंटी-फ़्रॉड सेंटर से संपर्क करें। जल्दी कार्रवाई करने से असल फ़र्क़ पड़ सकता है — और मदद मांगने में कोई शर्म नहीं है।' },
        { q: 'क्या इस साइट का उपयोग करने के लिए मुझे "टेक-सैवी" होना ज़रूरी है?', a: 'बिल्कुल नहीं — यही तो पूरी बात है। यहाँ हर गाइड सरल भाषा में लिखी गई है, बिना किसी तकनीकी ज्ञान की उम्मीद किए।' },
        { q: 'क्या मैं यह साइट अपने परिवार के साथ साझा कर सकता हूँ?', a: 'ज़रूर कीजिए! Common Sense Cyber इस्तेमाल करने और साझा करने के लिए मुफ़्त है — खासकर आपकी ज़िंदगी में मौजूद युवा खोजकर्ताओं और समझदार वेब उपयोगकर्ताओं के साथ।' }
      ]
    },
    community: {
      eyebrow: 'समुदाय की कहानियाँ',
      h2: 'क्या आपके साथ भी ऐसा कुछ हुआ है?',
      p: 'असली अनुभव दूसरे विज़िटर्स को वही चेतावनी संकेत पहचानने में मदद करते हैं। हर कहानी पब्लिश होने से पहले जांची जाती है, और आप चाहें तो गुमनाम रह सकते हैं।',
      emptyTitle: 'अभी तक कोई कहानी नहीं है',
      emptyBody: 'अपनी कहानी साझा करने वाले पहले व्यक्ति बनें — आपका अनुभव किसी और को वही धोखाधड़ी पहचानने में मदद कर सकता है।',
      anonymousName: 'गुमनाम',
      formTitle: 'अपनी कहानी साझा करें',
      formNote: 'आपकी कहानी सीधे हमें भेजी जाती है। कुछ भी अपने आप पब्लिश नहीं होता — साइट पर आने से पहले हर कहानी को एक असली व्यक्ति जांचता है।',
      nameLabel: 'आपका नाम (वैकल्पिक)', anonymousLabel: 'इसे गुमनाम रूप से पोस्ट करें', storyLabel: 'क्या हुआ था?',
      emailLabel: 'आपका ईमेल (निजी — केवल फॉलो-अप सवाल के लिए इस्तेमाल होगा, कभी पब्लिश नहीं होगा)',
      consentLabel: 'मैं सहमत हूँ कि इस कहानी की समीक्षा हो और इसे इस साइट पर साझा किया जा सकता है।',
      submitLabel: 'मेरी कहानी भेजें',
      successMsg: 'आपकी कहानी भेजी जा रही है…',
      errorMsg: 'कुछ गड़बड़ हो गई। कृपया फिर से कोशिश करें, या हमें सीधे contact@commonsensecyber.org पर ईमेल करें।'
    },
    legal: {
      h2: 'गोपनीयता और नियम',
      p: 'हम इस साइट पर जानकारी को कैसे संभालते हैं, आसान भाषा में।',
      items: [
        { q: 'आप कौन सी जानकारी इकट्ठा करते हैं?', a: '"मदद पाएं" और "अपनी कहानी साझा करें" फ़ॉर्म आपका मैसेज एक ट्रांज़ैक्शनल ईमेल सेवा (Resend) के ज़रिए सीधे हमें भेजते हैं — हम कोई डेटाबेस नहीं चलाते, इसलिए उस ईमेल के अलावा कुछ भी स्टोर नहीं होता। समुदाय की कहानियाँ केवल एक असली व्यक्ति द्वारा जांचे जाने के बाद ही पब्लिश होती हैं, और आप कभी भी अपनी कहानी को एडिट, गुमनाम या हटाने के लिए कह सकते हैं। मैसेज डिलीवरी को वे कैसे संभालते हैं, यह जानने के लिए Resend की प्राइवेसी पॉलिसी देखें।' },
        { q: 'आप मेरे डिवाइस पर क्या स्टोर करते हैं?', a: 'सिर्फ दो छोटी प्राथमिकताएँ, जो आपके ब्राउज़र की लोकल स्टोरेज में सेव होती हैं: आपकी चुनी हुई भाषा और टेक्स्ट-साइज़ सेटिंग। दोनों आपके डिवाइस पर ही रहती हैं और कभी भी हमें नहीं भेजी जातीं।' },
        { q: 'क्या आप कुकीज़, ट्रैकिंग, या एनालिटिक्स इस्तेमाल करते हैं?', a: 'कोई विज्ञापन कुकीज़, ट्रैकिंग स्क्रिप्ट, या किसी भी तरह का एनालिटिक्स नहीं। एक अपवाद है Google Fonts, जिसका इस्तेमाल कई भाषाओं में टेक्स्ट दिखाने के लिए होता है — इसे लोड करने से आपका IP एड्रेस Google के साथ शेयर हो सकता है। जानकारी के लिए Google की प्राइवेसी पॉलिसी देखें।' },
        { q: 'बच्चों की गोपनीयता के बारे में क्या?', a: 'Common Sense Cyber हर उम्र के पाठकों के लिए लिखा गया है, बच्चों सहित, लेकिन हम जानबूझकर किसी से भी व्यक्तिगत जानकारी नहीं लेते। हर फ़ॉर्म वैकल्पिक है, और हम सलाह देते हैं कि कोई भी मैसेज भेजने से पहले माता-पिता या अभिभावक उसे जांच लें।' },
        { q: 'क्या यह आधिकारिक सरकारी या कानूनी सलाह है?', a: 'नहीं। Common Sense Cyber एक स्वतंत्र शैक्षिक संसाधन है और किसी भी सरकारी एजेंसी, बैंक, या कानून प्रवर्तन संस्था से संबद्ध नहीं है। इस साइट पर कुछ भी पेशेवर कानूनी, वित्तीय, या सुरक्षा सलाह नहीं है — किसी भी अत्यावश्यक बात को हमेशा आधिकारिक माध्यमों से जांचें। बाहरी साइटों के लिंक (जैसे Have I Been Pwned या सरकारी संसाधन) स्वतंत्र संगठनों की ओर ले जाते हैं जिन पर हमारा कोई नियंत्रण नहीं है।' },
        { q: 'इस पेज के बारे में सवाल हैं?', a: 'कभी भी हमसे contact@commonsensecyber.org पर संपर्क करें।' }
      ]
    },
    footer: {
      tagline: 'ऑनलाइन सुरक्षा, आसान भाषा में।',
      disclaimer: 'Common Sense Cyber एक स्वतंत्र शैक्षिक संसाधन है और किसी भी सरकारी एजेंसी, बैंक या कानून प्रवर्तन संस्था से जुड़ा नहीं है। किसी इमरजेंसी में, या अगर पैसे पहले ही भेजे जा चुके हैं, तो तुरंत अपने बैंक और कनाडाई एंटी-फ़्रॉड सेंटर से संपर्क करें।',
      copyright: '© {year} Common Sense Cyber. देखभाल के साथ बनाया गया।'
    }
  },
  yo: {
    meta: { name: 'Yorùbá', dir: 'ltr', minLabel: 'ìṣẹ́jú' },
    pageTitle: 'Common Sense Cyber — Ààbò Kọ̀ǹpútà Tí Ó Rọrùn',
    metaDescription: 'Common Sense Cyber ń kọ́ni nípa ààbò íńtánẹ́ẹ̀tì ojoojúmọ́ ní èdè rọrùn — fún àwọn ọmọdé, àgbàlagbà, àti gbogbo ẹni mìíràn. Kò sí ọ̀rọ̀ ìdíjú, kò sí ìdálẹ́bi.',
    skipLink: 'Lọ tààrà sí àkóónú àkọ́kọ́',
    logoAlt: 'Àmì Common Sense Cyber — asà kan tí ó ń rẹ́rìn-ín',
    heroArtAlt: 'Àwòrán asà Common Sense Cyber, asà kan tí ó ń rẹ́rìn-ín',
    footerLogoAlt: 'Àmì Common Sense Cyber',
    nav: { basics: 'Kọ́ Ìpìlẹ̀ Rẹ̀', tracks: 'Àwọn Ọmọdé àti Àgbàlagbà', story: 'Ìtàn Òtítọ́', quiz: 'Àdánwò', resources: 'Àwọn Ohun Èlò', report: 'Rí Ìrànlọ́wọ́ Gbà', faq: 'Àwọn Ìbéèrè Tí A Sábà Ń Béèrè', community: 'Fi Ìtàn Rẹ Sílẹ̀' },
    header: { textSize: 'Sọ Ọ̀rọ̀ Di Ńlá Kí Kíkà Le Rọrùn', menuOpen: 'Ṣí Àkójọ', menuClose: 'Ti Àkójọ', lang: 'Yan Èdè' },
    brand: { tagline: 'Ààbò lórí Íńtánẹ́ẹ̀tì, tí a ṣàlàyé láìní ìdíjú' },
    hero: {
      eyebrow: 'Ààbò Íńtánẹ́ẹ̀tì Ọ̀fẹ́ àti Ọ̀rẹ́',
      h1: 'Ààbò kọ̀ǹpútà tí ó ń sọ èdè tìrẹ.',
      p: 'Kò sí ọ̀rọ̀ ìdíjú. Kò sí ìdálẹ́bi. Kìkì ìtọ́sọ́nà tí ó rọrùn, tí ó sì gbóná janjan, láti ràn ọ́ lọ́wọ́ láti mọ olólùfẹ́, dáàbò bo àwọn àkántì rẹ, kí o sì wà láìléwu lórí íńtánẹ́ẹ̀tì — yálà ọmọ ọdún mẹ́sàn-án ni ọ tàbí àádọ́rùn-ún.',
      ctaPrimary: 'Bẹ̀rẹ̀ Sí Kọ́ Ìpìlẹ̀ Rẹ̀',
      ctaSecondary: 'Wo Ìtàn Òtítọ́ Kan',
      stat1: '6', stat1Label: 'Àwọn kókó tí a ṣàlàyé lọ́nà tí ó rọrùn',
      stat2: '2', stat2Label: 'Ọ̀nà fún àwọn ọmọdé àti àgbàlagbà',
      stat3: '5', stat3Label: 'Àdánwò ìmọ̀ olólùfẹ́'
    },
    mission: {
      eyebrow: 'Ìdí tí a fi ń ṣe èyí',
      h2: 'Ó yẹ kí gbogbo ènìyàn nímọ̀lára ààbò lórí íńtánẹ́ẹ̀tì — láìní láti ní ẹ̀kọ́ nípa kọ̀ǹpútà.',
      p: 'Ọ̀pọ̀lọpọ̀ ìmọ̀ràn nípa ààbò kọ̀ǹpútà ni a kọ fún àwọn tí ó ti mòye ààbò kọ̀ǹpútà tẹ́lẹ̀. Common Sense Cyber yí èyí padà. À ń yí ìmọ̀ ààbò òdodo padà sí ìtọ́sọ́nà tí ó rọrùn, tí ó gbóná, tí kò sì ní ìdálẹ́bi, fún àwọn tí ó nílò rẹ̀ jùlọ: àwọn ọmọdé tí wọ́n ṣẹ̀ṣẹ̀ ń bẹ̀rẹ̀ sí lo íńtánẹ́ẹ̀tì, àwọn àgbàlagbà tí wọ́n ń kọ́ ẹ̀rọ ìmọ̀ ẹ̀rọ tuntun, àti ẹnikẹ́ni tí kò fẹ́ láti túbọ̀ yanjú ọ̀rọ̀ ìdíjú láti lè wà láìléwu.',
      pillars: [
        { title: 'Èdè Rọrùn', body: 'Kò sí kúrukúru ọ̀rọ̀, kò sí ìlànà ìdẹ́rùbà — kìkì àlàyé tí ó ṣe kedere tí ẹnikẹ́ni lè lóye ní àkọ́kọ́ ìgbà.' },
        { title: 'Kò Sí Ìdálẹ́bi', body: 'Bí a bá tan ọ́ jẹ, kò túmọ̀ sí pé o ṣe àṣìṣe kan. À ń fojú sí kíkọ́ ìgbẹ́kẹ̀lé, kì í ṣe ìtìjú.' },
        { title: 'Fún Gbogbo Ọjọ́ orí', body: 'Láti tábílẹ́ẹ̀tì àkọ́kọ́ ọmọdé, dé fóònù alágbèéká àkọ́kọ́ ẹbí àgbà — ìtọ́sọ́nà tí a kọ́ nípa ìgbésí ayé gidi, kì í ṣe fún àwọn amòye ẹ̀rọ nìkan.' }
      ]
    },
    basics: {
      eyebrow: 'Kọ́ Ìpìlẹ̀ Rẹ̀',
      h2: 'Ohun mẹ́fà tí ó yẹ kí o mọ̀ — tí a ṣàlàyé láìní kúrukúru ọ̀rọ̀.',
      p: 'Tẹ orí ẹ̀kọ́ èyíkéyìí láti rí àwọn ìmọ̀ràn tí o lè lò lónìí.',
      seeTips: 'Wo àwọn ìmọ̀ràn',
      tips: [
        { title: 'Mímọ Àwọn Ìránṣẹ́ Ẹ̀tàn', summary: 'Àwọn ọ̀rọ̀ àti ímeèlì tí a ṣe láti dẹ́rùbà ọ́ kí o sì tẹ ìtọ́ka kíákíá.', points: [
          'Àwọn ilé-iṣẹ́ òdodo kì í sábà kánjú ọ́ — kánjú-kánjú ni àmì ewu tí ó tóbi jùlọ.',
          'Ṣàyẹ̀wò àdírẹ́ẹ̀sì ẹni tí ó fi ránṣẹ́ dáradára, kì í ṣe orúkọ tí ó farahàn nìkan.',
          'Bí o bá ní iyèméjì, kàn sí ilé-iṣẹ́ náà pẹ̀lú nọ́mbà tí o ti gbẹ́kẹ̀lé tẹ́lẹ̀ — kì í ṣe èyí tí ó wà nínú ìránṣẹ́ náà.'
        ]},
        { title: 'Ààbò Ọ̀rọ̀ìpamọ́', summary: 'Ìwà kékeré díẹ̀ ni ó lè dí ọ̀pọ̀lọpọ̀ ìfàyà àkántì lọ́wọ́.', points: [
          'Lo gbólóhùn ọ̀rọ̀ mẹ́ta sí mẹ́rin tí a yàn láìlérò dípò ọ̀rọ̀ìpamọ́ tí ó kúrú tí ó sì ní ìdíjú.',
          'Má ṣe tún lo ọ̀rọ̀ìpamọ́ kan náà ní àwọn ojú-òpó ọ̀tọ̀ọ̀tọ̀.',
          'Ṣí ìjẹ́rìí ìgbésẹ̀-méjì ní ibi gbogbo tí a bá fi lélẹ̀ — èyí ni ìlọsíwájú tí ó dára jùlọ tí o lè ṣe.',
          'Ọ̀rọ̀ìpamọ́ tí ó dára kò gbọ́dọ̀ jẹ́ ọ̀rọ̀ gidi, orúkọ rẹ, ọjọ́ ìbí rẹ, tàbí orúkọ ẹran ọ̀sìn rẹ — àwọn wọ̀nyí ni àkọ́kọ́ tí ẹnikẹ́ni yóò gbìyànjú.',
          'Yẹra fún àwọn àpẹẹrẹ tí ó rọrùn láti mọ̀ bíi "123456", "password", tàbí ìlànà bọ́tìnnì bíi "qwerty".',
          'Kò sí ilé-iṣẹ́ òdodo kan tí yóò pè ọ́, kí ó rán ọ̀rọ̀ sí ọ, tàbí kí ó fi ímeèlì ránṣẹ́ sí ọ láti bèèrè kí o pe ọ̀rọ̀ìpamọ́ rẹ jáde.'
        ]},
        { title: 'Ìwádìí Íńtánẹ́ẹ̀tì Láìléwu', summary: 'Àmì kékeré máa ń fi hàn bí ojú-òpó (tàbí ìkìlọ̀) kan bá ṣe é gbẹ́kẹ̀lé.', points: [
          'Wá àmì ìdábọ̀bọ̀ àti "https" kí o tó fi ìsọfúnni èyíkéyìí sí i.',
          'Bójú wo àwọn fèrèsé tí ó ń sọ pé ẹ̀rọ rẹ ní fáírọ́ọ̀sì — ohun èlò ààbò òdodo kì í ṣiṣẹ́ bẹ́ẹ̀ rí.',
          'Máa mú ẹ̀rọ àti fáàsì rẹ dójú ìgbà; ìmúdójúìwọ̀n sábà máa ń tún ihò ààbò ṣe.'
        ]},
        { title: 'Ìtàkun Ìbáṣepọ̀ àti Ìkọ̀kọ̀', summary: 'Ohun tí o bá pín lè di ohun èlò lòdì sí ọ ní ọ̀nà tí ó lè yà ọ́ lẹ́nu.', points: [
          'Ronú ẹ̀ẹ̀mejì kí o tó fi ọjọ́ ìbí, àdírẹ́ẹ̀sì, tàbí ètò ìrìnàjò rẹ hàn.',
          'Ṣàyẹ̀wò ètò ìkọ̀kọ̀ rẹ ní gbogbo oṣù díẹ̀ — àwọn ètò àkọ́kọ́ máa ń yí padà.',
          'Ṣọ́ra nígbà tí o bá ń tẹ́wọ́gba ìbéèrè ọ̀rẹ́ láti ọ̀dọ̀ àwọn ẹni tí o kò mọ̀ ní ti gidi.'
        ]},
        { title: 'Dáàbò Bo Owó Rẹ', summary: 'Bí a ṣe lè mọ ẹ̀tàn owó kí ó tó gbà ọ́ lówó.', points: [
          'Kò sí báǹkì tàbí àjọ ìjọba òdodo tí yóò béèrè owó nípasẹ̀ káàdì ẹ̀bùn tàbí owó dídìjì.',
          'O gba ìbéèrè owó tí a kò retí, kódà láti ọ̀dọ̀ "ẹbí"? Pè wọ́n padà pẹ̀lú nọ́mbà tí o ti ní tẹ́lẹ̀.',
          'Fà sẹ́yìn díẹ̀. Ìbéèrè òdodo lè dúró títí tí o ó fi ṣe àyẹ̀wò rẹ̀ pátápátá.'
        ]},
        { title: 'Wi-Fi àti Àwọn Ẹ̀rọ', summary: 'Ìwà ojoojúmọ́ tí ó ń pa àwọn ẹ̀rọ rẹ mọ́ láìléwu.', points: [
          'Yẹra fún fífi ọ̀rọ̀ìpamọ́ tàbí ìsọfúnni báǹkì sí orí Wi-Fi gbogbogbò.',
          'Máa mú fáàsì fóònù àti kọ̀ǹpútà rẹ dójú ìgbà.',
          'Máa fi PIN, ọ̀rọ̀ìpamọ́, tàbí ika ọwọ́ ti ẹ̀rọ rẹ nígbà gbogbo.'
        ]}
      ]
    },
    tracks: {
      eyebrow: 'Tí A Ṣe Fún Ọ',
      h2: 'Ìtọ́sọ́nà tí a ṣe fún ibi tí o ti ń bẹ̀rẹ̀.',
      kids: { badge: 'Fún Àwọn Olùṣàwárí Kékeré', title: 'Fún Àwọn Olùṣàwárí Kékeré', body: 'Òfin rọrùn fún àwọn ọmọdé àti ọ̀dọ́ tí wọ́n ń bẹ̀rẹ̀ sí mọ íńtánẹ́ẹ̀tì.', points: [
        'Ọ̀rọ̀ìpamọ́ rẹ jẹ́ tìrẹ nìkan — má ṣe fi í fún ẹnikẹ́ni, kódà ọ̀rẹ́ rẹ.',
        'Máa pa orúkọ gidi rẹ, ilé-ìwé, àti àdírẹ́ẹ̀sì rẹ mọ́ ní ìkọ̀kọ̀ lórí íńtánẹ́ẹ̀tì.',
        'Bí ohunkóhun bá dàbí ẹ̀rù tàbí àjèjì lórí íńtánẹ́ẹ̀tì, sọ fún àgbàlagbà tí o gbẹ́kẹ̀lé. Wàhálà kò ní kàn ọ́.',
        'Máa ṣàánú — òfin kan náà tí a fi ń hùwà rere sí ẹlòmíràn lójú-ẹsẹ̀ ni ó tún kan lórí íńtánẹ́ẹ̀tì.'
      ], cta: 'Wo àwọn ìmọ̀ràn síi' },
      seniors: { badge: 'Fún Àwọn Ọ̀gá Íńtánẹ́ẹ̀tì', title: 'Fún Àwọn Ọ̀gá Íńtánẹ́ẹ̀tì', body: 'Ìtọ́sọ́nà tí ó fún ni ìgboyà tí ó sì wúlò — nítorí àwọn ẹ̀tàn máa ń dojú kọ àwọn ọlọ́gbọ́n lójoojúmọ́.', points: [
        'Kò burú láti fi fóònù sílẹ̀, fà sẹ́yìn, tàbí béèrè ìbéèrè kí o tó ṣe ohunkóhun.',
        '"Ẹbí" kan ń béèrè owó kánjú-kánjú? Pè wọ́n padà pẹ̀lú nọ́mbà tí o ti ní tẹ́lẹ̀.',
        'Kò sí báǹkì, àjọ, tàbí ilé-iṣẹ́ òdodo tí yóò béèrè kí o san owó pẹ̀lú káàdì ẹ̀bùn.',
        'Gbígba ìránṣẹ́ tí ó le kò túmọ̀ sí pé o ti kọjá àkókò rẹ — ó túmọ̀ sí pé ẹnìkan ń gbìyànjú láti tàn ọ́ jẹ.'
      ], cta: 'Wo àwọn ìmọ̀ràn síi' }
    },
    anatomy: {
      eyebrow: 'Ìlànà tí ó wà lẹ́yìn ẹ̀rù',
      h2: 'Ìtúpalẹ̀ Ìpè Ẹ̀tàn',
      p: 'Ó fẹ́rẹ̀ẹ́ jẹ́ pé gbogbo ẹ̀tàn fóònù tàbí ọ̀rọ̀ ń tẹ̀lé ìgbésẹ̀ mẹ́rin kan náà. Bí o bá ti lè dá ìlànà náà mọ̀, yóò rọrùn púpọ̀ láti dá ẹ̀tàn náà mọ̀.',
      steps: [
        { title: 'Ìdẹ̀kùn', body: 'Ìpè tàbí ọ̀rọ̀ kan ṣẹ̀dá ìjàmbá àìrí-tọ́ — sábà máa ń díbọ́n láti jẹ́ ẹnìkan tí o nífẹ̀ẹ́.' },
        { title: 'Kánjú-kánjú', body: '"O gbọ́dọ̀ ṣe ohunkóhun ní ìsinsìnyí" — àwọn ẹlẹ́tàn kì í fún ọ ní àkókò láti ronú tàbí ṣàyẹ̀wò.' },
        { title: 'Ìkọ̀kọ̀', body: '"Jọ̀wọ́ má ṣe sọ fún ẹnikẹ́ni" — èyí máa ń dí àwọn tí ó lè dá ẹ̀tàn náà mọ̀ lọ́wọ́.' },
        { title: 'Ìbéèrè', body: 'Ìbéèrè fún owó, káàdì ẹ̀bùn, tàbí ìsọfúnni àkántì — ète gidi ìpè náà.' }
      ],
      calloutStrong: 'O lè já ìlànà náà ní ìgbésẹ̀ èyíkéyìí.',
      calloutBody: 'Fi fóònù sílẹ̀, pe ẹni náà padà pẹ̀lú nọ́mbà tí o ti ní tẹ́lẹ̀, kí o sì fà sẹ́yìn díẹ̀ — ìjàmbá gidi lè dúró fún ìṣẹ́jú márùn-ún.'
    },
    story: {
      eyebrow: 'Ìtàn Òtítọ́',
      h2: 'Bí àwọn ìpè ẹ̀tàn gidi ṣe ń dún gan-an.',
      p: 'Àwọn ìpè ẹ̀tàn máa ń ṣiṣẹ́ nítorí wọ́n ń ṣẹ̀dá ìbẹ̀rù àti kánjú-kánjú — "ẹbí" kan wà nínú wàhálà, tí ó nílò ìrànlọ́wọ́ lẹ́sẹ̀kẹsẹ̀, tí ó sì ń béèrè kí o pa á mọ́ ní ìkọ̀kọ̀. Àwọn fídíò kúkúrú wọ̀nyí fi bí ẹ̀tàn náà ṣe ń ṣẹlẹ̀ hàn àti ohun tí o yẹ kí o fetí sí.',
      videoFallback: 'Ẹ̀rọ àwárí rẹ kò ní àtìlẹ́yìn fún fídíò tí a fi sí i.',
      videoDownload: 'Gba fídíò náà',
      items: [
        { title: 'Ìpè "Ọmọọmọ Nínú Wàhálà"', body: 'Àfarawé ìpè ẹ̀tàn ẹbí àgbà oníṣàkúso, tí ó fi bí ẹlẹ́tàn kan ṣe ń ṣẹ̀dá ìbẹ̀rù àti kánjú-kánjú ní ìṣẹ́jú àáyá díẹ̀ àkọ́kọ́ hàn.', quote: '"Bí ìpè kan bá béèrè kí o ṣe ohunkóhun lẹ́sẹ̀kẹsẹ̀ kí o sì dákẹ́, ìkọ̀kọ̀ náà fúnra rẹ̀ ni àmì ewu tí ó tóbi jùlọ."', videoLabel: 'Fídíò tí ó ń fi ìpè ẹ̀tàn ẹbí àgbà hàn' },
        { title: 'Bí Ẹ̀tàn Ẹbí Àgbà Ṣe Ń Dojú Kọ Àgbàlagbà Ní Ti Gidi', body: 'Ìròyìn ìhìn iṣẹ́ nípa bí àwọn ẹ̀tàn wọ̀nyí ṣe ń ṣiṣẹ́ ní ìwọ̀n ńlá, àti ìdí tí wọ́n fi ń ṣiṣẹ́ dáradára bẹ́ẹ̀ lórí àwọn ènìyàn tí ó ní ọgbọ́n tí wọ́n sì ń ṣọ́ra.', quote: '"A ṣe àwọn ìpè wọ̀nyí láti mú kí ó dàbí ẹni pé kò sí àkókò láti ṣàyẹ̀wò — ìmọ̀lára náà fúnra rẹ̀ ni àmì ewu náà."', videoLabel: 'Ìròyìn ìhìn iṣẹ́ nípa ẹ̀tàn ẹbí àgbà tí ó ń dojú kọ àwọn àgbàlagbà' },
        { title: 'Nígbà Tí "Ọ̀rẹ́" Uni-lọ́tọ̀ Di Alátakò-owó (Ìdẹ́rùbà)', body: 'Ìròyìn ìhìn iṣẹ́ nípa ẹ̀tàn ìdẹ́rùbà-ìbálòpọ̀ (sextortion), níbi tí àjèjì kan ti díbọ̀n pé òun jẹ́ ọ̀rẹ́ lórí ẹ̀rọ ayélujára, tí ó sì lẹ́yìn náà halẹ̀ láti fi àwọn fọ́tò ìkọ̀kọ̀ payá àyàfi tí ẹni tí ó fẹ́ ẹ̀tàn bá san owó tàbí fi àwọn fọ́tò mìíràn ránṣẹ́. Ó ń kan àwọn ọmọdé àti ọ̀dọ́ ju bí ọ̀pọ̀ àwọn òbí ṣe rò lọ.', quote: '"Fọ́tò náà kì í ṣe pàjáwìrì — sísọ fún àgbàlagbà tí a gbẹ́kẹ̀lé lẹ́sẹ̀kẹsẹ̀ ni pàjáwìrì. Kò sí ẹnikẹ́ni tí yóò wà nínú wàhálà, àwọn ọ̀nà sì wà láti mú kí a yọ àwọn fọ́tò náà kúrò."', videoLabel: 'Ìròyìn ìhìn iṣẹ́ nípa ẹ̀tàn ìdẹ́rùbà-ìbálòpọ̀ tí ó ń dojú kọ àwọn ọmọdé àti ọ̀dọ́ lórí ẹ̀rọ ayélujára' },
        { title: 'Àwọn "Nǹkan Ọ̀fẹ́" Tí Kì Í Ṣe Ọ̀fẹ́ Rárá', body: 'Ìròyìn ìhìn iṣẹ́ nípa bí àwọn ẹlẹ́tàn ṣe ń dojú kọ àwọn ọmọdé nínú àwọn eré uni-lọ́tọ̀ àti àwọn app ìbánisọ̀rọ̀, ní lílo àwọn ẹ̀bùn èké, àwọn ohun kan "ọ̀fẹ́", àti àwọn ọ̀nà pàṣípààrọ̀ tí a dà rú láti jí àkọọ́lẹ̀ àti àlàyé ìsanwó.', quote: '"Bí pàṣípààrọ̀ tàbí ẹ̀bùn kan nínú eré kan bá dà bí ẹni pé ó dára jù láti jẹ́ òtítọ́, ó fẹ́rẹ̀ẹ́ jẹ́ bẹ́ẹ̀ nígbà gbogbo — ẹ̀bùn gidi kì í béèrè fún ọ̀rọ̀-ìpamọ́ rẹ láéláé."', videoLabel: 'Ìròyìn ìhìn iṣẹ́ nípa ẹ̀tàn tí ó ń dojú kọ àwọn ọmọdé nínú eré uni-lọ́tọ̀' }
      ]
    },
    resources: {
      eyebrow: 'Máa Mọ Ìròyìn',
      h2: 'Ibi tí o lè ṣàyẹ̀wò àwọn ẹ̀tàn tí a mọ̀ àti ìkìlọ̀ jìbìtì.',
      p: 'Àwọn àjọ tí a lè gbẹ́kẹ̀lé wọ̀nyí ń tọpinpin àwọn ẹ̀tàn tí ń lọ lọ́wọ́, wọ́n sì ń tẹ ìkìlọ̀ jáde, wọ́n sì ń gba ìròyìn ẹ̀sùn — fi díẹ̀ pamọ́ kí o sì ṣàyẹ̀wò wọn nígbàkigbà tí ohunkóhun bá dàbí ẹni pé kò tọ̀nà.',
      groups: [
        { title: 'Kánádà', items: [
          { title: 'Ilé-iṣẹ́ Ìjà Ẹ̀tàn ti Kánádà', body: 'Ilé-iṣẹ́ orílẹ̀-èdè Kánádà fún ìròyìn ẹ̀tàn àti jìbìtì — ṣàyẹ̀wò àwọn ìkìlọ̀ ẹ̀tàn lọ́wọ́lọ́wọ́ kí o sì fi ẹ̀sùn kàn.' },
          { title: 'Ilé-iṣẹ́ Ààbò Kọ̀ǹpútà ti Kánádà', body: 'Ìtọ́sọ́nà Ìjọba Kánádà nípa ìwádìí ẹ̀tàn, fáírọ́ọ̀sì, àti ààbò lórí íńtánẹ́ẹ̀tì.' },
          { title: 'Get Cyber Safe', body: 'Ìpolongo ìmọ̀ orílẹ̀-èdè pẹ̀lú ìmọ̀ràn ní èdè rọrùn àti ìkìlọ̀ ewu lọ́wọ́lọ́wọ́.' },
          { title: 'Ilé-iṣẹ́ Ìdíje ti Kánádà', body: 'Ń tọpinpin ìpolówó ọjà ẹ̀tàn àti ẹ̀tàn oníbàárà, pẹ̀lú àkójọ ẹ̀tàn tí a mọ̀ tí o lè wá kiri.' }
        ]},
        { title: 'Àgbáyé', items: [
          { title: 'FTC Consumer Advice (Amẹ́ríkà)', body: 'Ìkìlọ̀ ẹ̀tàn oníbàárà, ìtọ́sọ́nà, àti irinṣẹ́ ìròyìn ẹ̀sùn láti ọwọ́ Federal Trade Commission ti Amẹ́ríkà.' },
          { title: 'Action Fraud (United Kingdom)', body: 'Ilé-iṣẹ́ orílẹ̀-èdè United Kingdom fún ìròyìn ẹ̀tàn àti ìwà ọ̀daràn kọ̀ǹpútà.' },
          { title: 'FBI Internet Crime Complaint Center (IC3)', body: 'Ń tọpinpin tí ó sì ń ṣèwádìí ìwà ọ̀daràn íńtánẹ́ẹ̀tì tí a fi ẹ̀sùn kàn ní Amẹ́ríkà.' }
        ]},
        { title: 'Ẹ̀tàn Kọ̀ǹpútà àti Ti Íńtánẹ́ẹ̀tì', items: [
          { title: 'Anti-Phishing Working Group', body: 'Ń tọpinpin ìlànà ìwádìí ẹ̀tàn àti ojú-òpó èké kárí ayé; ibi tí a ti lè fi ẹ̀sùn kan ojú-òpó tí a fura sí.' },
          { title: 'Google Safe Browsing', body: 'Ṣàyẹ̀wò bóyá ojú-òpó kan ti jẹ́ èyí tí a ti sàmì sí gẹ́gẹ́ bí aláìléwu tàbí tí ó ń tannijẹ.' },
          { title: 'Canadian Securities Administrators (CSA)', body: 'Àwọn ohun èlò ààbò olùdókòwò láti dá ẹ̀tàn ìdókòwò àti owó dídìjì mọ̀.' }
        ]}
      ]
    },
    quiz: {
      eyebrow: 'Dán ìmọ̀ ẹ̀tàn rẹ wò',
      h2: 'Ṣé o rò pé o lè dá ẹ̀tàn mọ̀? Dán an wò.',
      p: 'Àwọn àpẹẹrẹ ayé gidi márùn-ún, kíákíá. Kò sí àmì tí ó burú — ìbéèrè kọ̀ọ̀kan máa ń jẹ́ kí o wà láìléwu síi.',
      questionOf: 'Ìbéèrè {n} nínú {total}',
      answerGroupLabel: 'Àwọn àṣàyàn ìdáhùn',
      nextLabel: 'Ìbéèrè tí ó kàn',
      resultsLabel: 'Wo àbájáde mi',
      resultTitle: 'O rí {score} nínú {total}!',
      resultBody: 'Ìbéèrè kọ̀ọ̀kan tí o ronú nípa rẹ̀ jẹ́ kí ó ṣòro síi láti tàn ọ́ jẹ. Pín àdánwò yìí fún ẹnikẹ́ni tí o nífẹ̀ẹ́ sí — pàápàá jùlọ ẹni tí ó ṣẹ̀ṣẹ̀ ń kọ́ láti dá ẹ̀tàn mọ̀.',
      retryLabel: 'Tún dán an wò',
      questions: [
        { q: 'O gba ọ̀rọ̀ láti ọ̀dọ̀ nọ́mbà àìmọ̀: "A kò lè fi ẹrù rẹ ránṣẹ́, tẹ ibí kí a tún ètò ṣe." Kí ni ọ̀nà tí ó léwu jùlọ láti ṣe?',
          options: ['Tẹ ìtọ́ka náà lẹ́sẹ̀kẹsẹ̀ kí ẹrù náà má bàa yẹ̀ mí', 'Ṣàyẹ̀wò bí ẹrù náà ṣe ń bọ̀ tààrà lórí ojú-òpó tàbí app ilé-iṣẹ́ náà', 'Fi "STOP" dá a lóhùn láti dá ìforúkọsílẹ̀ dúró'],
          correct: 1,
          why: { correct: 'Òdodo gan-an — kíkọ àdírẹ́ẹ̀sì gidi ilé-iṣẹ́ náà fúnra rẹ túmọ̀ sí pé ìtọ́ka èké kò lè tàn ọ́ jẹ láé.', incorrect: 'Ọ̀nà tí ó léwu jùlọ ni: yẹra fún ìtọ́ka náà pátápátá, kí o sì ṣàyẹ̀wò bí ẹrù náà ṣe ń bọ̀ lórí ojú-òpó tàbí app gidi ilé-iṣẹ́ náà.' } },
        { q: '"Ọmọọmọ" rẹ pè ọ́ pé òun wà nínú wàhálà, òun sì nílò owó lẹ́sẹ̀kẹsẹ̀ — ó sì ní kí o pa á mọ́ ní ìkọ̀kọ̀. Kí ni ọ̀nà tí ó léwu jùlọ láti ṣe?',
          options: ['Fi owó ránṣẹ́ lẹ́sẹ̀kẹsẹ̀, nítorí ó dàbí ọ̀rọ̀ kánjú-kánjú', 'Fi fóònù sílẹ̀ kí o sì pe ọmọọmọ rẹ padà pẹ̀lú nọ́mbà tí o ti ní fún un tẹ́lẹ̀', 'Béèrè ìbéèrè ìkọ̀kọ̀ lọ́wọ́ rẹ̀ lórí fóònù láti ṣàyẹ̀wò'],
          correct: 1,
          why: { correct: 'Pípe padà pẹ̀lú nọ́mbà tí o ti gbẹ́kẹ̀lé tẹ́lẹ̀ ni ọ̀nà tí ó léwu jùlọ láti fi ìdí ẹni tí o ń bá sọ̀rọ̀ mulẹ̀.', incorrect: 'Ohùn lè dàbí òdodo lórí fóònù ju bí ó ṣe yẹ lọ. Ó dára jùlọ láti fi fóònù sílẹ̀ kí o sì pe nọ́mbà tí o ti ní fún ẹni náà tẹ́lẹ̀.' } },
        { q: 'Ímeèlì kan sọ pé: "A óò dá àkántì rẹ dúró ní wákàtí 24 — ṣàyẹ̀wò ọ̀rọ̀ìpamọ́ rẹ nísinsìnyí," pẹ̀lú àmì pupa ńlá tí ó kán. Kí ni ọ̀nà tí ó léwu jùlọ láti ṣe?',
          options: ['Tẹ ìtọ́ka náà lẹ́sẹ̀kẹsẹ̀ láti dáàbò bo ara mi', 'Lọ sí ojú-òpó òdodo nípa kíkọ àdírẹ́ẹ̀sì náà fúnra rẹ'],
          correct: 1,
          why: { correct: 'Kánjú-kánjú jẹ́ ìlànà ẹ̀tàn àtọwọ́dọ́wọ́. Kíkọ àdírẹ́ẹ̀sì náà fúnra rẹ máa ń rí i dájú pé o dé ojú-òpó gidi nígbà gbogbo.', incorrect: 'Kọ àdírẹ́ẹ̀sì gidi ilé-iṣẹ́ náà fúnra rẹ dípò kíkọ́ ìtọ́ka nínú ímeèlì — ohùn kánjú-kánjú jẹ́ àmì ewu.' } },
        { q: 'Fèrèsé kan sọ pé: "A rí fáírọ́ọ̀sì! Pe nọ́mbà yìí nísinsìnyí fún ìrànlọ́wọ́." Kí ni ó yẹ kí o ṣe?',
          options: ['Pe nọ́mbà náà, ó dàbí òdodo', 'Ti fèrèsé náà (tàbí kí o tún ẹ̀rọ àwárí bẹ̀rẹ̀) kí o sì fojú fo ó'],
          correct: 1,
          why: { correct: 'Òdodo — ohun èlò ààbò gidi kì í béèrè kí o pe nọ́mbà fóònù rí.', incorrect: 'Ìkìlọ̀ ààbò gidi kì í béèrè kí o pe nọ́mbà fóònù. Ti fèrèsé náà kí o sì tẹ̀síwájú.' } },
        { q: 'Ẹnìkan tí o ṣẹ̀ṣẹ̀ pàdé lórí íńtánẹ́ẹ̀tì béèrè àdírẹ́ẹ̀sì ilé rẹ àti orúkọ rẹ ní kíkún "kìkì láti jẹ́ ọ̀rẹ́." Kí ni ọ̀nà tí ó léwu jùlọ láti ṣe?',
          options: ['Fi hàn án, ó dàbí ẹni rere', 'Pa ìsọfúnni rẹ mọ́ ní ìkọ̀kọ̀, kí o sì sọ fún àgbàlagbà tàbí ọ̀rẹ́ tí o gbẹ́kẹ̀lé nípa ìbéèrè náà'],
          correct: 1,
          why: { correct: 'Ṣe dáradára — pípa ìsọfúnni rẹ mọ́ ní ìkọ̀kọ̀ àti sísọ fún ẹnìkan tí o gbẹ́kẹ̀lé jẹ́ àṣàyàn tí ó léwu jùlọ nígbà gbogbo.', incorrect: 'Ó dára jùlọ láti pa ìsọfúnni rẹ mọ́ ní ìkọ̀kọ̀, kódà pẹ̀lú àwọn tí ó dàbí ọ̀rẹ́, kí o sì sọ fún ẹnìkan tí o gbẹ́kẹ̀lé.' } }
      ]
    },
    report: {
      eyebrow: 'Rí Ìrànlọ́wọ́ Gbà',
      h2: 'Ṣé o rò pé o ti rí ẹ̀tàn kan — tàbí wọ́n ti fi ọ ṣe àfojúsùn ẹ̀tàn?',
      p: 'O kò dá wà, kò sì tíì pẹ́ jù láti ṣe ohunkóhun. Èyí ni ibi tí o lè yíjú sí.',
      resourcesTitle: 'Àwọn ibi tí ó ṣeé gbẹ́kẹ̀lé láti fi ẹ̀sùn kàn',
      resources: [
        { title: 'Ilé-iṣẹ́ Ìjà Ẹ̀tàn ti Kánádà', body: '1-888-495-8501 — fi ẹ̀sùn ẹ̀tàn kàn kí o sì gba ìmọ̀ràn, ní ọ̀fẹ́ àti ní ìkọ̀kọ̀.' },
        { title: 'Báǹkì rẹ tàbí olùpèsè káàdì rẹ', body: 'Pe nọ́mbà tí a tẹ̀ sórí káàdì rẹ tàbí ìwé àkọsílẹ̀ rẹ — kì í ṣe nọ́mbà tí ẹni tí ó pè ọ́ fún ọ.' },
        { title: 'Ẹbí tàbí ọ̀rẹ́ tí o gbẹ́kẹ̀lé', body: 'Bíbá ẹnìkan tí o gbẹ́kẹ̀lé sọ̀rọ̀ nípa rẹ̀ jẹ́ ìgbésẹ̀ àkọ́kọ́ tí ó gbọ́n nígbà gbogbo.' }
      ],
      formTitle: 'Bi wá ní ìbéèrè',
      formNote: 'A óò fi ìránṣẹ́ rẹ ránṣẹ́ sí wa tààrà — kò sí àìní fún app ímeèlì kankan.',
      nameLabel: 'Orúkọ rẹ', emailLabel: 'Àdírẹ́ẹ̀sì ímeèlì', messageLabel: 'Kí ni ó ṣẹlẹ̀?',
      submitLabel: 'Fi ìránṣẹ́ mi ránṣẹ́',
      successMsg: 'À ń fi ìránṣẹ́ rẹ ránṣẹ́…',
      errorMsg: 'Ohun kan ṣàṣìṣe. Jọ̀wọ́ gbìyànjú lẹ́ẹ̀kan síi, tàbí kọ ìmeèlì sí wa tààrà ní contact@commonsensecyber.org.'
    },
    faq: {
      eyebrow: 'Àwọn Ìbéèrè', h2: 'Àwọn Ìbéèrè Tí A Sábà Ń Béèrè',
      items: [
        { q: 'Ṣé Common Sense Cyber jẹ́ àjọ ìjọba?', a: 'Rárá. À jẹ́ orísun ìmọ̀ ìjìnlẹ̀ òmìnira, tí a kò so mọ́ àjọ ìjọba, báǹkì, tàbí iṣẹ́ ọlọ́pàá èyíkéyìí. À ń pín ìtọ́sọ́nà ẹ̀kọ́ gbogbogbò — máa fi ìdí ohunkóhun tí ó kán múlẹ̀ nígbà gbogbo nípasẹ̀ ọ̀nà ìjọba tí ó bọ́gbọ́n mu.' },
        { q: 'Mo rò pé mo ti tan mọ́ ẹ̀tàn kan tẹ́lẹ̀. Kí ni ó yẹ kí n kọ́kọ́ ṣe?', a: 'Kàn sí báǹkì rẹ tàbí olùpèsè káàdì rẹ lẹ́sẹ̀kẹsẹ̀ nípa lílo nọ́mbà tí ó wà lórí káàdì rẹ, lẹ́yìn náà kàn sí Ilé-iṣẹ́ Ìjà Ẹ̀tàn ti Kánádà. Ṣíṣe kíákíá lè yí àwọn nǹkan padà lóòótọ́ — kò sì sí ìtìjú kankan nínú béèrè ìrànlọ́wọ́.' },
        { q: 'Ṣé mo nílò láti mọ ẹ̀rọ dáradára kí n tó lè lo ojú-òpó yìí?', a: 'Rárá rárá — ìyẹn gan-an ni gbogbo kókó ọ̀rọ̀ náà. Gbogbo ìtọ́sọ́nà tí ó wà níhìn-ín ni a kọ ní èdè rọrùn, láìní ìrò pé o ní ìmọ̀ ẹ̀rọ kankan tẹ́lẹ̀.' },
        { q: 'Ṣé mo lè pín ojú-òpó yìí fún ẹbí mi?', a: 'Jọ̀wọ́ ṣe bẹ́ẹ̀! Common Sense Cyber jẹ́ ọ̀fẹ́ láti lò àti láti pín — pàápàá jùlọ fún àwọn olùṣàwárí kékeré àti àwọn ọ̀gá íńtánẹ́ẹ̀tì nínú ìgbésí ayé rẹ.' }
      ]
    },
    community: {
      eyebrow: 'Àwọn Ìtàn Àwùjọ',
      h2: 'Ǹjẹ́ ohun kan bí èyí ti ṣẹlẹ̀ sí ọ rí?',
      p: 'Àwọn ìrírí gidi ń ràn àwọn àlejò mìíràn lọ́wọ́ láti mọ àwọn àmì ewu kan náà. A máa ń ṣàyẹ̀wò ìtàn kọ̀ọ̀kan kí ó tó jáde, o sì lè dá wà ní ìkọ̀kọ̀ bí o bá fẹ́.',
      emptyTitle: 'Kò sí ìtàn kankan síbẹ̀',
      emptyBody: 'Jẹ́ ẹni àkọ́kọ́ tí yóò pín tirẹ̀ — ìrírí rẹ lè ràn ẹlòmíràn lọ́wọ́ láti mọ ẹ̀tàn kan náà.',
      anonymousName: 'Aláìṣàkọsílẹ̀',
      formTitle: 'Fi Ìtàn Rẹ Sílẹ̀',
      formNote: 'A óò fi ìtàn rẹ ránṣẹ́ sí wa tààrà. Kò sí ohun tí yóò jáde fúnra rẹ̀ — ènìyàn gidi ni yóò ṣàyẹ̀wò ìtàn kọ̀ọ̀kan kí ó tó farahàn lórí ojú-òpó náà.',
      nameLabel: 'Orúkọ rẹ (kì í ṣe dandan)', anonymousLabel: 'Fi èyí jáde láìní orúkọ', storyLabel: 'Kí ni ó ṣẹlẹ̀?',
      emailLabel: 'Ímeèlì rẹ (ìkọ̀kọ̀ — a óò lò ó bí a bá ní ìbéèrè kan síi, a kì yóò gbé e jáde láéláé)',
      consentLabel: 'Ó yẹ mí bí wọ́n bá ṣàyẹ̀wò ìtàn yìí tí wọ́n sì lè pín in lórí ojú-òpó yìí.',
      submitLabel: 'Fi ìtàn mi ránṣẹ́',
      successMsg: 'À ń fi ìtàn rẹ ránṣẹ́…',
      errorMsg: 'Ohun kan ṣàṣìṣe. Jọ̀wọ́ gbìyànjú lẹ́ẹ̀kan síi, tàbí kọ ìmeèlì sí wa tààrà ní contact@commonsensecyber.org.'
    },
    legal: {
      h2: 'Ìpamọ́ Àṣírí àti Àwọn Òfin',
      p: 'Bí a ṣe ń mú àlàyé lórí ojú-òpó yìí, ní èdè tí ó rọrùn.',
      items: [
        { q: 'Àlàyé wo ni ẹ̀yin ń kójọ?', a: 'Àwọn fọ́ọ̀mù "Rí Ìrànlọ́wọ́ Gbà" àti "Fi Ìtàn Rẹ Sílẹ̀" máa ń fi ìránṣẹ́ rẹ ránṣẹ́ sí wa tààrà nípasẹ̀ iṣẹ́ ímeèlì (Resend) — a kò ṣiṣẹ́ ibi ìpamọ́ dátà kankan, nítorí náà kò sí ohun tí a óò tọ́jú yàtọ̀ sí ímeèlì náà fúnra rẹ̀. Àwọn ìtàn àwùjọ ni a óò gbé jáde lẹ́yìn tí ènìyàn gidi bá ti ṣàyẹ̀wò wọn, o sì lè béèrè kí a ṣàtúnṣe, mú kí ìtàn rẹ jẹ́ aláìṣàkọsílẹ̀, tàbí yọ ìtàn rẹ kúrò nígbàkigbà. Wo ìlànà ìpamọ́ àṣírí Resend fún bí wọ́n ṣe ń rí sí fífi ìránṣẹ́ ránṣẹ́.' },
        { q: 'Kí ni ẹ̀yin ń fi pamọ́ sórí ẹ̀rọ mi?', a: 'Àwọn ohun kékeré méjì péré ni a ń fi pamọ́ sí ibi ìpamọ́ àdúgbò browser rẹ: èdè tí o yàn àti ìwọ̀n lẹ́tà tí o yàn. Méjèèjì a máa dúró sórí ẹ̀rọ rẹ, a kì í fi wọ́n ránṣẹ́ sí wa láéláé.' },
        { q: 'Ṣé ẹ̀yin ń lo kúkì, àbójútó, tàbí ìtúpalẹ̀ dátà?', a: 'Kò sí kúkì olùpolówó, àwọn àkọsílẹ̀ àbójútó, tàbí ìtúpalẹ̀ dátà kankan. Ọ̀kan péré ni Google Fonts, èyí tí a ń lò láti fi hàn ọ̀rọ̀ ní onírúurú èdè — lílo rẹ̀ lè jẹ́ kí a pín àdírẹ́ẹ̀sì IP rẹ pẹ̀lú Google. Wo ìlànà ìpamọ́ àṣírí Google fún àlàyé síi.' },
        { q: 'Kí ni nípa ìpamọ́ àṣírí àwọn ọmọdé?', a: 'A kọ Common Sense Cyber fún àwọn òǹkàwé ní gbogbo ọjọ́ orí, àwọn ọmọdé pẹ̀lú, ṣùgbọ́n a kò mọ̀ọ́mọ̀ kó àlàyé ìdánimọ̀ ẹnikẹ́ni jọ. Gbogbo fọ́ọ̀mù jẹ́ àṣàyàn, a sì gba àwọn òbí tàbí olùtọ́jú níyànjú láti ṣàyẹ̀wò ìránṣẹ́ kankan kí ó tó jáde.' },
        { q: 'Ṣé ìmọ̀ràn ìjọba tàbí ti òfin ni èyí?', a: 'Rárá. Common Sense Cyber jẹ́ ohun èlò ìkọ́nilẹ́kọ̀ọ́ olómìnira, kò sì ní àjọṣepọ̀ pẹ̀lú ìjọba, báǹkì, tàbí àwọn agbófinró. Kò sí ohun kan lórí ojú-òpó yìí tí ó jẹ́ ìmọ̀ràn òfin, owó, tàbí ààbò aláṣẹ — ṣàyẹ̀wò ohunkóhun tí ó bá yára nípasẹ̀ àwọn ọ̀nà ìjọba tòótọ́ nígbà gbogbo. Àwọn ìjápọ̀ sí àwọn ojú-òpó mìíràn (bíi Have I Been Pwned tàbí àwọn ohun èlò ìjọba) ń darí rẹ sí àwọn àjọ olómìnira tí a kò ṣàkóso.' },
        { q: 'Ǹjẹ́ ìbéèrè kan wà nípa ojú-ìwé yìí?', a: 'Kàn sí wa nígbàkigbà ní contact@commonsensecyber.org.' }
      ]
    },
    footer: {
      tagline: 'Ààbò lórí Íńtánẹ́ẹ̀tì, tí a ṣàlàyé láìní ìdíjú.',
      disclaimer: 'Common Sense Cyber jẹ́ orísun ẹ̀kọ́ òmìnira tí a kò sì so mọ́ àjọ ìjọba, báǹkì, tàbí àjọ ìmúṣẹ òfin kankan. Nínú ìjàmbá, tàbí bí a bá ti fi owó ránṣẹ́ tẹ́lẹ̀, kàn sí báǹkì rẹ àti Ilé-iṣẹ́ Ìjà Ẹ̀tàn ti Kánádà lẹ́sẹ̀kẹsẹ̀.',
      copyright: '© {year} Common Sense Cyber. A fi ìtọ́jú kọ́ ọ.'
    }
  },
  ig: {
    meta: { name: 'Igbo', dir: 'ltr', minLabel: 'nkeji' },
    pageTitle: 'Common Sense Cyber — Nchekwa Kọmputa Dị Mfe',
    metaDescription: "Common Sense Cyber na-akụzi nchekwa ịntanetị kwa ụbọchị n'asụsụ dị mfe — maka ụmụaka, ndị okenye, na onye ọ bụla ọzọ. Enweghị okwu mgbagwoju anya, enweghị ikpe ọmụma.",
    skipLink: "Gaa n'ọdịnaya isi",
    logoAlt: 'Akara Common Sense Cyber — ihe oyiyi ọta na-amụ ọnụ ọchị',
    heroArtAlt: 'Foto ihe oyiyi Common Sense Cyber, ọta na-amụ ọnụ ọchị',
    footerLogoAlt: 'Akara Common Sense Cyber',
    nav: { basics: 'Mụta Isi Ihe', tracks: 'Ụmụaka na Ndị Okenye', story: 'Akụkọ Eziokwu', quiz: 'Ajụjụ Ọzụzụ', resources: 'Akụrụngwa', report: 'Nweta Enyemaka', faq: 'Ajụjụ A Na-ajụkarị', community: 'Kesaa Akụkọ Gị' },
    header: { textSize: 'Mee ka mkpụrụedemede buo ibu ka ọ dịrị mfe ịgụ', menuOpen: 'Meghee Menu', menuClose: 'Mechie Menu', lang: 'Họrọ Asụsụ' },
    brand: { tagline: "Nchekwa ịntanetị, akọwara n'ụzọ dị mfe" },
    hero: {
      eyebrow: 'Nchekwa ịntanetị nke efu na enyi',
      h1: 'Nchekwa kọmputa nke na-asụ asụsụ gị.',
      p: "Enweghị okwu mgbagwoju anya. Enweghị ikpe ọmụma. Naanị ndụmọdụ dị mfe na nke na-enye afọ ojuju, iji nyere gị aka ịmata aghụghọ, chebe akaụntụ gị, ma nọrọ n'enweghị nsogbu n'ịntanetị — ma ị dị afọ itoolu ma ọ bụ iri itoolu.",
      ctaPrimary: 'Malite Ịmụta Isi Ihe',
      ctaSecondary: 'Lee Otu Akụkọ Eziokwu',
      stat1: '6', stat1Label: "Isiokwu ndị a kọwara n'ụzọ dị mfe",
      stat2: '2', stat2Label: 'Ụzọ maka ụmụaka na ndị okenye',
      stat3: '5', stat3Label: 'Ajụjụ ọzụzụ ịmata aghụghọ'
    },
    mission: {
      eyebrow: 'Ihe mere anyị ji na-eme nke a',
      h2: "Onye ọ bụla kwesịrị inwe mmetụta nchekwa n'ịntanetị — na-achọghị agụmakwụkwọ kọmputa.",
      p: "Ọtụtụ ndụmọdụ nchekwa kọmputa ka e dere maka ndị ghọtaworị nchekwa kọmputa. Common Sense Cyber na-eme ka ọ dị iche. Anyị na-atụgharị ezi ihe ọmụma nchekwa gaa n'ndụmọdụ dị mfe, nke na-enye afọ ojuju, na-enweghị ikpe ọmụma, maka ndị chọrọ ya karịa: ụmụaka na-amalite iji ịntanetị, ndị okenye na-amụta teknụzụ ọhụrụ, na onye ọ bụla nke na-achọghị ịkọwapụta okwu mgbagwoju anya iji nọrọ n'enweghị nsogbu.",
      pillars: [
        { title: 'Asụsụ dị mfe', body: 'Enweghị nkụzi mkpụmkpụ, enweghị ụzọ iyi egwu — naanị nkọwa doro anya nke onye ọ bụla nwere ike ịghọta na oge mbụ.' },
        { title: 'Enweghị Ikpe Ọmụma', body: "Ịdaba n'ọnya aghụghọ apụtaghị na i mere ihe ọjọọ. Anyị na-elekwasị anya n'iwulite ntụkwasị obi, ọ bụghị ihere." },
        { title: 'Maka Afọ Ọ Bụla', body: 'Site na tablet mbụ nke nwata, ruo na smartphone mbụ nke nne/nna nna — ndụmọdụ e wuru dabere na ndụ ezi mmadụ, ọ bụghị maka ndị ọkachamara teknụzụ naanị.' }
      ]
    },
    basics: {
      eyebrow: 'Mụta Isi Ihe',
      h2: 'Ihe isii kwesịrị ịma — akọwapụtara na-enweghị okwu mgbagwoju anya.',
      p: 'Pịa isiokwu ọ bụla iji hụ ụfọdụ ndụmọdụ bara uru ị nwere ike iji taa.',
      seeTips: 'Lee ndụmọdụ ndị ahụ',
      tips: [
        { title: 'Ịchọpụta Ozi Aghụghọ', summary: 'Ozi na email e wuru iji mee ka ị tụọ ụjọ ma pịa ngwa ngwa.', points: [
          'Ụlọ ọrụ ezi mmadụ anaghị adịkarị amanye gị ngwa ngwa — ọsọ ọsọ bụ ihe ịrịba ama kachasị egwu.',
          "Nyochaa adreesị onye zitere ozi ahụ nke ọma, ọ bụghị naanị aha na-apụta ìhè.",
          "Ọ bụrụ na i nwere obi abụọ, jikọọ ya na ụlọ ọrụ ahụ site na nọmba ị tụkwasịworị obi tupu — ọ bụghị nke dị n'ime ozi ahụ."
        ]},
        { title: 'Nchekwa Paswọọdụ', summary: 'Omume dị mfe ole na ole na-egbochi ọtụtụ mbanye akaụntụ na-ezighị ezi.', points: [
          'Jiri ahịrịokwu nwere okwu atọ ruo anọ a họpụtara na-enweghị usoro kama paswọọdụ dị mkpụmkpụ na mgbagwoju anya.',
          'Ejila otu paswọọdụ eme ihe ugboro ugboro na saịtị dị iche iche.',
          'Meghee nkwenye nzọụkwụ abụọ ebe ọ bụla enyere ya — ọ bụ mmelite kachasị mma ị nwere ike ime.',
          "Ezigbo paswọọdụ ekwesịghị ịbụ ezi okwu, aha gị, ụbọchị ọmụmụ gị, ma ọ bụ aha anụ ụlọ gị — ndị a bụ ihe mbụ a ga-eche.",
          'Zere usoro a na-eburu n\'obi dị ka "123456", "password", ma ọ bụ usoro bọọdụ dị ka "qwerty".',
          "Ọ dịghị ezigbo ụlọ ọrụ ga-akpọ gị oku, ziga ozi, ma ọ bụ email arịọ ka ị kwuo paswọọdụ gị n'olu."
        ]},
        { title: 'Ịgụ Ọchụchọ Dị Nchebe', summary: 'Ihe ịrịba ama dị nta na-agwa gị ma saịtị (ma ọ bụ ịdọ aka ná ntị) ọ dị ntụkwasị obi.', points: [
          'Chọọ akara mkpọchi na "https" tupu i tinye ozi ọ bụla.',
          'Leghara pop-up ndị na-ekwu na ngwaọrụ gị nwere ọrịa vaịrọs — ezigbo sọftụwia nchekwa anaghị arụ ọrụ otu a.',
          'Na-emelite browser na ngwa gị mgbe niile; mmelite na-emekarị ka oghere nchekwa dịkwa mma.'
        ]},
        { title: 'Mgbasa Ozi na Nzuzo', summary: "Ihe ị na-ekekọrịta nwere ike ị mụta ị na ụzọ ga-eju gị anya.", points: [
          "Chee ihe ugboro abụọ tupu i tinye ụbọchị ọmụmụ gị, adreesị gị, ma ọ bụ atụmatụ njem gị.",
          'Nyochaa ntọala nzuzo gị kwa ọnwa ole na ole — ntọala izizi na-agbanwe.',
          "Kpachara anya ị na-anabata arịrịọ enyi site n'aka ndị ị na-amatakarị."
        ]},
        { title: 'Ichebe Ego Gị', summary: 'Otu esi amata aghụghọ ego tupu ọ wetara gị mfu.', points: [
          'Ọ dịghị ezigbo ụlọ akụ ma ọ bụ ụlọ ọrụ gọọmentị ga-arịọ ka a kwụọ ya ụgwọ site na kaadị onyinye ma ọ bụ krypto.',
          'Ị nwetara arịrịọ ego na-atụghị anya ya, ọbụna site n\'aka "ezinụlọ"? Kpọghachi ha oku site na nọmba i nwerelarị.',
          'Belata. Arịrịọ ziri ezi nwere ike ichere ruo mgbe ị lelịrị ya anya.'
        ]},
        { title: 'Wi-Fi na Ngwaọrụ', summary: 'Omume kwa ụbọchị na-echekwa ngwaọrụ gị.', points: [
          'Zere ịbanye paswọọdụ ma ọ bụ ozi ụlọ akụ na Wi-Fi ọha.',
          'Na-emelite sọftụwia ekwentị na kọmputa gị.',
          'Jiri PIN, paswọọdụ, ma ọ bụ mkpịsị aka kpọchie ngwaọrụ gị mgbe niile.'
        ]}
      ]
    },
    tracks: {
      eyebrow: 'E Mere Maka Gị',
      h2: 'Ndụmọdụ kwadoro ebe ị malitere.',
      kids: { badge: 'Maka Ndị Nyocha Obere', title: 'Maka Ndị Nyocha Obere', body: "Iwu dị mfe maka ụmụaka na ntorobịa na-amalite ịmara ịntanetị.", points: [
        "Paswọọdụ gị bụ nke gị naanị — ekekọrịtala ya, ọbụna na ndị enyi gị.",
        "Chekwaa ezi aha gị, ụlọ akwụkwọ, na adreesị gị na nzuzo n'ịntanetị.",
        "Ọ bụrụ na ihe ọ bụla dị n'ịntanetị dị egwu ma ọ bụ mgbagwoju anya, gwa okenye ị tụkwasịrị obi. Ị gaghị anọ na nsogbu.",
        "Nwee obiọma — otu iwu maka ịkwadebe mmadụ n'ihu ka na-arụ ọrụ n'ịntanetị."
      ], cta: 'Lee ndụmọdụ ndị ọzọ' },
      seniors: { badge: 'Maka Ndị Ọkachamara Ịntanetị', title: 'Maka Ndị Ọkachamara Ịntanetị', body: "Ndụmọdụ na-eme ka obi ruo ala na nke bara uru — n'ihi na ndị aghụghọ na-elekwasị anya na ndị mara ihe kwa ụbọchị.", points: [
        "Ọ bụghị nsọpụrụ efu ịkwụsị oku, belata, ma ọ bụ jụọ ajụjụ tupu ime ihe ọ bụla.",
        '"Onye ezinụlọ" na-arịọ ego ọsọ ọsọ? Kpọghachi ha oku site na nọmba i nwerelarị.',
        'Ọ dịghị ezigbo ụlọ akụ, ụlọ ọrụ, ma ọ bụ ụlọ ọrụ ga-arịọ ka i jiri kaadị onyinye kwụọ ụgwọ.',
        'Ịnata ozi mgbagwoju anya apụtaghị na ị dara azụ — ọ pụtara na mmadụ na-agbalị ịghọgbu gị.'
      ], cta: 'Lee ndụmọdụ ndị ọzọ' }
    },
    anatomy: {
      eyebrow: 'Usoro dị n\'azụ ụjọ',
      h2: 'Nyocha Oku Aghụghọ',
      p: 'Ihe fọrọ nke nta ka ọ bụrụ aghụghọ ekwentị ma ọ bụ ozi ọ bụla na-eso otu usoro anọ ahụ. Ozugbo ị nwere ike ịchọpụta usoro ahụ, ọ ga-adị mfe ịchọpụta aghụghọ ahụ.',
      steps: [
        { title: 'Ịkụ Ọnya', body: 'Oku ma ọ bụ ozi na-ewulite ihe mberede ụgha — na-emekarị ka ọ dị ka onye ị hụrụ n\'anya.' },
        { title: 'Ọsọ Ọsọ', body: '"Ị ga-eme ihe ugbu a" — ndị aghụghọ anaghị enye gị oge iche echiche ma ọ bụ nyochaa.' },
        { title: 'Nzuzo', body: '"Biko agwala onye ọ bụla" — nke a na-egbochi ndị nwere ike ịchọpụta aghụghọ ahụ.' },
        { title: 'Arịrịọ', body: 'Arịrịọ maka ego, kaadị onyinye, ma ọ bụ ozi akaụntụ — ezigbo ebumnobi oku ahụ.' }
      ],
      calloutStrong: 'Ị nwere ike imebi usoro a n\'oge ọ bụla.',
      calloutBody: 'Kwụsị oku ahụ, kpọghachi onye ahụ oku site na nọmba i nwerelarị, ma were oge gị — ihe mberede ezi mmadụ nwere ike ichere nkeji ise.'
    },
    story: {
      eyebrow: 'Akụkọ Eziokwu',
      h2: 'Otu ezigbo oku aghụghọ si ada.',
      p: 'Oku aghụghọ na-arụ ọrụ n\'ihi na ha na-ewulite ụjọ na ọsọ ọsọ — "onye ezinụlọ" nọ na nsogbu, chọrọ enyemaka ozugbo, na-arịọ ka ị debe ya na nzuzo. Vidio ndị a dị mkpụmkpụ na-egosi otu aghụghọ ahụ si eme na ihe ị kwesịrị ige ntị na ya.',
      videoFallback: 'Ihe nchọgharị gị anaghị akwado vidio etinyere na ya.',
      videoDownload: 'Budata Vidio',
      items: [
        { title: 'Oku "Nwa Nwa Nọ Na Nsogbu"', body: 'Ngosipụta nke oku aghụghọ nna/nne nna a ma ama, na-egosi otu onye aghụghọ si ewulite ụjọ na ọsọ ọsọ na sekọnd mbụ ole na ole.', quote: '"Ọ bụrụ na oku ọ bụla arịọ ka i mee ihe ozugbo ma gbachie nkịtị, nzuzo ahụ n\'onwe ya bụ ihe ịrịba ama kachasị egwu."', videoLabel: 'Vidio na-egosi oku aghụghọ nna/nne nna' },
        { title: 'Otu Aghụghọ Nna/Nne Nna Si Elekwasị Ndị Okenye Anya N\'ezie', body: 'Akụkọ na-egosi otu aghụghọ ndị a si arụ ọrụ n\'ọtụtụ ebe, na ihe mere ha ji arụ ọrụ nke ọma ọbụna n\'ebe ndị mmadụ maara ihe ma na-akpachara anya nọ.', quote: '"E ji e mepụta oku ndị a ka ọ dị gị ka enweghị oge ịnyocha — mmetụta ahụ n\'onwe ya bụ ihe ịrịba ama."', videoLabel: 'Akụkọ banyere aghụghọ nna/nne nna na-elekwasị ndị okenye anya' },
        { title: 'Mgbe "Enyi" Ị Hụrụ N\'Ịntanetị Ghọrọ Onye Mmanye Ego', body: 'Akụkọ na-akọwa aghụghọ mmanye ego site n\'ihe ihere (sextortion), ebe onye ọbịa na-eme ka ọ bụrụ enyi n\'ịntanetị, wee mesịa yie egwu ikesa foto nzuzo ma ọ bụrụ na onye a na-achọ ịghọgbu akwụghị ego ma ọ bụ ezinye foto ọzọ. Ọ na-elekwasị ụmụaka na ndị na-eto eto anya karịa ka ọtụtụ ndị nne na nna chere.', quote: '"Foto ahụ abụghị ihe mberede ozugbo — ịgwa onye okenye tụkwasịrị obi ozugbo bụ ihe mkpa. Ọ dịghị onye ga-abanye na nsogbu, ụzọ dịkwa iji wepụ foto ndị ahụ."', videoLabel: 'Akụkọ banyere aghụghọ mmanye ego site n\'ihe ihere na-elekwasị ụmụaka na ndị na-eto eto anya n\'ịntanetị' },
        { title: '"Ihe Efu" Ndị Na-abụghị Efu N\'ezie', body: 'Akụkọ na-egosi otu ndị aghụghọ si elekwasị ụmụaka anya n\'ime egwuregwu ịntanetị na ngwa mkparịta ụka, na-eji ihe onyinye adịgboroja, ihe "efu", na njikọ mgbanwe ahịa a tụrụ atụ izu ohi akaụntụ na ozi ịkwụ ụgwọ.', quote: '"Ọ bụrụ na mgbanwe ahịa ma ọ bụ onyinye n\'ime egwuregwu dị ka ihe dị mma karịa ka ọ ga-esi dị, ọ na-abụkarị otu a — ezigbo onyinye anaghị ajụ paswọdụ gị mbụ."', videoLabel: 'Akụkọ banyere aghụghọ na-elekwasị ụmụaka anya n\'egwuregwu ịntanetị' }
      ]
    },
    resources: {
      eyebrow: 'Nọgide Na-amata Ihe',
      h2: 'Ebe ị ga-enyocha aghụghọ a maara na ọkwa mgbaama aghụghọ.',
      p: 'Ndị otu a a pụrụ ịtụkwasị obi na-eso aghụghọ ndị na-arụ ọrụ, na-ebipụta ọkwa mgbaama, ma na-anabata mkpesa — chekwaa ole na ole ma nyochaa mgbe ọ bụla ihe na-adị gị ka ọ dịghị mma.',
      groups: [
        { title: 'Canada', items: [
          { title: 'Ụlọ Ọrụ Ọgụ Aghụghọ nke Canada', body: 'Ụlọ ọrụ mba Canada maka ịkpesa aghụghọ na wayo — nyochaa ọkwa mgbaama aghụghọ ugbu a ma kpesaa.' },
          { title: 'Ụlọ Ọrụ Nchekwa Cyber nke Canada', body: 'Ndụmọdụ Gọọmentị Canada gbasara ozi aghụghọ, malware, na nchekwa ịntanetị.' },
          { title: 'Get Cyber Safe', body: 'Mkpọsa nghọta mba nwere ndụmọdụ n\'asụsụ dị mfe na ọkwa mgbaama ihe egwu ugbu a.' },
          { title: 'Ụlọ Ọrụ Asọmpi nke Canada', body: 'Na-eso ịzụ ahịa aghụghọ na aghụghọ ndị ahịa, ya na ndepụta aghụghọ amara nke a pụrụ ịchọ.' }
        ]},
        { title: 'Ụwa Niile', items: [
          { title: 'FTC Consumer Advice (United States)', body: 'Ọkwa mgbaama aghụghọ ahịa, nduzi, na ngwaọrụ mkpesa nke Federal Trade Commission US.' },
          { title: 'Action Fraud (United Kingdom)', body: 'Ụlọ ọrụ mba UK maka ịkpesa aghụghọ na mpụ cyber.' },
          { title: 'FBI Internet Crime Complaint Center (IC3)', body: 'Na-eso ma na-enyocha mpụ ịntanetị a kpesara na United States.' }
        ]},
        { title: 'Aghụghọ Cyber na Nke Ịntanetị', items: [
          { title: 'Anti-Phishing Working Group', body: 'Na-eso ọdịdị ozi aghụghọ na weebụsaịtị ụgha n\'ụwa niile; ebe a pụrụ ịkpesa saịtị a na-enyo enyo.' },
          { title: 'Google Safe Browsing', body: 'Nyochaa ma ọ bụrụ na e limara weebụsaịtị dị ka nke na-adịghị nchebe ma ọ bụ na-eduhie mmadụ.' },
          { title: 'Canadian Securities Administrators (CSA)', body: 'Akụrụngwa nchekwa ndị na-etinye ego iji chọpụta aghụghọ ntinye ego na krypto.' }
        ]}
      ]
    },
    quiz: {
      eyebrow: 'Nwaa Amamihe Aghụghọ Gị',
      h2: 'Ị chere na ị nwere ike ịchọpụta aghụghọ? Nwaa ya.',
      p: 'Ọnọdụ ndụ ise dị mfe. Ọ dịghị akara dị njọ — ajụjụ ọ bụla na-eme ka ị dịkwuo nchekwa.',
      questionOf: 'Ajụjụ {n} nke {total}',
      answerGroupLabel: 'Nhọrọ Azịza',
      nextLabel: 'Ajụjụ Ọzọ',
      resultsLabel: 'Lee Nsonaazụ M',
      resultTitle: 'Ị nwetara {score} n\'ime {total}!',
      resultBody: 'Ajụjụ ọ bụla i chere echiche na ya na-eme ka ọ sie ike ịghọgbu gị. Kesaa ajụjụ ọzụzụ a na onye ị hụrụ n\'anya — karịsịa onye ọhụrụ na ịmata aghụghọ.',
      retryLabel: 'Nwaa Ọzọ',
      questions: [
        { q: 'Ị na-enweta ozi si na nọmba a na-amaghị: "Anyị enweghị ike ibunye ngwongwo gị, pịa ebe a iji hazie ọzọ." Kedu ihe kacha nchebe ime?',
          options: ['Pịa njikọ ahụ ozugbo ka m ghara ịtụfu ngwongwo m', 'Nyochaa nsochi ozugbo n\'saịtị ma ọ bụ ngwa ọfịshịal nke ahịa ahụ', 'Zaghachi "STOP" iji kwụsị ndebanye aha'],
          correct: 1,
          why: { correct: "Ziri ezi — ide adreesị ezi ahịa ahụ n'onwe gị pụtara na njikọ ụgha agaghị enwe ike ịghọgbu gị.", incorrect: "Nchebe karịa: zere njikọ ahụ kpamkpam ma nyochaa nsochi na saịtị ma ọ bụ ngwa ezigbo ahịa ahụ." } },
        { q: '"Nwa nwa gị" kpọrọ oku na-ekwu na ha nọ na nsogbu ma chọrọ ka e ziga ha ego ozugbo — ma rịọ ka ị debe ya na nzuzo. Kedu ihe kacha nchebe ime?',
          options: ['Ziga ego ahụ ozugbo, nítorí ọ dị ka ọ dị mkpa', 'Kwụsị oku ahụ ma kpọghachi nwa nwa gị oku site na nọmba i nwerelarị maka ha', 'Jụọ ha ajụjụ nkeonwe ha na ekwentị iji nyochaa'],
          correct: 1,
          why: { correct: 'Ịkpọghachi oku na nọmba ị tụkwasịworị obi bụ ụzọ kacha nchebe iji kwado onye ị na-ekwu okwu na ya n\'ezie.', incorrect: 'Olu nwere ike ịda ka ezi olu na ekwentị karịa ka a tụrụ anya. Ọ ka mma ịkwụsị oku ahụ ma kpọọ nọmba i nwerelarị maka onye ahụ.' } },
        { q: 'Ímeèlì kwuru: "A ga-akwụsị akaụntụ gị n\'ime awa 24 — nyochaa paswọọdụ gị ugbu a," tinyere akara uhie ukwu dị mkpa. Kedu ihe kacha nchebe ime?',
          options: ['Pịa njikọ ahụ ozugbo iji nọrọ na nchekwa', 'Gaa na weebụsaịtị ọfịshịal site n\'ide adreesị ahụ n\'onwe gị'],
          correct: 1,
          why: { correct: 'Ọsọ ọsọ bụ ụzọ aghụghọ a ma ama. Ide adreesị ahụ n\'onwe gị na-eme ka ị na-erute na ezigbo saịtị mgbe niile.', incorrect: 'Dee ezi adreesị ụlọ ọrụ ahụ n\'onwe gị kama ịpị njikọ dị na email ahụ — olu ọsọ ọsọ bụ ihe ịrịba ama.' } },
        { q: 'Pọp-ọpụ kwuru: "Achọtara vaịrọs! Kpọọ nọmba a ugbu a maka enyemaka." Gịnị ka ị kwesịrị ime?',
          options: ['Kpọọ nọmba ahụ, ọ na-adị ka ọfịshịal', 'Mechie pọp-ọpụ ahụ (ma ọ bụ malitegharịa ihe nchọgharị) ma leghara ya anya'],
          correct: 1,
          why: { correct: 'Ziri ezi — ezigbo sọftụwia nchekwa anaghị arịọ ka ị kpọọ nọmba ekwentị.', incorrect: 'Ezigbo ịdọ aka ná ntị nchekwa anaghị arịọ ka ị kpọọ nọmba ekwentị. Mechie pọp-ọpụ ahụ ma gaa n\'ihu.' } },
        { q: 'Onye ị ka na-amata n\'ịntanetị rịọrọ adreesị ụlọ gị na aha gị zuru oke "naanị ka anyị bụrụ enyi." Kedu ihe kacha nchebe ime?',
          options: ['Kekọrịta ya, ọ na-adị ka ezigbo mmadụ', 'Debe ozi nkeonwe gị na nzuzo ma gwa okenye ma ọ bụ enyi ị tụkwasịrị obi banyere arịrịọ ahụ'],
          correct: 1,
          why: { correct: 'I mere nke ọma — idebe ozi nkeonwe gị na nzuzo na ịgwa onye ị tụkwasịrị obi bụ nhọrọ kacha nchebe mgbe niile.', incorrect: 'Ọ ka mma idebe ozi nkeonwe gị na nzuzo, ọbụna na ndị dị ka ndị enyi, ma gwa onye ị tụkwasịrị obi.' } }
      ]
    },
    report: {
      eyebrow: 'Nweta Enyemaka',
      h2: 'Ị chere na ị chọtala aghụghọ — ma ọ bụ na e mere gị ihe?',
      p: 'Ị nọghị naanị gị, ọ bụghịkwa mgbe ochie ime ihe. Nke a bụ ebe ị nwere ike ịgba aka.',
      resourcesTitle: 'Ebe a pụrụ ịtụkwasị obi ikpesa',
      resources: [
        { title: 'Ụlọ Ọrụ Ọgụ Aghụghọ nke Canada', body: '1-888-495-8501 — kpesaa aghụghọ ma nweta ndụmọdụ, n\'efu na na nzuzo.' },
        { title: 'Ụlọ akụ gị ma ọ bụ onye na-enye kaadị', body: 'Kpọọ nọmba e depụtara na kaadị gị ma ọ bụ akwụkwọ akụkọ gị — ọ bụghị nọmba onye kpọrọ gị nyere gị.' },
        { title: 'Onye ezinụlọ ma ọ bụ enyi ị tụkwasịrị obi', body: 'Ịgwa onye ị tụkwasịrị obi okwu banyere ya bụ ụzọ mbụ mara ihe mgbe niile.' }
      ],
      formTitle: 'Jụọ Anyị Ajụjụ',
      formNote: "A na-eziga ozi gị ozugbo nye anyị — ọ dịghị mkpa ngwa email ọ bụla.",
      nameLabel: 'Aha Gị', emailLabel: 'Adreesị Email', messageLabel: 'Gịnị mere?',
      submitLabel: 'Ziga Ozi M',
      successMsg: 'Na-eziga ozi gị…',
      errorMsg: 'Ihe adịghị mma mere. Biko nwaa ọzọ, ma ọ bụ zigara anyị email ozugbo na contact@commonsensecyber.org.'
    },
    faq: {
      eyebrow: 'Ajụjụ', h2: 'Ajụjụ A Na-ajụkarị',
      items: [
        { q: 'Common Sense Cyber ọ bụ ụlọ ọrụ gọọmentị?', a: 'Mba. Anyị bụ ihe mmata nghọta nnwere onwe, anyị anaghị ejikọta ya na ụlọ ọrụ gọọmentị, ụlọ akụ, ma ọ bụ ọrụ ndị uwe ojii ọ bụla. Anyị na-ekekọrịta ndụmọdụ mmụta izugbe — mgbe niile nyochaa ihe ọ bụla dị mkpa site n\'ụzọ gọọmentị.' },
        { q: 'Echere m na m dabarala n\'ọnya aghụghọ tẹ́lẹ̀. Kedu ihe m kwesịrị ibu ụzọ mee?', a: 'Kpọtụrụ ụlọ akụ gị ma ọ bụ onye na-enye kaadị gị ozugbo site na nọmba dị na kaadị gị, mgbe ahụ jikọọ na Ụlọ Ọrụ Ọgụ Aghụghọ nke Canada. Ime ngwa ngwa nwere ike ịbịawetara ezigbo mgbanwe — ọ dịghịkwa ihere ọ bụla ịrịọ enyemaka.' },
        { q: 'Ọ dị mkpa ka m mara teknụzụ nke ọma iji jiri weebụsaịtị a?', a: 'Mba, ma ọ dịghị mkpa ma ọlị — nke ahụ kpamkpam bụ ntụpọ. E dere nduzi ọ bụla ebe a n\'asụsụ dị mfe, na-echeghị na ị nwere ihe ọmụma teknụzụ ọ bụla.' },
        { q: 'Enwere m ike ịkekọrịta weebụsaịtị a na ezinụlọ m?', a: 'Biko mee nke ahụ! Common Sense Cyber bụ n\'efu iji ya na ịkekọrịta ya — karịsịa na ndị nyocha obere na ndị ọkachamara ịntanetị nọ na ndụ gị.' }
      ]
    },
    community: {
      eyebrow: 'Akụkọ Obodo',
      h2: 'Ihe dị ka nke a o meela gị mbụ?',
      p: 'Ezi ahụmahụ na-enyere ndị ọbịa ọzọ aka ịmata otu ihe ịrịba ama ahụ. A na-enyocha akụkọ ọ bụla tupu ebipụta ya, ị nwekwara ike ịnọrọ na nzuzo.',
      emptyTitle: 'Enweghị akụkọ ugbu a',
      emptyBody: 'Bụrụ onye mbụ kesaa nke gị — ahụmahụ gị nwere ike inyere onye ọzọ aka ịmata otu aghụghọ ahụ.',
      anonymousName: 'Onye na-ekpughị aha',
      formTitle: 'Kesaa Akụkọ Gị',
      formNote: "A na-eziga akụkọ gị ozugbo nye anyị. Ọ dịghị ihe na-ebipụta onwe ya — ezigbo mmadụ na-enyocha akụkọ ọ bụla tupu ọ pụta na saịtị a.",
      nameLabel: 'Aha gị (ọ bụghị mkpa)', anonymousLabel: 'Bipụta nke a na-ekpughị aha', storyLabel: 'Gịnị mere?',
      emailLabel: 'Email gị (nzuzo — a na-eji ya naanị mgbe anyị nwere ajụjụ nleba anya, a gaghị ebipụta ya)',
      consentLabel: 'Ọ dị mma ka a nyocha akụkọ a ma kesaa ya na saịtị a.',
      submitLabel: 'Ziga Akụkọ M',
      successMsg: 'Na-eziga akụkọ gị…',
      errorMsg: 'Ihe adịghị mma mere. Biko nwaa ọzọ, ma ọ bụ zigara anyị email ozugbo na contact@commonsensecyber.org.'
    },
    legal: {
      h2: 'Nzuzo na Usoro',
      p: "Otu anyị si eji ozi na saịtị a mee ihe, n'ụzọ dị mfe.",
      items: [
        { q: 'Kedu ozi ndị unu na-anakọta?', a: "Fọm \"Nweta Enyemaka\" na \"Kesaa Akụkọ Gị\" na-eziga ozi gị ozugbo nye anyị site na ọrụ email azụmahịa (Resend) — anyị anaghị eji ọbá data ọ bụla arụ ọrụ, ya mere ọ dịghị ihe a na-echekwa karịa email ahụ. A na-ebipụta akụkọ obodo naanị mgbe ezigbo mmadụ nyocharala ha, ị nwekwara ike ịrịọ ka edezie, kpuchie aha, ma ọ bụ wepụ akụkọ gị mgbe ọ bụla. Lelee amụma nzuzo Resend maka otu ha si eji nziga ozi eme ihe." },
        { q: 'Kedu ihe unu na-echekwa na ngwaọrụ m?', a: "Naanị mmasị abụọ dị nta, echekwara na nchekwa mpaghara nchọgharị gị: asụsụ ị họọrọ na ọnụ ọgụgụ mkpụrụedemede. Ha abụọ na-anọgide na ngwaọrụ gị, a naghị ezigara anyị ha ma ọlị." },
        { q: 'Ọ bụ na unu na-eji kuki, nleba anya, ma ọ bụ nyocha?', a: "Enweghị kuki mgbasa ozi, script nleba anya, ma ọ bụ nyocha nke ọ bụla. Naanị ihe dị iche bụ Google Fonts, nke a na-eji egosi ederede n'asụsụ dị iche iche — ibu ya nwere ike ikesa adreesị IP gị na Google. Lelee amụma nzuzo Google maka nkọwa ndị ọzọ." },
        { q: 'Gịnị banyere nzuzo ụmụaka?', a: 'E dere Common Sense Cyber maka ndị na-agụ agụmagụ n\'agbụrụ ọ bụla, gụnyere ụmụaka, mana anyị anaghị amata ama anakọta ozi nkeonwe onye ọ bụla. Fọm ọ bụla bụ nhọrọ, anyị na-akwado ka nne na nna ma ọ bụ onye nlekọta nyochaa ozi ọ bụla tupu ezipụ ya.' },
        { q: "Ọ bụ ndụmọdụ gọọmentị ma ọ bụ nke iwu n'ezie?", a: "Mba. Common Sense Cyber bụ akụrụngwa mmụta nwere onwe ya, ọ dịghị ejikọta ya na ụlọ ọrụ gọọmentị ọ bụla, ụlọ akụ, ma ọ bụ ndị mmanye iwu. Ọ dịghị ihe dị na saịtị a bụ ndụmọdụ iwu, ego, ma ọ bụ nchekwa ọkachamara — jirikwa ụzọ gọọmentị kwadoro nyochaa ihe ọ bụla mkpa ozugbo. Njikọ ndị na-eduga na saịtị ndị ọzọ (dịka Have I Been Pwned ma ọ bụ akụrụngwa gọọmentị) na-eduga gị na ụlọ ọrụ nwere onwe ha nke anyị na-adịghị achịkwa." },
        { q: 'Ị nwere ajụjụ gbasara peeji a?', a: 'Kpọtụrụ anyị mgbe ọ bụla na contact@commonsensecyber.org.' }
      ]
    },
    footer: {
      tagline: "Nchekwa ịntanetị, akọwara n'ụzọ dị mfe.",
      disclaimer: 'Common Sense Cyber bụ ihe mmata mmụta nnwere onwe, anyị anaghị ejikọta ya na ụlọ ọrụ gọọmentị, ụlọ akụ, ma ọ bụ ndị na-emezi iwu ọ bụla. Ná ihe mberede, ma ọ bụ ọ bụrụ na ezigawo ego, jikọọ na ụlọ akụ gị na Ụlọ Ọrụ Ọgụ Aghụghọ nke Canada ozugbo.',
      copyright: '© {year} Common Sense Cyber. E ji nlekọta wuo ya.'
    }
  },
  ha: {
    meta: { name: 'Hausa', dir: 'ltr', minLabel: 'min' },
    pageTitle: 'Common Sense Cyber — Tsaron Sarari na Dijital Mai Sauƙi',
    metaDescription: 'Common Sense Cyber yana koyar da tsaron intanet na yau da kullum cikin harshe mai sauƙi — domin yara, manya, da kowa a tsakani. Babu kalmomin fasaha masu wuya, babu zargi.',
    skipLink: 'Tafi zuwa babban abun ciki',
    logoAlt: 'Alamar Common Sense Cyber — abin rufe fuska na garkuwa mai murmushi',
    heroArtAlt: 'Hoton abin rufe fuska na Common Sense Cyber, garkuwa mai murmushi',
    footerLogoAlt: 'Alamar Common Sense Cyber',
    nav: { basics: 'Koyi Asali', tracks: 'Yara da Manya', story: 'Labaran Gaskiya', quiz: 'Jarabawa', resources: 'Albarkatu', report: 'Nemi Taimako', faq: 'Tambayoyin da Ake Yawan Yi', community: 'Raba Labarinka' },
    header: { textSize: 'Ƙara girman rubutu don sauƙin karatu', menuOpen: 'Buɗe Menu', menuClose: 'Rufe Menu', lang: 'Zaɓi Harshe' },
    brand: { tagline: 'Tsaron intanet, an bayyana shi cikin sauƙi' },
    hero: {
      eyebrow: 'Tsaron intanet kyauta kuma na abokantaka',
      h1: 'Tsaron sarari na dijital wanda ke magana da harshenka.',
      p: 'Babu kalmomin fasaha masu wuya. Babu zargi. Kawai jagora mai sauƙi da ɗumi, don taimaka maka gano zamba, kare asusunka, da kasancewa lafiya a intanet — ko kana da shekara 9 ko 90.',
      ctaPrimary: 'Fara Koyon Asali',
      ctaSecondary: 'Kalli Labarin Gaskiya',
      stat1: '6', stat1Label: 'Batutuwa da aka bayyana cikin sauƙi',
      stat2: '2', stat2Label: 'Hanyoyi don yara da manya',
      stat3: '5', stat3Label: 'Jarabawar gane zamba'
    },
    mission: {
      eyebrow: 'Dalilin da ya sa muke wannan',
      h2: 'Kowa ya cancanci jin lafiya a intanet — ba tare da bukatar digiri na fasaha ba.',
      p: 'Yawancin shawarwarin tsaron sarari na dijital an rubuta su ne don mutanen da suka riga suka fahimci tsaron sarari na dijital. Common Sense Cyber ya juya wannan. Muna fassara ainihin ilimin tsaro zuwa jagora mai sauƙi, mai ɗumi, kuma marar zargi, ga mutanen da suka fi bukatarsa: yara da suke fara amfani da intanet, tsofaffi da suke koyon sabuwar fasaha, da duk wanda ya fi son kada ya ɓata lokaci wajen fahimtar kalmomin fasaha don ya kasance lafiya.',
      pillars: [
        { title: 'Harshe Mai Sauƙi', body: 'Babu gajerun kalmomi masu wuya, babu dabarun tsoratarwa — kawai bayani bayyananne wanda kowa zai iya fahimta a karo na farko.' },
        { title: 'Babu Zargi', body: 'Fadawa cikin zamba ba yana nufin ka yi wani abu ba daidai ba. Muna maida hankali kan gina ƙarfin gwiwa, ba kunya ba.' },
        { title: 'Domin Kowane Shekaru', body: 'Daga tablet na farko na yaro, zuwa wayar hannu ta farko ta kaka ko kakan — jagora da aka gina bisa rayuwa ta gaske, ba don ƙwararrun fasaha kaɗai ba.' }
      ]
    },
    basics: {
      eyebrow: 'Koyi Asali',
      h2: 'Abubuwa shida da suka cancanci sani — an bayyana su ba tare da kalmomin fasaha masu wuya ba.',
      p: 'Danna kowane batu don ganin wasu shawarwari masu amfani da za ka iya amfani da su yau.',
      seeTips: 'Duba shawarwarin',
      tips: [
        { title: 'Gane Saƙonnin Zamba', summary: 'Saƙonnin rubutu da imel da aka tsara don sa ka firgita ka danna da sauri.', points: [
          'Kamfanoni na gaskiya ba safai suke gaggauta maka ba — gaggawa ita ce babbar alamar haɗari.',
          'Duba adireshin mai aikawa da kyau, ba sunan da ke bayyana kawai ba.',
          'Idan kana da shakka, tuntuɓi kamfanin ta lambar da ka riga ka amince da ita — ba wadda ke cikin saƙon ba.'
        ]},
        { title: 'Tsaron Kalmar Sirri', summary: 'Halaye ƙanana kaɗan suna hana yawancin satar asusu.', points: [
          'Yi amfani da jimlar kalmomi uku zuwa huɗu da aka zaɓa ba tare da tsari ba maimakon gajeriyar kalmar sirri mai wahala.',
          'Kada ka sake amfani da kalmar sirri iri ɗaya a shafuka daban-daban.',
          'Kunna tabbatarwa mataki-biyu duk inda ake bayarwa — shi ne mafi kyawun ci gaba da za ka iya yi.',
          'Kyakkyawar kalmar sirri bai kamata ta taɓa zama ainihin kalma, sunanka, ranar haihuwarka, ko sunan dabbar gidanka ba — waɗannan su ne abin da za a fara tsammani.',
          'Ka guji tsari mai sauƙin tsinkaya kamar "123456", "password", ko jerin madannai kamar "qwerty".',
          'Babu wani kamfani na gaskiya da zai taɓa kiran ka, aika maka saƙo, ko imel yana neman ka faɗi kalmar sirrinka da baki.'
        ]},
        { title: 'Bincike Mai Aminci', summary: 'Alamomi ƙanana suna gaya maka ko wani shafi (ko gargaɗi) abin dogaro ne.', points: [
          'Nemi alamar kulle da "https" kafin ka shigar da kowace bayani.',
          'Ka yi watsi da tsallake-tsallaken da ke cewa na\'urarka tana da ƙwayar cuta — ainihin software na tsaro ba ya aiki haka.',
          'Ci gaba da sabunta burauzarka da manhajoji; sabuntawa sau da yawa suna gyara ramukan tsaro.'
        ]},
        { title: 'Kafofin Sada Zumunta da Sirri', summary: 'Abin da ka raba za a iya amfani da shi a kanka ta hanyoyin ban mamaki.', points: [
          'Yi tunani sau biyu kafin ka buga ranar haihuwarka, adireshinka, ko shirin tafiyarka.',
          'Bincika saitunan sirrinka kowane \'yan watanni — saitunan tsoho suna canzawa.',
          'Yi taka tsantsan wajen karɓar buƙatun abokantaka daga mutanen da ba ka sansu da gaske ba.'
        ]},
        { title: 'Kare Kuɗinka', summary: 'Yadda za a gane zamba ta kuɗi kafin ta cutar da kai.', points: [
          'Babu wata ainihin banki ko hukumar gwamnati da za ta taɓa neman biya ta katin kyauta ko kuɗin dijital.',
          'Ka samu buƙatar kuɗi da ba a zata ba, ko da daga "dan gida"? Ka sake kiransa a lambar da ka riga ka mallaka.',
          'Ka ɗauki lokaci. Buƙata ta gaskiya koyaushe za ta iya jira har sai ka tabbatar.'
        ]},
        { title: 'Wi-Fi da Na\'urori', summary: 'Halaye na yau da kullum da ke kiyaye na\'urorinka lafiya.', points: [
          'Ka guji shigar da kalmar sirri ko bayanan banki a Wi-Fi na jama\'a.',
          'Ci gaba da sabunta software na wayarka da kwamfutarka.',
          'Kulle na\'urorinka koyaushe da lambar sirri, PIN, ko yatsan hannu.'
        ]}
      ]
    },
    tracks: {
      eyebrow: 'An Yi Domin Kai',
      h2: 'Jagora da aka daidaita da inda ka fara.',
      kids: { badge: 'Domin Ƙananan Masu Bincike', title: 'Domin Ƙananan Masu Bincike', body: 'Ƙa\'idodi masu sauƙi domin yara da matasa da suke fara saba da intanet.', points: [
        'Kalmar sirrinka naka ne kaɗai — kada ka raba ta, ko da da abokanka.',
        'Ka ɓoye ainihin sunanka, makarantarka, da adireshinka a intanet.',
        'Idan wani abu a intanet ya ji baƙon abu ko mai ban tsoro, faɗa wa babba da ka amince da shi. Ba za ka shiga matsala ba.',
        'Ka kasance mai kirki — dokokin nuna kyautatawa a zahiri suna aiki a intanet ma.'
      ], cta: 'Duba ƙarin shawarwari' },
      seniors: { badge: 'Domin Ƙwararrun Masu Amfani da Yanar Gizo', title: 'Domin Ƙwararrun Masu Amfani da Yanar Gizo', body: 'Jagora mai kwantar da hankali kuma mai amfani — domin masu zamba suna hari ga mutane masu hankali kowace rana.', points: [
        'Ba abin kunya ba ne ka rufe waya, ka jinkirta, ko ka yi tambayoyi kafin ka yi wani abu.',
        '"Dan gida" yana neman kuɗi cikin gaggawa? Ka sake kiransa a lambar da ka riga ka mallaka.',
        'Babu ainihin banki, hukuma, ko kamfani da zai nemi ka biya da katin kyauta.',
        'Samun saƙo mai wahala ba yana nufin ka faɗi baya ba — yana nufin wani yana ƙoƙarin yaudarar ka.'
      ], cta: 'Duba ƙarin shawarwari' }
    },
    anatomy: {
      eyebrow: 'Tsarin da ke bayan firgici',
      h2: 'Tsarin Kiran Zamba',
      p: 'Kusan kowace zamba ta waya ko saƙon rubutu tana bin matakai huɗu iri ɗaya. Da zarar ka iya gane tsarin, zai fi sauƙi ka gane zambar.',
      steps: [
        { title: 'Ƙugiya', body: 'Kira ko saƙo yana ƙirƙirar gaggawa ta ƙarya — sau da yawa yana kwaikwayon wani da kake ƙauna.' },
        { title: 'Gaggawa', body: '"Dole ne ka yi wani abu yanzu" — masu zamba ba sa baka lokacin yin tunani ko tabbatarwa.' },
        { title: 'Sirri', body: '"Don Allah kada ka faɗa wa kowa" — wannan yana yanke mutanen da za su iya gano zambar.' },
        { title: 'Buƙata', body: 'Buƙatar kuɗi, katin kyauta, ko bayanan asusu — ainihin manufar kiran.' }
      ],
      calloutStrong: 'Za ka iya karya tsarin a kowane mataki.',
      calloutBody: 'Ka rufe waya, ka sake kiran mutumin a lambar da ka riga ka mallaka, ka ɗauki lokacinka — ainihin gaggawa za ta iya jira mintuna biyar.'
    },
    story: {
      eyebrow: 'Labaran Gaskiya',
      h2: 'Yadda ainihin kiran zamba ke ji a zahiri.',
      p: 'Kiran zamba yana aiki domin yana ƙirƙirar firgici da gaggawa — "dan gida" a cikin matsala, yana bukatar taimako yanzu, yana neman ka ɓoye asirin. Waɗannan gajerun bidiyo suna nuna yadda zambar ke faruwa da abin da ya kamata ka saurara.',
      videoFallback: 'Burauzarka ba ya goyon bayan bidiyo da aka saka a ciki.',
      videoDownload: 'Sauke Bidiyon',
      items: [
        { title: 'Kiran "Jika A Cikin Matsala"', body: 'Wasan kwaikwayo na kiran zamba na kaka ko kaka na gargajiya, yana nuna yadda mai zamba ke ƙirƙirar firgici da gaggawa cikin daƙiƙu na farko.', quote: '"Idan kira ya taɓa neman ka yi wani abu nan take kuma ka yi shiru, wannan sirrin da kansa shi ne babbar alamar haɗari."', videoLabel: 'Bidiyo mai nuna kiran zamba na kaka ko kaka' },
        { title: 'Yadda Zamban Kaka Ke Kai Hari Ga Manya A Zahiri', body: 'Rahoton labarai kan yadda waɗannan zambatan ke aiki a girma, da kuma dalilin da ya sa suke aiki sosai ko da a kan mutane masu hankali da taka tsantsan.', quote: '"An tsara waɗannan kiran ne domin su sa ka ji kamar babu lokacin duba abin da ke faruwa — wannan jin nan da kansa shi ne alamar haɗari."', videoLabel: 'Rahoton labarai kan zamban kaka da ke kai hari ga tsofaffi' },
        { title: 'Lokacin Da "Aboki" Na Yanar Gizo Ya Zama Mai Ci Zarafi', body: 'Rahoton labarai kan zamban cin zarafi ta jima\'i (sextortion), inda baƙo ke kama kansa a matsayin aboki a yanar gizo, sannan ya yi barazanar raba hotuna na sirri sai an biya ko an aika ƙarin hotuna. Yana kai wa yara da matasa hari fiye da yadda mafi yawan iyaye suke tunani.', quote: '"Hoton ba shine gaggawa ba — gaya wa babba mai aminci nan take shine gaggawar. Babu wanda zai shiga matsala, kuma akwai hanyoyin cire hotunan."', videoLabel: 'Rahoton labarai kan zamban cin zarafi ta jima\'i da ke kai wa yara da matasa hari a yanar gizo' },
        { title: '"Kayan Kyauta" Da Ba Kyauta Ba Ne Kwata-kwata', body: 'Rahoton labarai kan yadda masu zamba ke kai wa yara hari a cikin wasannin yanar gizo da manhajojin hira, ta amfani da kyaututtuka na ƙarya, kayayyaki "kyauta", da hanyoyin musanya da aka shirya don sace asusu da bayanan biyan kuɗi.', quote: '"Idan musanya ko kyauta a cikin wasa ta yi kyau sosai da alama ba gaskiya ba ce, yawanci haka take — kyauta ta gaske ba ta taɓa neman kalmar sirrinka ba tukuna."', videoLabel: 'Rahoton labarai kan zamban da ke kai wa yara hari a wasannin yanar gizo' }
      ]
    },
    resources: {
      eyebrow: 'Ci Gaba Da Sanin Labari',
      h2: 'Inda za a duba sanannun zamba da faɗakarwar cin zarafi.',
      p: 'Waɗannan ƙungiyoyi masu amincewa suna bin diddigin zamba masu aiki, suna buga faɗakarwa, kuma suna karɓar rahotanni — ka ajiye wasu ka duba su duk lokacin da wani abu ya ji baƙon abu.',
      groups: [
        { title: 'Kanada', items: [
          { title: 'Cibiyar Yaƙi da Zamba ta Kanada', body: 'Cibiyar ƙasar Kanada don kai rahoton zamba da cin zarafi — duba faɗakarwar zamba na yanzu ka kuma kai rahoto.' },
          { title: 'Cibiyar Tsaron Sarari na Dijital ta Kanada', body: 'Jagorar Gwamnatin Kanada kan phishing, malware, da tsaro a intanet.' },
          { title: 'Get Cyber Safe', body: 'Yaƙin neman wayar da kai na ƙasa da shawarwari cikin sauƙin harshe da faɗakarwar haɗari na yanzu.' },
          { title: 'Ofishin Gasa na Kanada', body: 'Yana bin diddigin talla mai yaudara da zamban masu siye da sayarwa, tare da jerin sanannun zamba da za a iya bincika.' }
        ]},
        { title: 'Duniya Baki Ɗaya', items: [
          { title: 'FTC Consumer Advice (Amurka)', body: 'Faɗakarwar zamba na masu siye da sayarwa, jagorori, da kayan aikin kai rahoto na Hukumar Kasuwanci ta Tarayya ta Amurka.' },
          { title: 'Action Fraud (Ingila)', body: 'Cibiyar ƙasar Ingila don kai rahoton zamba da laifukan intanet.' },
          { title: 'FBI Internet Crime Complaint Center (IC3)', body: 'Yana bin diddigi kuma yana bincike laifukan intanet da aka kai rahoto a Amurka.' }
        ]},
        { title: 'Zamban Cyber da Na Intanet', items: [
          { title: 'Anti-Phishing Working Group', body: 'Yana bin diddigin yanayin phishing da shafukan yanar gizo na ƙarya a duniya; wurin da za a kai rahoton shafuka masu shakku.' },
          { title: 'Google Safe Browsing', body: 'Duba ko an riga an yiwa wani shafin yanar gizo alama a matsayin marar aminci ko mai yaudara.' },
          { title: 'Canadian Securities Administrators (CSA)', body: 'Albarkatun kare masu zuba jari don gano zamban zuba jari da kuɗin dijital.' }
        ]}
      ]
    },
    quiz: {
      eyebrow: 'Gwada Iyawarka ta Gane Zamba',
      h2: 'Kana tsammanin za ka iya gane zamba? Gwada.',
      p: 'Yanayi biyar na gaskiya, na sauri. Babu maki mara kyau — kowace tambaya tana sa ka fi lafiya kaɗan.',
      questionOf: 'Tambaya {n} daga cikin {total}',
      answerGroupLabel: 'Zaɓuɓɓukan amsa',
      nextLabel: 'Tambaya ta gaba',
      resultsLabel: 'Duba sakamakona',
      resultTitle: 'Ka samu {score} daga cikin {total}!',
      resultBody: 'Kowace tambaya da ka yi tunani a kai tana sa ka fi wahalar yaudara. Raba wannan jarabawar da wanda kake kauna — musamman wanda ke sabon koyon gane zamba.',
      retryLabel: 'Sake gwadawa',
      questions: [
        { q: 'Ka samu saƙo daga lamba wadda ba a sani ba: "Ba a iya kai kayanka ba, danna nan don sake tsarawa." Menene mafi aminci a yi?',
          options: ['Danna hanyar haɗin nan take don kada in rasa kayana', 'Duba bin diddigin kai tsaye a shafin yanar gizo ko manhajar hukuma ta shago', 'Amsa da "STOP" don soke rijista'],
          correct: 1,
          why: { correct: 'Daidai — buga adireshin hukuma na shagon da kanka yana nufin hanyar haɗin ƙarya ba za ta taɓa yaudarar ka ba.', incorrect: 'Mafi aminci: ka guji hanyar haɗin gaba ɗaya ka duba bin diddigin a shafin ko manhajar hukuma ta shago.' } },
        { q: '"Jikanka" ya kira yana cewa yana cikin matsala kuma yana bukatar a aika masa kuɗi yanzu — yana neman ka ɓoye asirin. Menene mafi aminci a yi?',
          options: ['Aika kuɗin nan take, ya yi kama da gaggawa', 'Rufe waya ka sake kiran jikanka a lambar da ka riga ka mallaka masa', 'Yi masa tambaya ta sirri a waya don tabbatarwa'],
          correct: 1,
          why: { correct: 'Sake kira a lambar da ka riga ka amince da ita shi ne hanya mafi aminci don tabbatar da wanda kake magana da shi a zahiri.', incorrect: 'Muryoyi na iya zama masu ban mamaki gaskiya a waya. Mafi kyau ka rufe waya ka kira lambar da ka riga ka mallaka domin wannan mutumin.' } },
        { q: 'Wani imel ya ce: "Za a dakatar da asusunka cikin sa\'o\'i 24 — tabbatar da kalmar sirrinka yanzu," tare da babban banner ja mai gaggawa. Menene mafi aminci a yi?',
          options: ['Danna hanyar haɗin nan take don tsira', 'Je zuwa shafin yanar gizo na hukuma ta hanyar buga adireshin da kanka'],
          correct: 1,
          why: { correct: 'Gaggawa dabara ce ta zamba ta gargajiya. Buga adireshin da kanka yana tabbatar da ka isa ainihin shafin koyaushe.', incorrect: 'Ka buga ainihin adireshin kamfanin da kanka maimakon danna hanyar haɗin da ke cikin imel — sautin gaggawa alama ce ta haɗari.' } },
        { q: 'Wani tsallake-tsallake ya ce: "An gano ƙwayar cuta! Kira wannan lambar yanzu don taimako." Me ya kamata ka yi?',
          options: ['Kira lambar, ta yi kama da hukuma', 'Rufe tsallake-tsallaken (ko sake kunna burauzarka) ka yi watsi da shi'],
          correct: 1,
          why: { correct: 'Daidai — ainihin software na tsaro ba ya taɓa neman ka kira lambar waya.', incorrect: 'Ainihin gargaɗin tsaro ba ya taɓa neman ka kira lambar waya. Rufe tsallake-tsallaken ka ci gaba.' } },
        { q: 'Wani da ka sadu da shi kwanan nan a intanet ya nemi adireshinka da cikakken sunanka "don kawai mu zama abokai." Menene mafi aminci a yi?',
          options: ['Raba su, ya yi kama da mutumin kirki', 'Ka ɓoye bayananka na sirri ka faɗa wa babba ko aboki da ka amince da shi game da buƙatar'],
          correct: 1,
          why: { correct: 'Madalla — ɓoye bayananka na sirri da faɗa wa wanda ka amince da shi koyaushe shi ne zaɓi mafi aminci.', incorrect: 'Mafi kyau ka ɓoye bayananka na sirri, ko da da mutanen da suke kama da abokantaka, ka faɗa wa wanda ka amince da shi.' } }
      ]
    },
    report: {
      eyebrow: 'Nemi Taimako',
      h2: 'Kana tsammanin ka gano zamba — ko an yi maka zamba?',
      p: 'Ba kai kaɗai ba ne, kuma ba a makara ba don yin wani abu. Ga inda za ka juya.',
      resourcesTitle: 'Wurare masu amincewa don kai rahoto',
      resources: [
        { title: 'Cibiyar Yaƙi da Zamba ta Kanada', body: '1-888-495-8501 — kai rahoton zamba ka samu shawara, kyauta kuma a asirce.' },
        { title: 'Bankinka ko mai bayar da katinka', body: 'Kira lambar da aka buga a katinka ko bayanin asusunka — ba lambar da mai kiran ya baka ba.' },
        { title: 'Dan gida ko aboki da ka amince da shi', body: 'Yin magana da wanda ka amince da shi koyaushe mataki ne na farko mai hikima.' }
      ],
      formTitle: 'Yi Mana Tambaya',
      formNote: 'Ana aika saƙonka kai tsaye zuwa gare mu — babu bukatar wata manhajar imel.',
      nameLabel: 'Sunanka', emailLabel: 'Adireshin Imel', messageLabel: 'Me ya faru?',
      submitLabel: 'Aika Saƙona',
      successMsg: 'Ana aika saƙonka…',
      errorMsg: 'Wani abu ya faru ba daidai ba. Da fatan za a sake gwadawa, ko ka aiko mana imel kai tsaye a contact@commonsensecyber.org.'
    },
    faq: {
      eyebrow: 'Tambayoyi', h2: 'Tambayoyin da Ake Yawan Yi',
      items: [
        { q: 'Shin Common Sense Cyber hukumar gwamnati ce?', a: 'A\'a. Mu tushen wayar da kai ne mai zaman kansa, ba mu da alaƙa da wata hukumar gwamnati, banki, ko sabis na \'yan sanda. Muna raba jagorar ilimi ta gaba ɗaya — koyaushe tabbatar da duk wani abu mai gaggawa ta hanyoyin hukuma.' },
        { q: 'Ina tsammanin na riga na faɗa cikin zamba. Me ya kamata in fara yi?', a: 'Tuntuɓi bankinka ko mai bayar da katinka nan take ta amfani da lambar da ke kan katinka, sannan ka tuntuɓi Cibiyar Yaƙi da Zamba ta Kanada. Yin sauri na iya haifar da bambanci na gaske — kuma babu kunyar neman taimako.' },
        { q: 'Shin ina bukatar in zama "gwani a fasaha" don amfani da wannan shafi?', a: 'Ko kaɗan — hakan shi ne ainihin manufar. Kowace jagora a nan an rubuta ta ne cikin harshe mai sauƙi, ba tare da tsammanin ilimin fasaha ba.' },
        { q: 'Zan iya raba wannan shafin da iyalina?', a: 'Don Allah ku yi hakan! Common Sense Cyber kyauta ne don amfani da rabawa — musamman da ƙananan masu bincike da ƙwararrun masu amfani da yanar gizo a rayuwarku.' }
      ]
    },
    community: {
      eyebrow: "Labaran Al'umma",
      h2: 'Wani abu makamancin haka ya taɓa faruwa da kai?',
      p: 'Ainihin abubuwan da suka faru suna taimaka wa sauran baƙi su gane irin waɗannan alamun haɗari. Ana duba kowane labari kafin a buga shi, kuma kana iya zama ba a bayyana sunanka ba idan ka so.',
      emptyTitle: 'Babu labarai tukuna',
      emptyBody: 'Ka zama na farko da zai raba nasa — abin da ya faru da kai zai iya taimaka wa wani ya gane irin wannan zamba.',
      anonymousName: 'Ba a bayyana suna ba',
      formTitle: 'Raba Labarinka',
      formNote: 'Ana aika labarinka kai tsaye zuwa gare mu. Babu abin da ake buga shi kai tsaye — ainihin mutum ne ke duba kowane labari kafin ya bayyana a shafin.',
      nameLabel: 'Sunanka (ba tilas ba)', anonymousLabel: 'Buga wannan ba tare da bayyana suna ba', storyLabel: 'Me ya faru?',
      emailLabel: 'Imel ɗinka (na sirri — ana amfani da shi ne kawai idan muna da tambaya ta biyo baya, ba za a taɓa buga shi ba)',
      consentLabel: 'Na yarda a duba wannan labarin kuma a iya raba shi a wannan shafin.',
      submitLabel: 'Aika Labarina',
      successMsg: 'Ana aika labarinka…',
      errorMsg: 'Wani abu ya faru ba daidai ba. Da fatan za a sake gwadawa, ko ka aiko mana imel kai tsaye a contact@commonsensecyber.org.'
    },
    legal: {
      h2: 'Sirri da Sharuɗɗa',
      p: 'Yadda muke kula da bayanai a wannan shafin, cikin sauƙin harshe.',
      items: [
        { q: 'Waɗanne bayanai kuke tattarawa?', a: "Fom ɗin \"Nemi Taimako\" da \"Raba Labarinka\" suna aika saƙonka kai tsaye zuwa gare mu ta hanyar sabis na imel na ciniki (Resend) — ba mu gudanar da wata database ba, don haka babu abin da ake ajiyewa ban da wannan imel. Ana buga labaran al'umma ne kawai bayan ainihin mutum ya duba su, kuma kana iya neman a gyara, a ɓoye suna, ko a cire labarinka a kowane lokaci. Duba manufar sirri ta Resend don sanin yadda suke kula da isar da saƙonni." },
        { q: "Me kuke ajiyewa a na'urata?", a: "Abubuwa biyu ne kawai, ana ajiye su a cikin ma'ajin gida na burauzarka: harshen da ka zaɓa da girman rubutu. Dukansu suna zama a na'urarka kawai, ba a taɓa aika su gare mu ba." },
        { q: 'Kuna amfani da kukiz, bibiya, ko bincike?', a: 'Babu kukiz na talla, rubutun bibiya, ko wani irin bincike. Banda shi kawai shine Google Fonts, wanda ake amfani da shi don nuna rubutu cikin harsuna daban-daban — loda shi na iya raba adireshin IP ɗinka da Google. Duba manufar sirri ta Google don ƙarin bayani.' },
        { q: 'Yaya game da sirrin yara?', a: "An rubuta Common Sense Cyber ne domin masu karatu na kowane shekaru, har da yara, amma ba mu tattara bayanan sirri na kowa da gangan ba. Kowane fom zaɓi ne, kuma muna ƙarfafa iyaye ko mai kula da yaro ya duba saƙon kafin a aika shi." },
        { q: "Wannan shawara ce ta hukuma ta gwamnati ko ta shari'a?", a: "A'a. Common Sense Cyber wata hanya ce mai zaman kanta ta ilimi, kuma ba ta da alaƙa da wata hukumar gwamnati, banki, ko hukumar tilasta bin doka. Babu abin da ke wannan shafin da ya zama shawarar shari'a, ta kuɗi, ko ta tsaro ta ƙwararru — koyaushe ka tabbatar da duk wani abu na gaggawa ta hanyoyin hukuma. Hanyoyin haɗi zuwa wasu shafuka (kamar Have I Been Pwned ko albarkatun gwamnati) suna kai ka ga ƙungiyoyi masu zaman kansu da ba mu iko a kansu." },
        { q: 'Kana da tambayoyi game da wannan shafin?', a: 'Tuntube mu kowane lokaci a contact@commonsensecyber.org.' }
      ]
    },
    footer: {
      tagline: 'Tsaron intanet, an bayyana shi cikin sauƙi.',
      disclaimer: 'Common Sense Cyber tushen ilimi ne mai zaman kansa kuma ba shi da alaƙa da wata hukumar gwamnati, banki, ko hukumar tilasta doka. A cikin gaggawa, ko idan an riga an aika kuɗi, tuntuɓi bankinka da Cibiyar Yaƙi da Zamba ta Kanada nan take.',
      copyright: '© {year} Common Sense Cyber. An gina shi da kulawa.'
    }
  },
  pcm: {
    meta: { name: 'Naijá Pidgin', dir: 'ltr', minLabel: 'mins' },
    pageTitle: 'Common Sense Cyber — Cybersecurity Wey Simple',
    metaDescription: 'Common Sense Cyber dey teach everyday online safety for simple language — for pikin, old people, and everybody in between. No hard grammar, no judging.',
    skipLink: 'Skip go main content',
    logoAlt: 'Common Sense Cyber logo — shield wey dey smile',
    heroArtAlt: 'Picture of Common Sense Cyber mascot, shield wey dey smile',
    footerLogoAlt: 'Common Sense Cyber logo',
    nav: { basics: 'Learn De Basics', tracks: 'Pikin & Old People', story: 'True True Stories', quiz: 'Quiz', resources: 'Resources', report: 'Find Help', faq: 'Wetin People Dey Ask', community: 'Share Your Story' },
    header: { textSize: 'Make text big small so e go dey easy to read', menuOpen: 'Open Menu', menuClose: 'Close Menu', lang: 'Choose Language' },
    brand: { tagline: 'Online safety, wey dem explain am plain plain' },
    hero: {
      eyebrow: 'Free and friendly online safety',
      h1: 'Cybersecurity wey dey speak your own language.',
      p: 'No hard grammar. No judging you. Na just simple, warm advice wey go help you catch scam, protect your account, and stay safe online — whether you be 9 years or 90 years.',
      ctaPrimary: 'Start To Learn De Basics',
      ctaSecondary: 'Watch One True Story',
      stat1: '6', stat1Label: 'Topics wey dem explain plain plain',
      stat2: '2', stat2Label: 'Way for pikin and old people',
      stat3: '5', stat3Label: 'Quiz to test your scam sense'
    },
    mission: {
      eyebrow: 'Why we dey do dis one',
      h2: 'Everybody deserve to feel safe online — you no need computer degree.',
      p: 'Plenty cybersecurity advice na for people wey already sabi cybersecurity dem dey write am. Common Sense Cyber flip am. We dey take real security knowledge turn am to simple, warm advice wey no go judge you, for de people wey need am pass: pikin wey just dey start to use internet, old people wey dey learn new tech, and anybody wey no wan waste time to sabi hard grammar just to stay safe.',
      pillars: [
        { title: 'Simple Language', body: 'No hard grammar, no fear tactic — na just clear explanation wey anybody fit understand de first time.' },
        { title: 'No Judgment', body: 'If scam catch you, e no mean say you do something wrong. We dey focus on make you get confidence, no be to shame you.' },
        { title: 'For Every Age', body: "From pikin im first tablet, to grandpa im first smartphone — advice wey dem build around real life, no be for tech expert only." }
      ]
    },
    basics: {
      eyebrow: 'Learn De Basics',
      h2: 'Six things wey good make you sabi — dem explain am without hard grammar.',
      p: 'Tap any topic make you see small practical tips wey you fit use today.',
      seeTips: 'See de tips',
      tips: [
        { title: 'How To Catch Scam Message', summary: 'Text and email wey dem design make you panic click fast fast.', points: [
          'Real company no dey rush you like dat — urgency na de biggest red flag.',
          'Check de address wey send de message well well, no be just de name wey show.',
          'If you get doubt, contact de company with number wey you don already trust — no be de one wey dey inside de message.'
        ]},
        { title: 'Password Safety', summary: 'Small small habit fit stop plenty account break-in.', points: [
          'Use 3 to 4 random words join together instead of short password wey hard.',
          'No use de same password for different website.',
          'Turn on two-step verification anywhere dem give you de option — na de best upgrade wey you fit do.',
          'Good password no suppose be real word, your name, birthday, or your pet name — na dem be de first thing wey person go guess.',
          'Avoid pattern wey easy to guess like "123456", "password", or keyboard pattern like "qwerty".',
          'No real company go ever call you, text you, or email you to ask make you talk your password out loud.'
        ]},
        { title: 'How To Browse Safe', summary: 'Small signs dey show you say one site (or warning) na correct one.', points: [
          'Find de padlock icon and "https" before you enter any information.',
          'No mind pop-up wey say your device get virus — real security software no dey work like dat.',
          'Make your browser and app dey update; update dey fix security wahala plenty times.'
        ]},
        { title: 'Social Media And Privacy', summary: 'Wetin you share fit turn against you for surprising way.', points: [
          'Think twice before you post your birthday, address, or travel plan.',
          'Check your privacy settings every few months — de default settings dey change.',
          'Watch am well before you accept friend request from people wey you no really sabi.'
        ]},
        { title: 'How To Protect Your Money', summary: 'How to recognize money scam before e cost you.', points: [
          'No real bank or government agency go ever ask you to pay with gift card or crypto.',
          'You get surprise money request, even from "family"? Call dem back with number wey you don already get.',
          'Slow down small. Correct request fit always wait until you don confirm well well.'
        ]},
        { title: 'Wi-Fi And Devices', summary: 'Everyday habit wey dey keep your device safe.', points: [
          'No enter password or bank info for public Wi-Fi.',
          'Make your phone and computer software dey update.',
          'Lock your device with PIN, password, or fingerprint — always.'
        ]}
      ]
    },
    tracks: {
      eyebrow: 'Dem Make Am For You',
      h2: 'Advice wey match where you dey start from.',
      kids: { badge: 'For Small Small Explorer', title: 'For Small Small Explorer', body: 'Simple rules for pikin and teenager wey dey learn how internet work.', points: [
        'Your password na your own — no share am, even to your friend.',
        'Keep your real name, school, and address private online.',
        'If anything online feel strange or scary, tell adult wey you trust. Nothing go happen to you.',
        'Show kindness — de same rule wey you dey follow to treat person good for real life, e still apply online.'
      ], cta: 'See more tips' },
      seniors: { badge: 'For Wise Web User', title: 'For Wise Web User', body: 'Advice wey go make your mind rest and wey dey useful — because scammer dey target smart people every day.', points: [
        'E no be rude to cut phone, slow down, or ask question before you act.',
        '"Family member" dey ask for urgent money? Call dem back with number wey you don already get.',
        'No real bank, agency, or company go ask you to pay with gift card.',
        'If you receive tricky message, e no mean say you dey behind — e mean say somebody dey try trick you.'
      ], cta: 'See more tips' }
    },
    anatomy: {
      eyebrow: 'De pattern wey dey behind de panic',
      h2: 'How Scam Call Dey Work',
      p: 'Almost every phone or text scam dey follow de same four moves. Once you sabi de pattern, e go easy well well to catch de scam.',
      steps: [
        { title: 'De Hook', body: 'Call or text go create fake emergency — many times dem go pretend say na person wey you love.' },
        { title: 'De Urgency', body: '"You must act now now" — scammer no go give you time to think or check.' },
        { title: 'De Secrecy', body: '"Abeg no tell anybody" — dis one dey cut off de people wey fit catch de scam.' },
        { title: 'De Ask', body: 'Request for money, gift card, or account details — na dis be de real reason for de call.' }
      ],
      calloutStrong: 'You fit break de pattern for any step.',
      calloutBody: 'Cut de phone, call de person back with number wey you don already get, and take your time — real emergency fit survive five minutes wait.'
    },
    story: {
      eyebrow: 'True True Stories',
      h2: 'How real scam calls dey really sound.',
      p: 'Scam call dey work because dem dey create panic and urgency — one "relative" wey dey trouble, wey need help sharp sharp, wey dey beg you make you keep am secret. Dis short videos go show you how de scam dey unfold and wetin you go listen for.',
      videoFallback: 'Your browser no support embedded video.',
      videoDownload: 'Download de video',
      items: [
        { title: 'De "Grandchild Wey Dey Trouble" Call', body: 'One acting wey show classic grandparent scam call, wey show how scammer dey build panic and urgency inside de first few seconds.', quote: '"If any call ask you to act immediately and keep quiet, dat secrecy na de biggest warning sign of all."', videoLabel: 'Video wey show grandparent scam phone call' },
        { title: 'How Grandparent Scam Dey Really Target Old People', body: 'One news report wey show how dis kain scam dem dey operate for big level, and why e dey work well well even for smart people wey dey careful.', quote: '"Dem design dis kain calls make you feel say no time to check — dat feeling itself na de warning sign."', videoLabel: 'News segment about grandparent scams wey dey target senior citizens' },
        { title: 'When Online "Friend" Turn Blackmailer', body: 'One news report about sextortion scam, wia stranger go pretend say na friend online, den e go threaten to share private picture unless de person pay or send more picture. E dey target children and teenager pass wetin most parents sabi.', quote: '"De picture no be de emergency — to tell trusted grown-up sharp sharp na de real emergency. Nobody go enter trouble, and dem get way to remove de picture."', videoLabel: 'News segment about sextortion scam wey dey target children and teenagers online' },
        { title: 'De "Free Skin" Wey No Free At All', body: 'One news report about how scammers dey target children inside online games and chat apps, dem dey use fake giveaway, "free" items, and rigged trade link to steal account and payment details.', quote: '"If trade or giveaway inside game too sweet reach, e fit no be real — real prize no dey ask for your password first."', videoLabel: 'News segment about scam wey dey target children for online gaming' }
      ]
    },
    resources: {
      eyebrow: 'Stay Informed',
      h2: 'Where to check for known scam and fraud alert.',
      p: 'Dis kain trusted organizations dey track active scam, dem dey publish alert, and dem dey take report — bookmark small small of dem and check dem anytime something no dey feel right.',
      groups: [
        { title: 'Canada', items: [
          { title: 'Canadian Anti-Fraud Centre', body: "Canada national centre for report scam and fraud — check current scam alert and file report." },
          { title: 'Canadian Centre for Cyber Security', body: 'Government of Canada guide about phishing, malware, and how to stay safe online.' },
          { title: 'Get Cyber Safe', body: 'National awareness campaign wey get plain language tips and current threat alert.' },
          { title: 'Competition Bureau Canada', body: 'Dem dey track deceptive marketing and consumer scam, with list wey you fit search of known scam.' }
        ]},
        { title: 'World Wide', items: [
          { title: 'FTC Consumer Advice (United States)', body: "US Federal Trade Commission consumer scam alert, guide, and report tool." },
          { title: 'Action Fraud (United Kingdom)', body: "UK national centre for report fraud and cybercrime." },
          { title: 'FBI Internet Crime Complaint Center (IC3)', body: 'Dem dey track and investigate internet crime wey people report for United States.' }
        ]},
        { title: 'Cyber & Online Scams', items: [
          { title: 'Anti-Phishing Working Group', body: 'Dem dey track phishing and fake website trend for world wide; place wey you fit report suspicious site.' },
          { title: 'Google Safe Browsing', body: 'Check whether dem don already flag one website as unsafe or deceptive.' },
          { title: 'Canadian Securities Administrators', body: 'Investor protection resources to help you spot investment and cryptocurrency scam.' }
        ]}
      ]
    },
    quiz: {
      eyebrow: 'Test Your Scam Sense',
      h2: 'You think say you fit catch scam? Try am.',
      p: 'Five quick real-world scenario. No score na bad score — every question dey make you safe small small.',
      questionOf: 'Question {n} out of {total}',
      answerGroupLabel: 'Answer options',
      nextLabel: 'Next question',
      resultsLabel: 'See my results',
      resultTitle: 'You score {score} out of {total}!',
      resultBody: 'Every question wey you think about well well dey make you harder to fool. Share dis quiz with person wey you care about — especially anybody wey just dey learn how to catch scam.',
      retryLabel: 'Try again',
      questions: [
        { q: 'You get text from number wey you no sabi: "Dem no fit deliver your package, click here to reschedule." Wetin be de safest thing to do?',
          options: ['Click de link sharp sharp so I no go miss my package', 'Check de tracking directly for de retailer im official website or app', 'Reply "STOP" to unsubscribe'],
          correct: 1,
          why: { correct: 'Correct — if you type de retailer real website yourself, fake link no fit ever fool you.', incorrect: 'Safer option: no touch de link at all, check de tracking for de retailer official website or app.' } },
        { q: 'Your "grandchild" call say dem dey trouble and dem need money urgent urgent — and dem beg you make you keep am secret. Wetin be de safest thing to do?',
          options: ['Send de money immediately, e sound urgent', 'Cut de phone and call your grandchild back with number wey you don already get for dem', 'Ask dem one personal question for phone to check'],
          correct: 1,
          why: { correct: 'To call back with number wey you don already trust na de safest way to confirm who you dey really talk to.', incorrect: 'Voice fit convincing well well for phone. Better make you cut de phone and call de number wey you don already get for dat person.' } },
        { q: 'One email talk say: "Dem go suspend your account for 24 hours — verify your password now," with big red urgent banner. Wetin be de safest thing to do?',
          options: ['Click de link sharp sharp make I dey safe', 'Go de official website by typing de address yourself'],
          correct: 1,
          why: { correct: 'Urgency na classic scam tactic. If you type de address yourself, you go always land for de real site.', incorrect: 'Type de company real address yourself instead of clicking de link inside de email — urgent tone na red flag.' } },
        { q: 'One pop-up talk say: "Dem don find virus! Call dis number now for support." Wetin you suppose do?',
          options: ['Call de number, e dey look official', 'Close de pop-up (or restart de browser) and ignore am'],
          correct: 1,
          why: { correct: 'Correct — real security software no dey ever ask you to call phone number.', incorrect: 'Real security warning no dey ever ask you to call phone number. Close de pop-up and continue.' } },
        { q: 'Person wey you just meet online ask for your house address and your full name "just so we go be friends." Wetin be de safest thing to do?',
          options: ['Share am, de person dey look nice', 'Keep your personal details private and tell adult or friend wey you trust about de request'],
          correct: 1,
          why: { correct: 'Well done — to keep your personal details private and tell person wey you trust na always de safer choice.', incorrect: 'Better make you keep your personal details private, even if de person dey look friendly, and tell person wey you trust.' } }
      ]
    },
    report: {
      eyebrow: 'Find Help',
      h2: 'You think say you don catch scam — or dem target you with one?',
      p: 'You no dey alone, and e never too late to act. Na here you fit turn to.',
      resourcesTitle: 'Trusted places to report',
      resources: [
        { title: 'Canadian Anti-Fraud Centre', body: '1-888-495-8501 — report scam make you get advice, free and confidential.' },
        { title: 'Your bank or card provider', body: 'Call de number wey dem print for your card or statement — no be number wey de caller give you.' },
        { title: 'Family member or friend wey you trust', body: 'To talk am well well with person wey you trust na always smart first step.' }
      ],
      formTitle: 'Ask Us Question',
      formNote: 'We dey send your message go us straight — no need for any email app.',
      nameLabel: 'Your Name', emailLabel: 'Email Address', messageLabel: 'Wetin happen?',
      submitLabel: 'Send My Message',
      successMsg: 'We dey send your message…',
      errorMsg: 'Something go wrong. Abeg try again, or email us straight for contact@commonsensecyber.org.'
    },
    faq: {
      eyebrow: 'Questions', h2: 'Wetin People Dey Ask',
      items: [
        { q: 'Common Sense Cyber na government agency?', a: 'No. We na independent awareness resource, we no dey connect to any government agency, bank, or police service. We dey share general educational advice — always confirm anything wey urgent through official channel.' },
        { q: 'I think say scam don already catch me. Wetin I suppose do first?', a: 'Contact your bank or card provider sharp sharp with de number wey dey your card, den contact Canadian Anti-Fraud Centre. To act fast fit really make difference — and nothing dey wrong to ask for help.' },
        { q: 'I need to sabi tech well well before I fit use dis site?', a: 'Not at all — na dat one be de whole point. Every guide for here, dem write am for simple language, e no expect say you get technical background.' },
        { q: 'I fit share dis site with my family?', a: 'Abeg do am! Common Sense Cyber na free to use and to share — especially with de small small explorer and wise web user for your life.' }
      ]
    },
    community: {
      eyebrow: 'Community Stories',
      h2: 'Something like dis don ever happen to you before?',
      p: 'Real experience dey helep other visitors recognize de same warning sign dem. Dem go review every story before e go post, and you fit stay anonymous if you want.',
      emptyTitle: 'No story yet',
      emptyBody: 'Be de first person to share yours — your own experience fit helep another person recognize de same scam.',
      anonymousName: 'Anonymous',
      formTitle: 'Share Your Story',
      formNote: 'We dey send your story go us straight. Nothing go post by itself — real person go review every story before e show for de site.',
      nameLabel: 'Your Name (no compulsory)', anonymousLabel: 'Post dis one anonymously', storyLabel: 'Wetin happen?',
      emailLabel: 'Your Email (private — na only if we get follow-up question we go use am, we no go ever publish am)',
      consentLabel: 'I dey okay make dem review dis story and fit share am for dis site.',
      submitLabel: 'Send My Story',
      successMsg: 'We dey send your story…',
      errorMsg: 'Something go wrong. Abeg try again, or email us straight for contact@commonsensecyber.org.'
    },
    legal: {
      h2: 'Privacy & Rules',
      p: 'How we dey handle information for dis site, for plain language.',
      items: [
        { q: 'Wetin una dey collect?', a: 'De "Find Help" and "Share Your Story" forms dey send your message straight go us through one transactional email service (Resend) — we no dey run any database, so nothing dey store apart from dat email. We dey post community stories only after real person don review dem, and you fit ask make dem edit, anonymize, or remove your story anytime. Check Resend privacy policy make you sabi how dem dey handle message delivery.' },
        { q: 'Wetin una dey store for my device?', a: 'Just two small preference, wey dey save inside your browser local storage: de language wey you choose and text-size setting. Both of dem go stay for your device, we no dey ever send dem to us.' },
        { q: 'Una dey use cookies, tracking, or analytics?', a: 'No advertising cookies, tracking script, or analytics of any kind. De only exception na Google Fonts, wey we dey use show text for different languages — to load am fit share your IP address with Google. Check Google privacy policy for more details.' },
        { q: 'Wetin about children privacy?', a: 'Dem write Common Sense Cyber for readers of every age, including children, but we no dey knowingly collect personal information from anybody. Every form na optional, and we dey encourage make parent or guardian check anything before dem send am.' },
        { q: 'Na official government or legal advice be dis?', a: 'No. Common Sense Cyber na independent educational resource, e no dey affiliated with any government agency, bank, or law enforcement body. Nothing for dis site na professional legal, financial, or security advice — always verify anything urgent through official channels. Links to outside sites (like Have I Been Pwned or government resources) go carry you go independent organizations wey we no control.' },
        { q: 'You get question about dis page?', a: 'Reach us anytime for contact@commonsensecyber.org.' }
      ]
    },
    footer: {
      tagline: 'Online safety, wey dem explain am plain plain.',
      disclaimer: 'Common Sense Cyber na independent educational resource and e no dey connect to any government agency, bank, or law enforcement body. If na emergency, or if dem don already send money, contact your bank and Canadian Anti-Fraud Centre sharp sharp.',
      copyright: '© {year} Common Sense Cyber. Dem build am with care.'
    }
  }
};
