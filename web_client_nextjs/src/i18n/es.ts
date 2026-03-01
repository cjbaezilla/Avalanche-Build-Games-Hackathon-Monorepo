export const es = {
  onboarding: {
    title: "¡Bienvenido a Tu Viaje Web3!",
    subtitle: "Te ayudaremos a configurar todo lo que necesitas",
    startButton: "¡Empecemos!",
    backButton: "Volver",
    nextButton: "Continuar",
    skipButton: "Más Tarde",
    stepIndicator: "Paso {{current}} de {{total}}",
    languageToggle: "English",

    steps: {
      intro: {
        title: "¡Bienvenido, Futuro Explorador Web3!",
        description: "Estás a punto de descubrir un mundo nuevo y emocionante de posibilidades. Piensa en esto como obtener tu primera cuenta bancaria, pero mucho más genial.",
        highlight: "¡En solo unos minutos tendrás todo lo que necesitas para sumergirte en la web descentralizada!",
      },

      background: {
        title: "La Historia Detrás de Todo Esto",
        description: "¿Sabes cómo usas aplicaciones como Instagram, Gmail o tu banco? Esas empresas controlan tus datos y pueden decidir qué pasa con tu cuenta.",
        funFact: "En el internet antiguo (Web2), las empresas sonDueñas de tus cuentas. ¡En el nuevo internet (Web3), TÚ eres dueño de tus cuentas!",
        highlight: "Tu identidad digital te pertenece solo a ti.",
      },

      wallets: {
        title: "¿Qué es Exactamente una Billetera?",
        description: "¡No te preocupes, no hablamos de billeteras de cuero! Una billetera加密 es como un llavero mágico que guarda tus claves digitales.",
        metaphor: "Piensa en esto: Tu billetera = Tu identidad digital + Tu cuenta bancaria combinados",
        highlight: "¡Con una billetera puedes probar quién eres y manejar tus activos digitales sin pedir permiso a nadie!",
      },

      walletTypes: {
        title: "Tipos de Billeteras",
        description: "¡Al igual que hay diferentes tipos de billeteras reales, las billeteras criptográficas también vienen en varias formas!",

        types: {
          paper: {
            title: "Billetera de Papel",
            description: "Un papel impreso con tus claves escritas. ¡Antiguo pero seguro contra hackers!",
            pros: "Inmune a ataques digitales",
            cons: "Se puede perder o dañar fácilmente",
          },
          mobile: {
            title: "Billetera Móvil",
            description: "Una aplicación en tu teléfono que usas todos los días.",
            pros: "Súper conveniente, úsala en cualquier lugar",
            cons: "Si pierdes tu teléfono, necesitas respaldo",
          },
          extension: {
            title: "Extensión de Navegador",
            description: "Un pequeño complemento para tu navegador web. ¡Esto es en lo que nos enfocaremos!",
            pros: "Perfecto para usar sitios web y dapps",
            cons: "Necesita un navegador para funcionar",
          },
          hardware: {
            title: "Billetera de Hardware",
            description: "Un dispositivo físico que parece un USB.",
            pros: "Seguridad máxima, como una caja fuerte",
            cons: "Cuesta dinero, menos conveniente",
          },
        },

        highlight: "¡Para comenzar con dapps y sitios web, las extensiones de navegador son el camino a seguir!",
      },

      walletInstallation: {
        title: "¡Obtén tu Billetera Oficial de Mago!",
        description: "Para interactuar con la magia de la blockchain, necesitarás una billetera digital. ¡Piensa en ella como tu morral de mago donde guardas tus llaves y objetos mágicos!",
        wallets: {
          core: {
            name: "Core Wallet",
            tagline: "La Opción Oficial",
            description: "Creada específicamente para Avalanche. ¡Es rápida, segura y tiene todo lo que un mago en crecimiento necesita!",
            features: ["Soporte oficial de Avalanche", "Velocidad increíble", "Amigable para desarrolladores"],
          },
          metamask: {
            name: "MetaMask",
            tagline: "El Grimorio Clásico",
            description: "La billetera más famosa del reino. ¡Ideal para viajar entre diferentes mundos de blockchain!",
            features: ["Compatibilidad universal", "Enorme comunidad", "Probada en mil batallas"],
          },
          rabby: {
            name: "Rabby Wallet",
            tagline: "La Opción Inteligente",
            description: "Una billetera más nueva que está ganando popularidad por sus funciones inteligentes y hermoso diseño.",
            features: ["Interfaz hermosa", "Mejores funciones de seguridad", "Desarrollo activo"],
          }
        },
        installSteps: {
          title: "Guía de Inicio Rápido",
          1: "Elige tu billetera favorita y haz clic en su enlace",
          2: "Agrega la extensión a tu navegador",
          3: "Crea una nueva billetera y sigue los pasos de seguridad",
          4: "⚠️ CRÍTICO: ¡Guarda tus 12 palabras de 'Frase Secreta' en un lugar seguro y privado!",
        },
        tip: "Tu Frase Secreta es tu llave maestra. ¡Nunca se la muestres a nadie, ni siquiera al Gran Archimago!",
        highlight: "¡Elige una billetera a continuación para comenzar tu viaje!",
      },

      connection: {
        title: "Conecta Tu Billetera",
        description: "¡Excelente! Ahora conectemos tu billetera para verificar que todo funcione.",
        instruction: "Haz clic en el botón de abajo y aprueba la solicitud de conexión en la ventana emergente de tu billetera.",
        connectButton: "Conectar Billetera",
        checking: "Buscando billetera...",
        notFound: "Hmm, no pudimos encontrar tu billetera.",
        retryButton: "Intentar de Nuevo",
        hint: "¡Asegúrate de que tu extensión de billetera esté instalada y desbloqueada!",
      },

      signature: {
        title: "Verifica tu Identidad",
        description: "Ahora que estás conectado, firmemos un mensaje seguro para demostrar que eres el verdadero dueño de esta billetera. ¡Usamos el estándar 'Sign-In with Ethereum' para máxima seguridad!",
        instruction: "Haz clic en el botón de abajo y aprueba la solicitud de firma en tu billetera. ¡Es completamente gratis!",
        signButton: "Firmar Mensaje de Verificación",
        signing: "Lanzando el hechizo de verificación...",
        success: "¡Identidad verificada! Eres de verdad.",
        error: "La magia de la firma se disipó. ¡Por favor intenta de nuevo!",
        tryAgainButton: "Intentar de Nuevo",
        eipExplanation: "Sign-In with Ethereum (EIP-4361) es una forma segura de usar tu billetera para demostrar que eres dueño de tu identidad digital sin contraseñas ni terceros.",
        eipLink: "Leer sobre EIP-4361",
      },

      faucet: {
        title: "¡Recarga con el Faucet de Fuji!",
        description: "Cada acción en la blockchain requiere un poco de energía mágica llamada 'Comisiones de Gas'. Para ayudarte a comenzar sin gastar un solo centavo, usaremos un 'Faucet'!",
        gasFees: {
          title: "¿Qué son las Comisiones de Gas?",
          description: "Piensa en las comisiones de gas como el combustible necesario para hacer funcionar la computadora descentralizada. ¡Paga a los validadores que mantienen la red segura y procesan tus hechizos!",
        },
        faucetInfo: {
          title: "¿Qué es un Faucet?",
          description: "Un faucet (grifo) es una herramienta generosa que entrega tokens de 'prueba' gratuitos. ¡Estos tokens no tienen valor de mercado real, pero son perfectos para aprender y construir de forma segura!",
        },
        instruction: "1. Conecta tu billetera a la red 'Avalanche Fuji Testnet'.\n2. Elige uno de los grifos (faucets) abajo y proporciona tu dirección.\n3. ¡Solicita un poco de AVAX de prueba para potenciar tus primeros pasos!",
        faucetButton: "Faucet oficial Fuji",
        faucetConsoleButton: "Consola de Builder",
        verifyButton: "Verificar mi saldo manualmente",
        success: "¡Tokens mágicos detectados!",
        congratulations: "¡Felicidades! Tu morral de mago se está llenando de poder.",
        noTokens: "Aún no se detectan tokens. ¡Lanzar el hechizo del faucet de nuevo podría ayudar!",
        highlight: "¡Una vez que tu saldo refleje tu nuevo poder, estarás listo para el paso final!",
      },

      celebration: {
        title: "¡Lo Lograste!",
        description: "¡Felicidades, explorador web3! ¡Has completado tu viaje de incorporación!",

        reward: {
          title: "Tu Recompensa: NFT Soulbound",
          explanation: "Has ganado un NFT Soulbound especial - ¡piensa en él como tu insignia oficial de explorador!",
          meaning: "Esta credencial digital única prueba que eres un miembro verificado de nuestra comunidad. Está vinculada a tu billetera y no se puede transferir - ¡ahora es parte de tu identidad digital!",
          badge: "Tu Insignia",
        },

        mint: {
          title: "Reclama tu Pasaporte de Mago",
          description: "Tu misión final es acuñar (mint) tu identidad onchain. Este NFT Soulbound será tu llave al ecosistema de Vibe2Wizard.",
          button: "Mintear Mi Pasaporte",
          minting: "Lanzando el Hechizo de Minteo...",
          success: "¡Pasaporte Minteado!",
          error: "El hechizo de minteo falló. ¡Intenta de nuevo!",
          alreadyMinted: "¡El pasaporte ya está en tu morral!",
          viewOnExplorer: "Ver en el Explorador",
        },

        message: "Bienvenido al futuro descentralizado. ¡La aventura apenas comienza!",
        continueButton: "Empezar a Explorar",
      },
    },

    errors: {
      noWallet: "No se detectó billetera. Por favor instala una billetera primero.",
      connectionFailed: "Error al conectar. Por favor intenta de nuevo.",
      signatureFailed: "Error en la firma. Por favor intenta de nuevo.",
    },
  },

  common: {
    loading: "Cargando...",
    error: "¡Ups! Algo salió mal",
    retry: "Intentar de Nuevo",
    cancel: "Cancelar",
    confirm: "Confirmar",
    close: "Cerrar",
  },

  home: {
    hero: {
      title: "De Vibe Coder",
      titleHighlight: "a Mago Onchain",
      description: "La plataforma de dominio gamificado de Web3 y Solidity. Completa tareas, gana credenciales soulbound onchain y transforma tus habilidades en logros verificables en blockchain.",
      cta: "Empezar a Aprender",
    },
    features: {
      title: "¿Listo para Comenzar Tu Viaje?",
      description: "Completa desafíos, gana credenciales soulbound y conviértete en un Mago Onchain certificado.",
      cta: "Empezar Incorporación",
      cards: [
        {
          title: "Aprende Solidity",
          description: "Domina el desarrollo de smart contracts con lecciones interactivas",
        },
        {
          title: "Credenciales Soulbound",
          description: "Gana badges onchain que prueban tus habilidades",
        },
        {
          title: "Progreso Gamificado",
          description: "Sube de nivel y desbloquea logros mientras aprendes",
        },
        {
          title: "Mago Onchain",
          description: "Transforma de vibe coder a desarrollador certificado",
        },
      ],
    },
    benefits: {
      title: "Por Qué Aprender Web3 Lo Cambia Todo",
      description: "Ya sea que estés cambiando de carrera, mejorando tus habilidades, o simplemente tengas curiosidad sobre el futuro del internet, esto es lo que te espera en este viaje.",
      imageAlt: "Ilustración del viaje de aprendizaje Web3",
      cards: [
        {
          title: "Sin Riesgo, Habilidades Reales",
          description: "Practica desplegando smart contracts sin tocar dinero real. Nosotros patrocinamos tu gas para que aprendas haciendo, no perdiendo.",
          icon: "Shield",
        },
        {
          title: "Credenciales Que Realmente Importan",
          description: "Gana badges soulbound que viven onchain para siempre. A diferencia de un certificado de algún curso, cualquiera puede verificar exactamente lo que has construido.",
          icon: "Badge",
        },
        {
          title: "Tu Portafolio, Verificado",
          description: "Cada contrato que despliegues se convierte en parte de tu registro permanente. Muestra pruebas, no promesas, cuando postules a trabajos o grants.",
          icon: "Briefcase",
        },
        {
          title: "Puertas Laborales Que Se Abren",
          description: "Las DAOs y protocolos necesitan desesperadamente desarrolladores que realmente puedan entregar. Tu passport onchain les dice que eres la opción real.",
          icon: "Door",
        },
        {
          title: "Habilidades Que Viajan",
          description: "Tus credenciales funcionan entre cadenas. Construye en Avalanche, Ethereum o Arbitrum — tu reputación te sigue a todas partes.",
          icon: "Globe",
        },
        {
          title: "Aprendizaje Que Se Siente Como Un Juego",
          description: "Sube de nivel tu passport de iniciado a archimago. Desbloquea badges, escala leaderboards y gana recompensas mientras aprendes.",
          icon: "Gamepad",
        },
      ],
      placeholder: {
        title: "Tu Viaje Comienza Aquí",
        description: "Transforma tus habilidades en logros onchain verificables que duran para siempre",
      },
    },
    forStakeholders: {
      title: "Cómo las Organizaciones se Benefician de Vibe2Wizard",
      description: "Vibe2Wizard no es solo para aprendices — es una solución completa para organizaciones que necesitan verificar talento, construir comunidades y conectar con desarrolladores capacitados.",
      imageAlt: "Organizaciones beneficiándose de talento Web3 verificado",
      sections: [
        {
          title: "Para Protocolos e Instituciones",
          description: "Deja de gastar presupuesto en cazadores de airdrops que desaparecen Overnight. Obtén usuarios genuinamente comprometidos que entienden tu protocolo.",
          benefits: [
            {
              title: "Usuarios Reales, No Farmers",
              description: "La actividad onchain prueba interés genuino. No más direcciones de wallet que se conectan una vez y desaparecen.",
            },
            {
              title: "Campañas de Habilidades Verificadas",
              description: "Crea desafíos que realmente enseñan a los usuarios sobre tu protocolo mientras recompensas el engagement real.",
            },
            {
              title: "Crecimiento Rentable",
              description: "Cada dólar gastado llega a personas que importan. Patrocina gas para aprendices que se convierten en usuarios leales.",
            },
          ],
        },
        {
          title: "Para DAOs y Comités de Grants",
          description: "Toma decisiones de financiamiento informadas con prueba verificable de capacidad.",
          benefits: [
            {
              title: "Verificación de Recipientes de Grants",
              description: "Verifica que los solicitantes hayan construido lo que reclaman. No más portafolios inflados.",
            },
            {
              title: "Pipeline de Talento",
              description: "Accede a un grupo de desarrolladores verificados listos para contribuir a tu ecosistema.",
            },
            {
              title: "La Reputación Viaja",
              description: "Las credenciales funcionan entre cadenas. Construye un sistema de reputación que sigue a los desarrolladores a todas partes.",
            },
          ],
        },
        {
          title: "Para Empleadores y Reclutadores",
          description: "Finalmente, una forma de saber si los candidatos realmente saben de lo que hablan.",
          benefits: [
            {
              title: "Prueba de Trabajo",
              description: "Cada badge se enlaza a transacciones onchain. Ve exactamente qué han desplegado los candidatos.",
            },
            {
              title: "Habilidades Que No Se Pueden Falsificar",
              description: "Las credenciales soulbound no se pueden comprar ni transferir. Lo que ganan es verdaderamente suyo.",
            },
            {
              title: "Contratación Más Rápida",
              description: "Olvídate de las adivinanzas en entrevistas técnicas. Las credenciales hablan por sí solas.",
            },
          ],
        },
      ],
      cta: "Asociate Con Nosotros",
      ctaTitle: "¿Necesitas Talento Web3 Verificado?",
      ctaDescription: "Exploremos cómo nuestro sistema de pasaporte de desarrollador verificado puede apoyar tu crecimiento.",
    },
  },
  profile: {
    title: "Tu Perfil",
    editProfile: "Editar Perfil",
    member: "Miembro desde",
    level: "Nivel",
    experience: "Experiencia",
    xp: "XP",
    rank: "Rango",

    stats: {
      title: "Tus Estadísticas",
      deployments: "Despliegues",
      badges: "Insignias Ganadas",
      tasksCompleted: "Tareas Completadas",
      referrals: "Referidos",
      karma: "Puntos Karma",
    },

    badges: {
      title: "Tus Insignias",
      empty: "Sin insignias aún. ¡Completa misiones para ganar insignias!",
      viewAll: "Ver Todas las Insignias",
      earned: "Ganadas",
      names: {
        firstDeploy: "Primer Despliegue",
        bugHunter: "Cazador de Bugs",
        earlyAdopter: "Adoptante Temprano",
        topContributor: "Top Colaborador",
        securityExpert: "Experto en Seguridad",
        defiMaster: "Maestro DeFi",
        nftCreator: "Creador de NFTs",
        communityHero: "Héroe de la Comunidad",
        questComplete: "Misión Completa",
        wizard: "Mago",
      },
      descriptions: {
        firstDeploy: "Desplegaste tu primer smart contract",
        bugHunter: "Encontraste y reportaste una vulnerabilidad",
        earlyAdopter: "Te uniste durante la fase beta",
        topContributor: "Contribuiste significativamente a la comunidad",
        securityExpert: "Demostraste conocimientos avanzados de seguridad",
        defiMaster: "Dominaste protocolos y estrategias DeFi",
        nftCreator: "Creaste y desplegaste una colección de NFTs",
        communityHero: "Ayudaste a otros en la comunidad",
        questComplete: "Completaste tu primera misión",
        wizard: "Alcanzaste el estado máximo de mago",
      },
    },

    skills: {
      title: "Progreso de Habilidades",
      solidity: "Solidity",
      security: "Seguridad",
      defi: "DeFi",
      nft: "NFTs",
      frontend: "Frontend",
      lvl: "Niv",
    },

    activity: {
      title: "Actividad Reciente",
      empty: "Sin actividad aún. ¡Comienza tu viaje para ver tu progreso!",
      deployed: "desplegó contrato",
      earned: "ganó insignia",
      completed: "completó misión",
      referred: "refirió a un amigo",
      connected: "conectó billetera",
      signed: "firmó mensaje",
      types: {
        deployed: "Contrato Desplegado",
        earned: "Insignia Ganada",
        completed: "Misión Completada",
        referred: "Referido",
        connected: "Billetera Conectada",
        signed: "Mensaje Firmado",
      },
      descriptions: {
        deployed: "Desplegaste exitosamente un smart contract",
        earned: "Ganaste una nueva insignia",
        completed: "Completaste una misión",
        referred: "Referiste a un nuevo usuario",
        connected: "Conectaste tu billetera a la plataforma",
        signed: "Firmaste un mensaje de verificación",
      },
    },

    social: {
      title: "Comunidad",
      followers: "Seguidores",
      following: "Siguiendo",
      connections: "Conexiones",
      viewProfile: "Ver Perfil",
      addFriend: "Agregar Amigo",
      message: "Mensaje",
      lvl: "Niv",
      noConnections: "¡Sin conexiones aún. Comienza a construir para conectar con otros magos!",
    },

    protocols: {
      title: "Protocolos y Oportunidades",
      interested: "Protocolos Interesados en Ti",
      opportunities: "Oportunidades Disponibles",
      apply: "Aplicar",
      viewDetails: "Ver Detalles",
      hired: "¡Contratado!",
      noInterest: "Ningún protocolo ha contactado aún. ¡Sigue construyendo para atraer atención!",
      interestedSince: "Interesado",
      wantMore: "¿Quieres más oportunidades?",
      completeQuests: "¡Completa más misiones y gana insignias para atraer la atención de los protocolos!",
      names: {
        avalanche: "Avalanche",
        layerzero: "LayerZero",
        uniswap: "Uniswap",
      },
      descriptions: {
        avalanche: "Interesado en tus habilidades DeFi",
        layerzero: "Buscando desarrolladores cross-chain",
        uniswap: "Contratando para desarrollo de protocolo",
      },
      timeAgo: {
        days: "días atrás",
        week: "semana atrás",
        weeks: "semanas atrás",
      },
    },

    quests: {
      title: "Misiones Completadas",
      inProgress: "En Progreso",
      completed: "Completadas",
      available: "Disponibles",
      startQuest: "Iniciar Misión",
      continueQuest: "Continuar",
      viewQuest: "Ver Detalles",
    },

    passport: {
      title: "Tu Pasaporte Soulbound",
      view: "Ver Pasaporte",
      tier: "Nivel Actual",
    },

    portfolio: {
      title: "Tu Portafolio",
      contracts: "Contratos Desplegados",
      viewOnExplorer: "Ver en Explorador",
      noContracts: "No hay contratos desplegados aún.",
    },
  },
};
