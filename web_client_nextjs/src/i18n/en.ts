export const en = {
  onboarding: {
    title: "Welcome to Your Web3 Journey!",
    subtitle: "Let's get you set up with everything you need",
    startButton: "Let's Go!",
    backButton: "Go Back",
    nextButton: "Continue",
    skipButton: "Skip for Now",
    stepIndicator: "Step {{current}} of {{total}}",
    languageToggle: "Español",
    
    steps: {
      intro: {
        title: "Welcome, Future Web3 Explorer!",
        description: "You're about to discover an exciting new world of possibilities. Think of this as getting your first bank account, but way cooler.",
        highlight: "In just a few minutes, you'll have everything you need to dive into the decentralized web!",
      },
      
      background: {
        title: "The Story Behind It All",
        description: "You know how you use apps like Instagram, Gmail, or your banking app? Those companies control your data and can decide what happens to your account.",
        funFact: "In the old internet (Web2), companies own your accounts. In the new internet (Web3), YOU own your accounts!",
        highlight: "Your digital identity belongs to you and only you.",
      },
      
      wallets: {
        title: "What Exactly is a Wallet?",
        description: "Don't worry, we're not talking about leather wallets here! A crypto wallet is more like a magical keyring that holds your digital keys.",
        metaphor: "Think of it as: Your wallet = Your digital identity + Your bank account combined",
        highlight: "With a wallet, you can prove who you are and manage your digital assets without asking permission from anyone!",
      },
      
      walletTypes: {
        title: "Types of Wallets",
        description: "Just like there are different types of real wallets, crypto wallets come in various forms too!",
        
        types: {
          paper: {
            title: "Paper Wallet",
            description: "A printed piece of paper with your keys written on it. Old school but secure from hackers!",
            pros: "Immune to digital attacks",
            cons: "Can be lost or damaged easily",
          },
          mobile: {
            title: "Mobile Wallet",
            description: "An app on your phone that you use every day.",
            pros: "Super convenient, use it anywhere",
            cons: "If you lose your phone, you need backup",
          },
          extension: {
            title: "Browser Extension",
            description: "A small add-on for your web browser. This is what we'll focus on!",
            pros: "Perfect for using websites and dapps",
            cons: "Needs a browser to work",
          },
          hardware: {
            title: "Hardware Wallet",
            description: "A physical device that looks like a USB drive.",
            pros: "Maximum security, like a safe",
            cons: "Costs money, less convenient",
          },
        },
        
        highlight: "For getting started with dapps and websites, browser extensions are the way to go!",
      },
      
      recommended: {
        title: "Our Top Picks for You",
        description: "We recommend these awesome browser extension wallets. They're all free, safe, and beginner-friendly!",
        
        wallets: {
          core: {
            name: "Core Wallet",
            tagline: "The Official One",
            description: "Built by the Avalanche team. Perfect if you want to explore Avalanche apps and games. Fast and low fees!",
            features: ["Official Avalanche wallet", "Super fast transactions", "Easy to use"],
          },
          metamask: {
            name: "MetaMask",
            tagline: "The Most Popular",
            description: "The most widely used wallet. Think of it as the 'Google Chrome' of crypto wallets - everyone knows it!",
            features: ["Works with most websites", "Huge community", "Many tutorials available"],
          },
          rabby: {
            name: "Rabby Wallet",
            tagline: "The Smart Choice",
            description: "A newer wallet that's gaining popularity for its smart features and beautiful design.",
            features: ["Beautiful interface", "Better security features", "Active development"],
          },
        },
        
        highlight: "Any of these will work great! Choose the one that feels right for you.",
      },
      
      installation: {
        title: "Time to Install Your Wallet!",
        description: "Ready to take the plunge? Here's what to do:",
        
        steps: {
          1: "Choose one of the wallets above",
          2: "Click the download link (usually from their official website)",
          3: "Add it to your browser as an extension",
          4: "Follow the setup wizard - it'll guide you through creating your account",
          5: "Write down your secret phrase and keep it SAFE!",
        },
        
        tip: "Pro tip: Your secret phrase is like the master key to your wallet. Never share it with anyone, not even us!",
        highlight: "Take your time - we'll wait here for you!",
      },
      
      connection: {
        title: "Connect Your Wallet",
        description: "Awesome! Now let's connect your wallet so we can verify everything is working.",
        instruction: "Click the button below and approve the connection request in your wallet popup.",
        connectButton: "Connect Wallet",
        checking: "Checking for wallet...",
        notFound: "Hmm, we couldn't find your wallet.",
        retryButton: "Try Again",
        hint: "Make sure your wallet extension is installed and unlocked!",
      },
      
      signature: {
        title: "Sign a Message",
        description: "Almost there! We just need you to sign a simple message to verify your wallet is working properly.",
        instruction: "Click the button below and approve the signature request in your wallet popup.",
        signButton: "Sign Message",
        signing: "Waiting for signature...",
        success: "Perfect! Your wallet is connected!",
        error: "The signature was denied.",
        tryAgainButton: "Try Again",
      },
      
      celebration: {
        title: "You Did It!",
        description: "Congratulations, Web3 explorer! You've completed your onboarding journey!",
        
        reward: {
          title: "Your Reward: Soulbound NFT",
          explanation: "You've earned a special Soulbound NFT - think of it as your official explorer badge!",
          meaning: "This unique digital credential proves you're a verified member of our community. It's tied to your wallet and can't be transferred - it's part of your digital identity now!",
          badge: "Your Badge",
        },
        
        message: "Welcome to the decentralized future. The adventure is just beginning!",
        continueButton: "Start Exploring",
      },
    },
    
    errors: {
      noWallet: "No wallet detected. Please install a wallet first.",
      connectionFailed: "Failed to connect. Please try again.",
      signatureFailed: "Signature failed. Please try again.",
    },
  },
  
  common: {
    loading: "Loading...",
    error: "Oops! Something went wrong",
    retry: "Try Again",
    cancel: "Cancel",
    confirm: "Confirm",
    close: "Close",
  },

  home: {
    hero: {
      title: "From Vibe Coder",
      titleHighlight: "to Onchain Wizard",
      description: "The gamified Web3 & Solidity mastery platform. Complete tasks, earn onchain soulbound credentials, and transform your skills into verifiable blockchain achievements.",
      cta: "Start Learning",
    },
    features: {
      title: "Ready to Begin Your Journey?",
      description: "Complete challenges, earn soulbound credentials, and become a certified Onchain Wizard.",
      cta: "Start Onboarding",
      cards: [
        {
          title: "Learn Solidity",
          description: "Master smart contract development with interactive lessons",
        },
        {
          title: "Soulbound Credentials",
          description: "Earn onchain badges that prove your skills",
        },
        {
          title: "Gamified Progress",
          description: "Level up and unlock achievements as you learn",
        },
        {
          title: "Onchain Wizard",
          description: "Transform from vibe coder to certified developer",
        },
      ],
    },
  },
};

export type TranslationKeys = typeof en;
