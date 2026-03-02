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
    alreadyOnboarded: {
      title: "Already Onboarded!",
      description: "It looks like you already have your Wizard Passport! You've already completed the onboarding process and are ready to explore.",
      button: "Go to My Profile",
      badgeTitle: "Verified Wizard",
      badgeSubtitle: "Passport detected in wallet",
      quote: "Your journey as an onchain wizard has already begun. Visit your profile to view your credentials and explore new quests.",
    },

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

      walletInstallation: {
        title: "Get Your Official Wizard Wallet!",
        description: "To interact with the magic of the blockchain, you'll need a digital wallet. Think of it as your wizard's pouch where you keep your keys and magical items!",
        wallets: {
          core: {
            name: "Core Wallet",
            tagline: "The Official Choice",
            description: "Built specifically for Avalanche. It's fast, secure, and has everything a growing wizard needs!",
            features: ["Official Avalanche support", "Lightning fast", "Developer friendly"],
          },
          metamask: {
            name: "MetaMask",
            tagline: "The Classic Grimoire",
            description: "The most famous wallet in the realm. Great for traveling between different blockchain worlds!",
            features: ["Universal compatibility", "Huge community", "Battle-tested"],
          },
          rabby: {
            name: "Rabby Wallet",
            tagline: "The Smart Choice",
            description: "A newer wallet that's gaining popularity for its smart features and beautiful design.",
            features: ["Beautiful interface", "Better security features", "Active development"],
          }
        },
        installSteps: {
          title: "Quick Start Guide",
          1: "Choose your favorite wallet and click its link",
          2: "Add the extension to your browser",
          3: "Create a new wallet and follow the security setup",
          4: "⚠️ CRITICAL: Save your 12-word 'Secret Phrase' somewhere safe and private!",
        },
        tip: "Your Secret Phrase is your master key. Never show it to anyone — not even the Great Archmage!",
        highlight: "Choose a wallet below to begin your journey!",
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
        title: "Verify Your Identity",
        description: "Now that you're connected, let's sign a secure message to prove you're the true owner of this wallet. We use the 'Sign-In with Ethereum' standard for maximum security!",
        instruction: "Click the button below and approve the signature request in your wallet. It's completely free!",
        signButton: "Sign Verification Message",
        signing: "Casting the verification spell...",
        success: "Identity verified! You're the real deal.",
        error: "The signature magic dissipated. Please try again!",
        tryAgainButton: "Try Again",
        eipExplanation: "Sign-In with Ethereum (EIP-4361) is a secure way to use your wallet to prove you own your digital identity without passwords or third parties.",
        eipLink: "Read about EIP-4361",
      },

      faucet: {
        title: "Power Up with Fuji Faucet!",
        description: "Every action on the blockchain requires a tiny bit of magical energy called 'Gas Fees'. To help you get started without spending a single cent, we'll use a 'Faucet'!",
        gasFees: {
          title: "What are Gas Fees?",
          description: "Think of gas fees as the fuel needed to run the decentralized computer. It pays the validators who keep the network secure and process your spells!",
        },
        faucetInfo: {
          title: "What is a Faucet?",
          description: "A faucet is a generous tool that gives out free 'test' tokens. These tokens have no real-market value but are perfect for learning and building safely!",
        },
        instruction: "1. Connect your wallet to the 'Avalanche Fuji Testnet' network.\n2. Choose one of the faucets below and provide your address.\n3. Request some test AVAX to power your first steps!",
        faucetButton: "Fuji Faucet",
        faucetConsoleButton: "Builder Console Faucet",
        verifyButton: "Check My Balance Manually",
        success: "Magic tokens detected!",
        congratulations: "Congratulations! Your wizard pouch is filling up with power.",
        noTokens: "No tokens detected yet. Casting the faucet spell again might help!",
        highlight: "Once your balance reflects your new power, you're ready for the final step!",
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

        mint: {
          title: "Claim Your Wizard Passport",
          description: "Your final mission is to mint your onchain identity. This Soulbound NFT will be your key to the Vibe2Wizard ecosystem.",
          button: "Mint My Passport",
          minting: "Casting the Minting Spell...",
          success: "Passport Minted!",
          error: "Minting spell failed. Try again!",
          alreadyMinted: "Passport already in your pouch!",
          viewOnExplorer: "View on Explorer",
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
    benefits: {
      title: "Why Learning Web3 Changes Everything",
      description: "Whether you're switching careers, leveling up your skills, or just curious about the future of the internet, here's what awaits you on this journey.",
      imageAlt: "Web3 learning journey illustration",
      cards: [
        {
          title: "Zero Risk, Real Skills",
          description: "Practice deploying smart contracts without touching real money. We sponsor your gas so you can learn by doing, not by losing.",
          icon: "Shield",
        },
        {
          title: "Credentials That Actually Matter",
          description: "Earn soulbound badges that live onchain forever. Unlike a certificate from some course, anyone can verify exactly what you've built.",
          icon: "Badge",
        },
        {
          title: "Your Portfolio, Verified",
          description: "Every contract you deploy becomes part of your permanent record. Show proof, not promises, when you apply for jobs or grants.",
          icon: "Briefcase",
        },
        {
          title: "Career Doors That Open",
          description: "DAOs and protocols are desperate for developers who can actually ship. Your onchain passport tells them you're the real deal.",
          icon: "Door",
        },
        {
          title: "Skills That Travel",
          description: "Your credentials work across chains. Build on Avalanche, Ethereum, or Arbitrum — your reputation follows you everywhere.",
          icon: "Globe",
        },
        {
          title: "Learning That Feels Like a Game",
          description: "Level up your passport from initiate to archmage. Unlock badges, climb leaderboards, and earn rewards while you learn.",
          icon: "Gamepad",
        },
      ],
      placeholder: {
        title: "Your Journey Starts Here",
        description: "Transform your skills into verifiable onchain achievements that last forever",
      },
    },
    forStakeholders: {
      title: "How Organizations Benefit from Vibe2Wizard",
      description: "Vibe2Wizard isn't just for learners — it's a complete solution for organizations that need to verify talent, build communities, and connect with skilled developers.",
      imageAlt: "Organizations benefiting from verified Web3 talent",
      sections: [
        {
          title: "For Protocols & Institutions",
          description: "Stop burning budget on airdrop hunters who vanish overnight. Get genuinely engaged users who understand your protocol.",
          benefits: [
            {
              title: "Real Users, Not Farmers",
              description: "Onchain activity proves genuine interest. No more wallet addresses that connect once and disappear.",
            },
            {
              title: "Verified Skill Campaigns",
              description: "Create challenges that actually teach users about your protocol while rewarding real engagement.",
            },
            {
              title: "Cost-Effective Growth",
              description: "Every dollar spent reaches people who care. Sponsor gas for learners who become loyal users.",
            },
          ],
        },
        {
          title: "For DAOs & Grant Committees",
          description: "Make informed funding decisions with verifiable proof of capability.",
          benefits: [
            {
              title: "Grant Recipient Verification",
              description: "Verify that applicants have actually built what they claim. No more inflated portfolios.",
            },
            {
              title: "Talent Pipeline",
              description: "Access a pool of verified developers ready to contribute to your ecosystem.",
            },
            {
              title: "Reputation Travels",
              description: "Credentials work across chains. Build a reputation system that follows developers everywhere.",
            },
          ],
        },
        {
          title: "For Employers & Recruiters",
          description: "Finally, a way to know if candidates actually know what they're talking about.",
          benefits: [
            {
              title: "Proof of Work",
              description: "Every badge links to onchain transactions. See exactly what candidates have deployed.",
            },
            {
              title: "Skills That Can't Be Faked",
              description: "Soulbound credentials can't be bought or transferred. What they earn is truly theirs.",
            },
            {
              title: "Faster Hiring",
              description: "Skip the technical interview guesswork. Credentials speak for themselves.",
            },
          ],
        },
      ],
      cta: "Partner With Us",
      ctaTitle: "Need Verified Web3 Talent?",
      ctaDescription: "Let's explore how our verified developer passport system can support your growth.",
    },
  },
  profile: {
    title: "Your Profile",
    editProfile: "Edit Profile",
    member: "Member since",
    level: "Level",
    experience: "Experience",
    xp: "XP",
    rank: "Rank",

    stats: {
      title: "Your Stats",
      deployments: "Deployments",
      badges: "Badges Earned",
      tasksCompleted: "Tasks Completed",
      referrals: "Referrals",
      karma: "Karma Points",
    },

    badges: {
      title: "Your Badges",
      empty: "No badges yet. Start completing quests to earn badges!",
      viewAll: "View All Badges",
      earned: "Earned",
      names: {
        firstDeploy: "First Deploy",
        bugHunter: "Bug Hunter",
        earlyAdopter: "Early Adopter",
        topContributor: "Top Contributor",
        securityExpert: "Security Expert",
        defiMaster: "DeFi Master",
        nftCreator: "NFT Creator",
        communityHero: "Community Hero",
        questComplete: "Quest Complete",
        wizard: "Wizard",
      },
      descriptions: {
        firstDeploy: "Deployed your first smart contract",
        bugHunter: "Found and reported a vulnerability",
        earlyAdopter: "Joined during the beta phase",
        topContributor: "Contributed significantly to the community",
        securityExpert: "Demonstrated advanced security knowledge",
        defiMaster: "Mastered DeFi protocols and strategies",
        nftCreator: "Created and deployed an NFT collection",
        communityHero: "Helped others in the community",
        questComplete: "Completed your first quest",
        wizard: "Reached maximum wizard status",
      },
    },

    skills: {
      title: "Skill Progress",
      solidity: "Solidity",
      security: "Security",
      defi: "DeFi",
      nft: "NFTs",
      frontend: "Frontend",
      lvl: "Lvl",
    },

    activity: {
      title: "Recent Activity",
      empty: "No activity yet. Start your journey to see your progress!",
      deployed: "deployed contract",
      earned: "earned badge",
      completed: "completed quest",
      referred: "referred a friend",
      connected: "connected wallet",
      signed: "signed message",
      types: {
        deployed: "Deployed Contract",
        earned: "Earned Badge",
        completed: "Completed Quest",
        referred: "Referral",
        connected: "Wallet Connected",
        signed: "Message Signed",
      },
      descriptions: {
        deployed: "Successfully deployed a smart contract",
        earned: "Earned a new badge",
        completed: "Completed a quest",
        referred: "Referred a new user",
        connected: "Connected wallet to platform",
        signed: "Signed a verification message",
      },
    },

    social: {
      title: "Community",
      followers: "Followers",
      following: "Following",
      connections: "Connections",
      viewProfile: "View Profile",
      addFriend: "Add Friend",
      message: "Message",
      lvl: "Lvl",
      noConnections: "No connections yet. Start building to connect with other wizards!",
    },

    protocols: {
      title: "Protocols & Opportunities",
      interested: "Protocols Interested in You",
      opportunities: "Available Opportunities",
      apply: "Apply",
      viewDetails: "View Details",
      hired: "Hired!",
      noInterest: "No protocols have reached out yet. Keep building to attract attention!",
      interestedSince: "Interested",
      wantMore: "Want more opportunities?",
      completeQuests: "Complete more quests and earn badges to attract protocol attention!",
      names: {
        avalanche: "Avalanche",
        layerzero: "LayerZero",
        uniswap: "Uniswap",
      },
      descriptions: {
        avalanche: "Interested in your DeFi skills",
        layerzero: "Looking for cross-chain developers",
        uniswap: "Hiring for protocol development",
      },
      timeAgo: {
        days: "days ago",
        week: "week ago",
        weeks: "weeks ago",
      },
    },

    quests: {
      title: "Completed Quests",
      inProgress: "In Progress",
      completed: "Completed",
      available: "Available",
      startQuest: "Start Quest",
      continueQuest: "Continue",
      viewQuest: "View Details",
    },

    passport: {
      title: "Your Soulbound Passport",
      view: "View Passport",
      tier: "Current Tier",
    },

    portfolio: {
      title: "Your Portfolio",
      contracts: "Deployed Contracts",
      viewOnExplorer: "View on Explorer",
      noContracts: "No contracts deployed yet.",
    },
  },
};

export type TranslationKeys = typeof en;
