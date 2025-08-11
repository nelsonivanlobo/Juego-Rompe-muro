// Sonidos del juego
    const sounds = {
      correct: new Howl({
        src: ['https://assets.codepen.io/21542/howler-push.mp3']
      }),
      wrong: new Howl({
        src: ['https://assets.codepen.io/21542/howler-sfx-neg.mp3']
      }),
      break: new Howl({
      src: ['https://actions.google.com/sounds/v1/impacts/crash.ogg'],
      volume: 0.2
      }),
      win: new Howl({
      src: ['https://actions.google.com/sounds/v1/cartoon/concussive_drum_hit.ogg'],
      volume: 0.3
      })
    };

    // Preguntas y respuestas por nivel (question/answer)
    const questions = {
      basic: [
  {
    question: "¿Qué es un algoritmo?",
    options: [
      "Una secuencia ordenada de pasos para resolver un problema",
      "Un error de programación",
      "Una base de datos"
    ],
    correctIndex: 0
  },
    {
      question: "¿Cuál de estos es un lenguaje de programación?",
      options: [
        "HTML", 
        "Python", 
        "CSS"],
      correctIndex: 1
    },
    {
      question: "¿Qué símbolo se usa para comparar igualdad en la mayoría de lenguajes de programación?",
      options: [
        "=", 
        "==", 
        "==="],
      correctIndex: 1
    },
    {
      question: "¿Qué tipo de estructura es un 'array'?",
      options: [
        "Estructura de control", 
        "Estructura de datos", 
        "Estructura de bucle"],
      correctIndex: 1
    },
    {
  question: "¿Qué tipo de bucle ejecuta el código al menos una vez antes de comprobar la condición?",
  options: [
    "for", 
    "while", 
    "do...while"],
  correctIndex: 2
    },
    {
      question: "¿Qué significa la sigla SQL?",
      options: [
        "Structured Query Language", 
        "System Question Language", 
        "Software Query Logic"],
      correctIndex: 0
    },
    {
    question: "¿Qué es un diagrama de flujo?",
    options: [
      "Una representación gráfica de un algoritmo o proceso",
      "Un tipo de API para bases de datos",
      "Una técnica para optimizar memoria"
    ],
    correctIndex: 0
  },
    {
      question: "¿Cuál de estos NO es un lenguaje de programación?",
      options: [
        "C++", 
        "Java", 
        "MySQL"],
      correctIndex: 2
    },
{
      question: "¿Qué significa API?",
      options: [
        "Advanced Program Index",
        "Application Programming Interface",  
        "Automatic Process Integration"],
      correctIndex: 1
    },
    {
      question: "¿Qué operador se usa para asignar un valor a una variable?",
      options: [
        "=", 
        "==", 
        "=>"],
      correctIndex: 0
    }
  ],

intermediate: [
  {
    question: "¿Qué es una función de callback?",
    options: [
      "Una función que retorna un valor booleano",
      "Una función que se ejecuta al terminar el script",
      "Una función que se pasa como argumento a otra función"
    ],
    correctIndex: 2
  },
  {
    question: "¿Qué es una API REST?",
    options: [
      "Una aplicación de streaming de datos",
      "Un archivo de configuración de servidor",
      "Una interfaz que usa HTTP para obtener datos o realizar operaciones"
    ],
    correctIndex: 2
  },
  {
  question: "¿Qué significa IDE?",
  options: [
    "Integrated Development Environment", 
    "Internal Data Execution", 
    "Internet Development Engine"],
  correctIndex: 0
},
    {
      question: "¿Qué significa 'debuggear'?",
      options: [
        "Mejorar la velocidad del código", 
        "Buscar y corregir errores", 
        "Cambiar el diseño del programa"],
      correctIndex: 1
    },
  {
    question: "¿Qué es un framework?",
    options: [
      "Una colección de herramientas y librerías",
      "Un tipo de base de datos",
      "Un lenguaje de programación"
    ],
    correctIndex: 0
  },
  {
  question: "¿Qué es un entorno de desarrollo?",
  options: [
    "Una red local para compartir datos",
    "Un espacio donde el programador escribe, ejecuta y prueba su código",
    "Un servidor en la nube"
  ],
  correctIndex: 1
},
  {
    question: "¿Qué es un servidor?",
    options: [
      "Un dispositivo o programa que provee servicios o datos a otros dispositivos",
      "Un lenguaje de programación orientado a servicios",
      "Un compilador de código"
    ],
    correctIndex: 0
  },
  {
    question: "¿Qué es un tipo de dato primitivo?",
    options: [
      "Un tipo de dato definido por el usuario",
      "Un tipo de dato utilizado solo en bases de datos",
      "Un tipo de dato básico que no se puede descomponer en otros más simples"
    ],
    correctIndex: 2
  },
  {
    question: "¿Qué es un repositorio de código?",
    options: [
      "Un compilador en línea",
      "Un lugar donde se almacenan y gestionan archivos de código fuente",
      "Un archivo ejecutable"
    ],
    correctIndex: 1
  },
  {
    question: "¿Qué es la programación concurrente?",
    options: [
      "La ejecución de múltiples tareas al mismo tiempo para mejorar el rendimiento",
      "La ejecución secuencial de funciones",
      "Un tipo de compilación"
    ],
    correctIndex: 0
  }
],

advanced: [
{
  question: "¿Qué es la arquitectura en capas?",
  options: [
    "Un patrón de diseño orientado a objetos",
    "Una forma de organizar el código separándolo en niveles con responsabilidades específicas",
    "Una técnica de optimización de algoritmos"
  ],
  correctIndex: 1
},
  {
    question: "¿Qué es la complejidad computacional Big O?",
    options: [
      "Un lenguaje de programación funcional",
      "Una notación que describe el rendimiento o complejidad de un algoritmo",
      "Una técnica de depuración en tiempo de ejecución"
    ],
    correctIndex: 1
  },
  {
    question: "¿Qué es la programación funcional?",
    options: [
      "Una técnica de programación orientada a objetos",
      "Una forma de estructurar archivos CSS",
      "Un paradigma que trata la computación como evaluación de funciones matemáticas"
    ],
    correctIndex: 2
  },
  {
    question: "¿Qué es la inyección de dependencias?",
    options: [
      "Una técnica para añadir archivos CSS dinámicamente",
      "Un patrón de diseño que implementa inversión de control para resolver dependencias",
      "Un método de autenticación entre servicios"
    ],
    correctIndex: 1
  },
  {
    question: "¿Qué es GraphQL?",
    options: [
      "Un lenguaje para diseñar interfaces gráficas",
      "Una librería para manipulación de gráficos SVG",
      "Un lenguaje de consulta para APIs que permite a los clientes solicitar exactamente los datos que necesitan",
    ],
    correctIndex: 2
  },
  {
    question: "¿Qué es la arquitectura de microservicios?",
    options: [
      "Un tipo de base de datos relacional",
      "Un enfoque para desarrollar aplicaciones como conjunto de pequeños servicios independientes",
      "Una herramienta de diseño gráfico en línea"
    ],
    correctIndex: 1
  },
  {
    question: "¿Qué es WebAssembly (WASM)?",
    options: [
      "Una hoja de estilo para JavaScript",
      "Un formato de código binario para ejecutar código de alto rendimiento en navegadores",
      "Una API para manejo de cookies"
    ],
    correctIndex: 1
  },
  {
    question: "¿Qué es un patrón de diseño?",
    options: [
      "Una solución reutilizable a un problema común en el desarrollo de software",
      "Un tipo de base de datos",
      "Una herramienta de diseño de interfaces"
    ],
    correctIndex: 0
  },
  {
  question: "¿Qué es CI/CD?",
  options: [
    "Un método para optimizar consultas a bases de datos",
    "Un protocolo de comunicación entre servidores",
    "Prácticas de integración continua y entrega/despliegue continuo en desarrollo de software"
  ],
  correctIndex: 2
},
  {
    question: "¿Qué es un sistema distribuido?",
    options: [
      "Un conjunto de computadoras que trabajan juntas como un solo sistema",
      "Un solo servidor ejecutando múltiples tareas",
      "Un algoritmo de búsqueda"
    ],
    correctIndex: 0
  }
]
};

// Crear estrellas en el fondo
function createStars() {
  const starsContainer = document.getElementById('stars');
  const starsCount = 100;

  for (let i = 0; i < starsCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const size = Math.random() * 2 + 1;
    const opacity = Math.random() * 0.5 + 0.5;

    star.style.left = `${left}%`;
    star.style.top = `${top}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.opacity = opacity;

    star.style.animation = `glow ${Math.random() * 3 + 2}s ease-in-out infinite alternate`;

    starsContainer.appendChild(star);
  }
}

const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainer = document.getElementById('question-container');
const questionLevel = document.getElementById('question-level');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const winnerMessage = document.getElementById('winner-message');
const basicWall = document.getElementById('basic-wall');
const intermediateWall = document.getElementById('intermediate-wall');
const advancedWall = document.getElementById('advanced-wall');

// Estado del juego
let gameState = {
  currentLevel: 'basic',
  basicBricksRemaining: 10,
  intermediateBricksRemaining: 10,
  advancedBricksRemaining: 10,
  usedQuestions: {
    basic: [],
    intermediate: [],
    advanced: []
  }
};


// Obtener una pregunta aleatoria del nivel actual sin repetir
function getRandomQuestion() {
  const levelQuestions = questions[gameState.currentLevel];
  const usedIndices = gameState.usedQuestions[gameState.currentLevel];

  // Filtrar preguntas no usadas
  const availableQuestions = levelQuestions.filter((_, index) => !usedIndices.includes(index));

  if (availableQuestions.length === 0) {
    // Reiniciar usadas si se agotaron todas las preguntas
    gameState.usedQuestions[gameState.currentLevel] = [];
    return getRandomQuestion();
  }

  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const question = availableQuestions[randomIndex];
  const originalIndex = levelQuestions.indexOf(question);
  gameState.usedQuestions[gameState.currentLevel].push(originalIndex);

  return question;
}

let currentQuestion = null;

// Mostrar la pregunta y opciones en pantalla
function showQuestion() {
  currentQuestion = getRandomQuestion();

  questionText.textContent = currentQuestion.question;

  // Limpiar opciones anteriores
  optionsContainer.innerHTML = '';

  // Crear radio buttons con las opciones
  currentQuestion.options.forEach((option, index) => {
    const label = document.createElement('label');
    label.innerHTML = `
      <input class="input" type="radio" name="option" value="${index}" />
      ${option}<br>
    `;
    optionsContainer.appendChild(label);
    optionsContainer.appendChild(document.createElement('br'));
  });

  // Mostrar nivel y cambiar color
  let nivelTexto = '';
  switch (gameState.currentLevel) {
    case 'basic':
      nivelTexto = 'BÁSICO';
      questionLevel.style.color = 'var(--neon-blue)';
      break;
    case 'intermediate':
      nivelTexto = 'INTERMEDIO';
      questionLevel.style.color = 'var(--neon-pink)';
      break;
    case 'advanced':
      nivelTexto = 'AVANZADO';
      questionLevel.style.color = 'var(--neon-green)';
      break;
  }
  questionLevel.textContent = `NIVEL: ${nivelTexto}`;

  // Mostrar contenedor pregunta
  questionContainer.style.display = 'block';
}


function verificarRespuesta() {
  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (!selectedOption) {
    alertify.alert('Atención', 'Seleccioná una opción antes de continuar.');
    return;
  }

  const selectedIndex = parseInt(selectedOption.value);

  if (selectedIndex === currentQuestion.correctIndex) {
    alertify.success('¡Respuesta correcta! ¡Un ladrillo menos!')
      .dismissOthers()
      .delay(1000);
    
    breakBrick();

    // Solo si el juego no terminó, mostrar siguiente pregunta
    if (!checkGameCompletion()) {
      showQuestion();
    }

  } else {
    alertify.error('Respuesta incorrecta. Volviendo a empezar...')
      .dismissOthers()
      .delay(2000);

    // Detener ejecución y recargar después de 2 segundos
    setTimeout(() => {
      location.reload();
    }, 2000);

    return; // 👈 Evita que siga ejecutando el resto de la función
  }
}

// Función para romper un ladrillo del muro actual
function breakBrick() {
  let wallElement;
  let bricksRemaining;

  switch (gameState.currentLevel) {
    case 'basic':
      wallElement = basicWall;
      gameState.basicBricksRemaining--;
      bricksRemaining = gameState.basicBricksRemaining;
      break;
    case 'intermediate':
      wallElement = intermediateWall;
      gameState.intermediateBricksRemaining--;
      bricksRemaining = gameState.intermediateBricksRemaining;
      break;
    case 'advanced':
      wallElement = advancedWall;
      gameState.advancedBricksRemaining--;
      bricksRemaining = gameState.advancedBricksRemaining;
      break;
  }

  const bricks = wallElement.querySelectorAll('.brick:not(.broken)');
  if (bricks.length > 0) {
    const brickToBreak = bricks[0];
    sounds.break.play();
    brickToBreak.style.animation = 'brickBreak 0.5s forwards';
    setTimeout(() => {
      brickToBreak.classList.add('broken');
    }, 500);
  }

  // Cambiar nivel si no quedan ladrillos
  if (bricksRemaining === 0) {
    if (gameState.currentLevel === 'basic') {
      gameState.currentLevel = 'intermediate';
    } else if (gameState.currentLevel === 'intermediate') {
      gameState.currentLevel = 'advanced';
    } else if (gameState.currentLevel === 'advanced') {
      // Juego terminado
      showWinnerMessage();
    }
  }
}

// Verificar si el juego terminó
function checkGameCompletion() {
  const totalBricksRemaining =
    gameState.basicBricksRemaining +
    gameState.intermediateBricksRemaining +
    gameState.advancedBricksRemaining;

  if (totalBricksRemaining === 0) {
    showWinnerMessage();
    return true;
  }
  return false;
}

// Mostrar mensaje ganador
function showWinnerMessage() {
  winnerMessage.style.display = 'flex';
  questionContainer.style.display = 'none';
  startButton.style.display = 'none';
  // Si tienes sonidos puedes reproducirlos aquí
}

// Reiniciar el juego
function restartGame() {
  gameState = {
    currentLevel: 'basic',
    basicBricksRemaining: 10,
    intermediateBricksRemaining: 10,
    advancedBricksRemaining: 10,
    usedQuestions: {
      basic: [],
      intermediate: [],
      advanced: []
    }
  };

  // Restaurar ladrillos
  document.querySelectorAll('.brick').forEach(brick => {
    brick.classList.remove('broken');
    brick.style.animation = '';
  });

  winnerMessage.style.display = 'none';
  startButton.style.display = 'inline-block';
  questionContainer.style.display = 'none';
}

// Iniciar el juego
function startGame() {
  startButton.style.display = 'none';
  showQuestion();
}

function salir() {
  location.reload(); // Recarga la página
}

// Event listeners
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

// Inicializar fondo
createStars();