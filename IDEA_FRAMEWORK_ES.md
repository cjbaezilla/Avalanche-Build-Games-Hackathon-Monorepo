# Marco de Ideas: Validación de Proyectos Blockchain

## Resumen Ejecutivo

Este documento proporciona una metodología estructurada para validar y desarrollar nuevas ideas de proyectos blockchain. Incluye:

- **Filtro de 6 Preguntas para Blockchain**: Evaluación rápida para determinar si blockchain es la tecnología adecuada
- **12 Filtros de Proyecto**: Criterios de evaluación detallados que cubren aspectos regulatorios, técnicos y de negocio
- **Lienzo de Integración**: Marco para definir puntos de dolor empresariales y primitivas on-chain
- **Encuadre del Problema**: Enfoque centrado en el usuario para definir usuarios objetivo y declaraciones de problema
- **Estrategia de Producto**: Propósito central, dirección y lineamientos de propuesta de valor
- **Principios de Diseño Centrado en el Usuario**: Mejores prácticas de UX para productos Web3

**Propósito**: Evaluar, validar y dar forma sistemáticamente a nuevas ideas de proyectos antes del desarrollo, asegurando que blockchain sea la solución apropiada y que el producto aborde necesidades reales del usuario.

---

# El Filtro de 6 Preguntas para Blockchain

### 1. ¿Es el proceso repetible o automatizable?

¿Puede un intermediario ser reemplazado por código con el mismo nivel de confianza?

### 2. ¿Es continuo, no único?

Las transacciones únicas no justifican el desarrollo de blockchain

### 3. ¿Múltiples partes con posibles conflictos?

Más partes interesadas = caso más fuerte para la descentralización

### 4. ¿Múlti partes reconciliando datos?

Blockchain permite la reconciliación en tiempo real en un libro compartido

### 5. ¿Se está transfiriendo algo de valor?

Dinero, activos, información, cuanto mayor el valor, más fuerte el caso

### 6. ¿Los registros necesitan ser permanentes?

La inmutabilidad es importante para cosas como el historial de propiedades o registros médicos

---

# Filtros de Proyecto

### 1. Claridad Regulatoria

* ¿Existe un marco legal existente o emergente que rija este caso de uso?
* ¿Cumple con las regulaciones locales, nacionales e internacionales?
* ¿Puede la solución operar dentro de los límites legales actuales sin requerir actos ilegales?

### 2. Liquidación

* Agnóstico de ubicación: ¿Pueden las transacciones liquidarse en cualquier lugar sin restricciones geográficas?
* Sin tiempo de inactividad: ¿Se requiere disponibilidad 24/7/365?
* Misma experiencia global: ¿Se necesita una experiencia de usuario consistente independientemente de la ubicación?

### 3. Trazabilidad

* Registro de auditoría inmutable: ¿Los registros necesitan ser a prueba de manipulaciones y verificables permanentemente?
* Verificación multipartita: ¿Múltiples partes interesadas necesitan validar y aprobar cambios?

### 4. Activos Tokenizados

* Programas de fidelización: Puntos y recompensas que pueden transferirse, negociarse o canjearse en diferentes plataformas
* Propiedad on-chain: Representación digital de activos del mundo real con propiedad verificable
* Punto de entrada de bajo riesgo: Proyectos que minimizan el riesgo del usuario a través de fraccionamiento o productos estructurados

### 5. Modelo de Confianza Descentralizado

* Operación sin confianza: ¿Puede el sistema operar sin depender de un único intermediario de confianza?
* Dirigido por consenso: ¿Las decisiones se toman a través de acuerdo distribuido en lugar de autoridad central?
* Riesgo de contraparte reducido: ¿Las partes pueden transaccionar sin necesidad de confiar individualmente entre sí?

### 6. Liquidación Transfronteriza

* Soporte multi-moneda: ¿La solución necesita manejar transacciones en diferentes monedas?
* Accesibilidad global: ¿Los participantes de cualquier parte del mundo pueden acceder al sistema?
* Cumplimiento regulatorio entre jurisdicciones: ¿La solución necesita navegar por diferentes marcos regulatorios?

### 7. Reconciliación en Tiempo Real

* Datos blockchain en vivo: ¿La solución requiere visibilidad inmediata de los cambios de estado on-chain?
* Liquidación automatizada: ¿Las transacciones pueden reconciliarse y liquidarse automáticamente?
* Auditoría instantánea: ¿Los interesados necesitan acceso inmediato a registros de transacciones verificadas?

### 8. Auditoría y Cumplimiento

* Registro de auditoría completo: ¿Se requieren registros detallados de todas las acciones para cumplimiento?
* Informes regulatorios: ¿La solución necesita generar informes para las autoridades?
* Operaciones transparentes: ¿Todos los participantes necesitan visibilidad en el historial de transacciones?

### 9. Valor Económico

* Generación de ingresos: ¿La solución crea nuevas fuentes de ingresos o monetiza activos existentes?
* Eficiencia de costos: ¿La solución reduce los costos operativos o elimina tarifas de intermediarios?
* Mitigación de riesgos: ¿La solución reduce los riesgos financieros, operativos o de reputación?

### 10. Privacidad del Registro

* Protección de datos: ¿El registro contiene información sensible que requiere controles de privacidad?
* Divulgación selectiva: ¿Los participantes pueden revelar solo datos específicos sin exponer registros completos?
* Cumplimiento: ¿La solución necesita cumplir con regulaciones de protección de datos (GDPR, etc.)?
* Control de acceso: ¿Se necesitan permisos granulares para restringir quién puede ver o modificar entradas?

### 11. Silos de Información / Portabilidad de Datos

* Datos desbloqueados: ¿La solución rompe los silos de información y hace que los datos sean accesibles entre sistemas?
* Interoperabilidad: ¿Los datos pueden compartirse sin problemas entre diferentes plataformas u organizaciones?
* Portabilidad de datos: ¿Los usuarios pueden transferir sus datos o activos entre diferentes servicios?
* Estándares abiertos: ¿La solución utiliza formatos estandarizados y abiertos para evitar el bloqueo del proveedor?

### 12. Credibilidad y Longevidad Empresarial

* Historial: ¿Cuánto tiempo ha estado la red operativa y produciendo bloques?
* Adopción institucional: ¿Empresas establecidas, instituciones financieras o entidades gubernamentales ya la utilizan?
* Respaldo de fundación: ¿Hay un equipo bien financiado, una fundación activa o inversores comprometidos que aseguran el desarrollo continuo?
* Preparación para el futuro: ¿Hay una hoja de ruta clara y mecanismo de actualización para evitar que la red quede obsoleta?

---

# El Lienzo de Integración

### ¿Qué dolor empresarial estoy resolviendo?

Sé específico. ¿Qué les cuesta dinero o les genera riesgo hoy?

### ¿Por qué la tecnología tradicional no puede resolverlo?

¿Qué requiere verificación sin confianza, inmutable o multipartita?

### ¿Cuál es la primitiva on-chain?

¿Token? ¿Contrato inteligente? ¿NFT para propiedad? ¿Capa de liquidación?

### ¿Cuál es la versión piloto de menor riesgo?

¿Qué puede decir que sí un empresa reacia al riesgo en 90 días?

---

# Encuadre del Problema

## Las 4 partes de un proceso de Encuadre del Problema

Un proceso completo de encuadre del problema te dirá 4 cosas:

* ¿Cuál es el problema?, ¿Cuáles son las dificultades?, ¿Qué tarea necesita lograrse?, ¿Qué punto de dolor necesita aliviarse?

* ¿Quién se ve afectado?, ¿Quién está experimentando el problema?, ¿Puede este usuario especificarse más (por persona, motivación, razón por la que está en la situación)?

* ¿Dónde sucede?, ¿Cuál es el contexto en el que el usuario experimenta el problema?, ¿Es en un espacio físico o digital?, ¿Quién más está involucrado?

* ¿Por qué vale la pena resolver este problema?, ¿Qué valor aporta al usuario?, ¿Por qué blockchain es la tecnología apropiada para resolver este problema?

## Declaración del Problema

### Definiendo tu Declaración del Problema

Un proceso riguroso de encuadre de usuario te permite definir una declaración de problema enfocada y bien articulada — una que te guiará a través de las siguientes fases de investigación, ideación, desarrollo de producto y presentación.

### Las Declaraciones de Problema articuladas deben ser:

* Breves: Si puedes condensar tu declaración de problema en pocas oraciones, otros entenderán rápidamente en qué te enfocas y por qué, y qué está fuera de alcance.

* Fundamentadas y sin sesgo: Mira toda la información que tienes con una mente abierta y honesta

* Raíz: Cuando saltamos a conclusiones a menudo resolvemos los síntomas, mientras que las declaraciones de problema reales se enfocan en la causa raíz

* Positivas y Negativas: Las declaraciones de problema también pueden capturar oportunidades, no solo problemas.

## Definir el Usuario Objetivo

### 1. Convierte problemas vagos en solucionables

"Usuarios" no es una entrada de producto utilizable. Las personas claras permiten a los equipos encuadrar problemas con precisión en lugar de construir características genéricas basadas en suposiciones.

### 2. Alinea a todo el equipo alrededor del mismo usuario

Las personas crean un lenguaje compartido para que las decisiones se guíen por las necesidades de un usuario claramente definido, orientando la hoja de ruta del producto y la dirección del backlog.

### 3. Permite una mejor priorización y enfoque centrado en el usuario

Todo equipo de producto enfrenta intercambios. Cuando una persona está definida, la priorización se vuelve estratégica en lugar de política, colocando las prioridades de los usuarios primero.

### 4. Mejora el ajuste producto-mercado

Los productos fuertes apuntan a ser excepcionalmente valiosos para un grupo específico. Esta profundidad es lo que lleva a la adopción y retención reales.

### 5. Elimina el sesgo que previene el pensamiento orientado a soluciones

Sin personas, los equipos a menudo saltan directamente a características o tecnología. Las personas imponen un enfoque centrado en el usuario, dejando las decisiones de características o funcionales para el final.

### 6. Agudiza las decisiones de diseño y UX

El diseño trata de intercambios: simplicidad vs. potencia, orientación vs. flexibilidad. Esto lleva a experiencias más intuitivas e intencionales.

## Personas, Segmentos y Modelos Mentales

### Definir Segmentos, Personas de Usuario y Modelos Mentales

Hay 3 aspectos interdependientes que necesitas explorar para definir tu usuario objetivo:

* Segmentos: definen para quién estás construyendo
* Modelos mentales: definen cómo piensan
* Personas: lo hacen utilizable para decisiones de producto

* Sin personas: los segmentos permanecen abstractos.
* Sin segmentos: las personas se vuelven ficticias.
* Sin modelos mentales: el UX se desalinea.

### Cómo elaborar este análisis de usuario en información y conocimientos significativos

### 1. Define el Segmento en 4 dimensiones:

* Metas: ¿Qué están tratando de lograr?
* Miedos: ¿De qué tienen miedo?
* Conocimiento: ¿Qué ya entienden?
* Comportamiento: ¿Cómo resuelven esto actualmente?

### 2. Usa Modelos Mentales para explicar:

* ¿Qué cree este usuario sobre cómo funciona el sistema?

### 3. Crea una Persona de Usuario para definir:

* Una representación realista y específica de tu usuario principal dentro de un segmento.

### ¿Cómo influirían estos aspectos en mi producto?

Las características de tu Persona de Usuario determinarán:

1. Alcance y Priorización de Funciones del MVP
2. Nivel de Complejidad
3. Diseño de Confianza y Seguridad
4. Lenguaje y Vocabulario
5. Experiencia de Usuario General
6. Posicionamiento y Mensajes del Producto
7. Estrategia de Crecimiento

---

# Estrategia de Producto

### Propósito Central, Dirección del Producto y Propuesta de Valor

La tecnología no es el producto, necesitas definir tu estrategia de producto.

### El propósito central responde por qué importa.

* ¿Por qué este producto merece existir?

### La dirección del producto es tu enfoque estratégico.

* Un usuario específico
* Un caso de uso específico
* Un resultado específico

### La propuesta de valor es la razón por la que alguien te elegiría.

* ¿Por qué es mejor que lo que usan hoy?
* ¿Por qué es mejor que otras soluciones Web3 similares?
* ¿Cuál es mi propuesta de valor única o diferencial?

---

# Productos Centrados en el Usuario

## Lo que "Centrado en el Usuario" Realmente Significa en Web3

Hay algunos principios clave para construir productos centrados en el usuario:

* Prioriza resolver necesidades reales del usuario — no solo un caso de uso de blockchain
* Abstrae mecánicas innecesarias de crypto
* Coincide con el modelo mental del usuario
* Asume conocimiento cero y minimiza la carga cognitiva
* Diseña para acciones irreversibles — previene errores antes de que sucedan
* Proporciona guía de recuperación de errores y educación de seguridad
* Construye confianza a través de transparencia
* Advierte sobre acciones irreversibles y previene acciones peligrosas
* Nunca deja a los usuarios esperando sin retroalimentación

## 1 Abstraer Complejidad

Los usuarios no necesitan conocer terminología técnica, procesos o conceptos para usar un producto Web3. Necesitas:

* Automatizar/Ocultar tantos pasos como sea posible
* Eliminar decisiones innecesarias
* Ocultar lenguaje técnico
* Priorizar hábitos y comportamientos aprendidos del usuario
* Evitar interfaces técnicas abrumadoras

### Mejores Prácticas de UX

* Abstracción de Cuenta
* Inicios de sesión biométricos
* Recuperación Social
* Carteras sin semilla
* Meta TXs.
* Firmas de Tx Legibles por Humanos.

## 2 Diseñar para Familiaridad

### Construye productos Web3 que se sientan reconocibles

Un producto Web3 centrado en el usuario minimiza el cambio conceptual y conductual:

* Mapea acciones de blockchain a conceptos del mundo real (pagar, poseer, transferir, confirmar)
* Preserva comportamientos digitales establecidos (transferencias bancarias, flujos de checkout, patrones de inicio de sesión)
* Introduce nuevos conceptos de Web3 progresivamente, no todo de una vez
* Se alinea con modelos mentales existentes de Web2 y herramientas crypto-nativas
* Innova en tecnología e infraestructura — no en comportamiento básico

### Mejores Prácticas de UX

* Usa patrones de confirmación familiares
* Proporciona estados claros de transacciones
* Usa valores predeterminados seguros para reducir la fatiga de decisiones
* Resalta visualmente las acciones irreversibles
* Mantén la terminología consistente y familiar

## 3 Diseñar para Confianza

Para adoptar un producto, los usuarios necesitan señales claras de confianza y reputación verificable:

* Advertencias claras de riesgo y acciones irreversibles
* Hace los costos predecibles y Simples (sin tarifas sorpresa)
* Patrones de prevención y recuperación de errores
* Características de simulación de transacciones
* Acciones de contrato legibles por humanos
* Protección contra estafas y Validación de Auditorías de Seguridad
* Muestra estado y confirma éxito en lenguaje simple

### Mejores Prácticas de UX

* Insignias de Auditoría
* Marca de Última Verificación
* Verificación de Contrato
* Reputación On-chain
* Prevención y Recuperación de Errores
* Divulgación progresiva de información

## 4 Validar con Usuarios

### Las suposiciones crean productos — la validación crea productos

Si no validas con usuarios reales, no estás construyendo un producto... estás construyendo una creencia:

* Cada característica y backlog se basa en una hipótesis
* Cada decisión de UX es una suposición sobre el comportamiento del usuario
* Cada idea de producto asume que existe una necesidad real
* Cada modelo de token asume que a los usuarios les importan los incentivos
* Cada diseño de interfaz asume que los usuarios entienden nuestro flujo de UX/UI

### Mejores Prácticas de UX

* Entrevistas con usuarios
* Pruebas de usabilidad basadas en tareas
* Registro en lista de espera
* Pruebas A/B

---

# Fuentes

- Raquel Raigal: [https://x.com/rraigal_](https://x.com/rraigal_) | [Presentación](https://docs.google.com/presentation/d/e/2PACX-1vRtmYii9GBGIgjgbxBDoS8DLcSAz8fLbKUIiCv-d1xNPjzvMcpKhhNOpCduKNNHEg/pub)
- DH3: [Presentación](https://drive.google.com/file/d/1Y6c8dOTKJKs0BuO8UMyHBnrufXYeguEw/view)
