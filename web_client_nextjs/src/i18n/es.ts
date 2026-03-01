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
      
      recommended: {
        title: "Nuestras Mejores Opciones para Ti",
        description: "Recomendamos estas extensiones de navegador gratuitas, seguras y perfectas para principiantes.",
        
        wallets: {
          core: {
            name: "Core Wallet",
            tagline: "La Oficial",
            description: "Creada por el equipo de Avalanche. Perfecto si quieres explorar aplicaciones y juegos de Avalanche. ¡Rápido y con bajas comisiones!",
            features: ["Billetera oficial de Avalanche", "Transacciones súper rápidas", "Fácil de usar"],
          },
          metamask: {
            name: "MetaMask",
            tagline: "La Más Popular",
            description: "La billetera más ampliamente usada. ¡Piensa en ella como el 'Google Chrome' de las billeteras criptográficas - todos la conocen!",
            features: ["Funciona con la mayoría de los sitios web", "Gran comunidad", "Muchos tutoriales disponibles"],
          },
          rabby: {
            name: "Rabby Wallet",
            tagline: "La Opción Inteligente",
            description: "Una billetera más nueva que está ganando popularidad por sus funciones inteligentes y hermoso diseño.",
            features: ["Interfaz hermosa", "Mejores funciones de seguridad", "Desarrollo activo"],
          },
        },
        
        highlight: "¡Cualquiera de estas funciona muy bien! Elige la que te parezca mejor.",
      },
      
      installation: {
        title: "¡Hora de Instalar Tu Billetera!",
        description: "¿Listo para dar el paso? Esto es lo que debes hacer:",
        
        steps: {
          1: "Elige una de las billeteras de arriba",
          2: "Haz clic en el enlace de descarga (generalmente desde su sitio web oficial)",
          3: "Agrégala a tu navegador como extensión",
          4: "Sigue el asistente de configuración - te guiará para crear tu cuenta",
          5: "¡Escribe tu frase secreta y mantenla SEGURA!",
        },
        
        tip: "Consejo: Tu frase secreta es como la llave maestra de tu billetera. ¡Nunca la compartas con nadie, ni siquiera con nosotros!",
        highlight: "Tómate tu tiempo - ¡te esperaremos aquí!",
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
        title: "Firmar un Mensaje",
        description: "¡Casi llegas! Solo necesitamos que firmes un mensaje simple para verificar que tu billetera funcione correctamente.",
        instruction: "Haz clic en el botón de abajo y aprueba la solicitud de firma en la ventana emergente de tu billetera.",
        signButton: "Firmar Mensaje",
        signing: "Esperando firma...",
        success: "¡Perfecto! Tu billetera está conectada!",
        error: "La firma fue denegada.",
        tryAgainButton: "Intentar de Nuevo",
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
  },
};
