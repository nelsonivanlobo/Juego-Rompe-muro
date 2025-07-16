// Sonidos del juego
    const sounds = {
      correct: new Howl({
        src: ['https://assets.codepen.io/21542/howler-push.mp3']
      }),
      wrong: new Howl({
        src: ['https://assets.codepen.io/21542/howler-sfx-neg.mp3']
      }),
      break: new Howl({
        src: ['https://assets.codepen.io/21542/howler-shot.mp3']
      }),
      win: new Howl({
        src: ['https://assets.codepen.io/21542/howler-success.mp3']
      })
    };

    // Preguntas y respuestas por nivel (question/answer)
    const questions = {
  basic: [
    {
      question: "¿Qué significa HTML?",
      options: ["Hypertext markup language", "Hyperlink and Text Markup Language", "Hyper Tool Markup Language"],
      correctIndex: 0
    },
    {
      question: "¿Qué etiqueta se usa para crear un párrafo en HTML?",
      options: ["pr", "point", "p"],
      correctIndex: 2
    },
    {
      question: "¿Qué símbolo se usa para comentarios en JavaScript?",
      options: ["{}", "===", "//"],
      correctIndex: 2
    },
    {
      question: "¿Qué propiedad CSS se usa para cambiar el color de texto?",
      options: ["change", "color", "background"],
      correctIndex: 1
    },
    {
      question: "¿Qué función se usa para imprimir en la consola en JavaScript?",
      options: ["print.console()", "console.log()", "console.print()"],
      correctIndex: 1
    },
    {
      question: "¿Qué significa CSS?",
      options: ["Creative Style Syntax", "Computer Style Sheets", "cascading style sheets"],
      correctIndex: 2
    },
    {
      question: "¿Qué tipo de dato es 42 en JavaScript?",
      options: ["string", "boolean", "number"],
      correctIndex: 2
    },
    {
      question: "¿Con qué etiqueta se inserta una imagen en HTML?",
      options: ["pic", "image", "img"],
      correctIndex: 2
    },
    {
      question: "¿Qué método convierte un objeto JavaScript a string JSON?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.toString()"],
      correctIndex: 1
    },
    {
      question: "¿Qué operador se usa para comparar valor y tipo en JavaScript?",
      options: ["==", "===", "="],
      correctIndex: 1
    }
  ],

  intermediate: [
    {
      question: "¿Qué es el DOM en JavaScript?",
      options: [
        "Data Object Method",
        "Document Object Model",
        "Data Oriented Management"
      ],
      correctIndex: 1
    },
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
      question: "¿Cuál es la diferencia principal entre var, let y const en JavaScript?",
      options: [
        "const permite reasignación y redeclaración, var y let no",
        "var tiene ámbito global o de función, let y const tienen ámbito de bloque; const no permite reasignación",
        "let permite reasignación pero no redeclaración; var no tiene ámbito de bloque"
      ],
      correctIndex: 1
    },
    {
      question: "¿Qué es el hoisting en JavaScript?",
      options: [
        "El comportamiento de mover declaraciones al inicio de su ámbito",
        "Una forma de ordenar funciones por prioridad",
        "Una técnica para importar módulos externos"
      ],
      correctIndex: 0
    },
    {
      question: "¿Qué es el event bubbling en JavaScript?",
      options: [
        "Un método para evitar que un evento se dispare",
        "La propagación de eventos desde el elemento hijo hacia los padres",
        "Un evento que solo se ejecuta una vez"
      ],
      correctIndex: 1
    },
    {
      question: "¿Qué es una Promise en JavaScript?",
      options: [
        "Una función que garantiza ejecutar un código",
        "Una API para guardar datos locales",
        "Un objeto que representa la eventual finalización o fallo de una operación asíncrona"
      ],
      correctIndex: 2
    },
    {
      question: "¿Qué significa AJAX?",
      options: [
        "Asynchronous JavaScript And XML",
        "Automated JSON and XML",
        "Application JavaScript API"
      ],
      correctIndex: 0
    },
    {
      question: "¿Qué es el Local Storage en los navegadores?",
      options: [
        "Un sistema para ejecutar scripts locales",
        "Un mecanismo para almacenar datos en el navegador de forma persistente",
        "Una memoria temporal para datos volátiles"
      ],
      correctIndex: 1
    },
    {
      question: "¿Qué es una API REST?",
      options: [
        "Una interfaz que usa HTTP para obtener datos o realizar operaciones",
        "Una aplicación de streaming de datos",
        "Un archivo de configuración de servidor"
      ],
      correctIndex: 0
    },
    {
      question: "¿Qué significa el acrónimo SQL?",
      options: [
        "System Quality Logic",
        "Storage Query Level",
        "Structured Query Language"
      ],
      correctIndex: 2
    }
  ],

  advanced: [
    {
      question: "¿Qué es el patrón de diseño Singleton?",
      options: [
        "Permite crear múltiples instancias de una clase",
        "Es un patrón que restringe la instanciación de una clase a una única instancia",
        "Permite heredar múltiples clases"
      ],
      correctIndex: 1
    },
    {
      question: "¿Qué es el event loop en JavaScript y cuál es su función principal?",
      options: [
        "Una función que bloquea la ejecución hasta que una tarea asíncrona termina",
        "Un mecanismo que permite ejecutar código asincrónico manejando la cola de eventos y el call stack",
        "Un tipo de bucle que itera sobre objetos en el DOM"
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
        "Un paradigma que trata la computación como evaluación de funciones matemáticas",
        "Una técnica de programación orientada a objetos",
        "Una forma de estructurar archivos CSS"
      ],
      correctIndex: 0
    },
    {
      question: "¿Qué es un Web Worker en JavaScript?",
      options: [
        "Una librería para manipular el DOM",
        "Un script que se ejecuta en segundo plano independiente de otros scripts",
        "Una API para conectarse a bases de datos locales"
      ],
      correctIndex: 1
    },
    {
      question: "¿Qué son los Service Workers?",
      options: [
        "Scripts que el navegador ejecuta en segundo plano para manejar funciones sin conexión",
        "Un conjunto de funciones para hacer animaciones CSS",
        "Un sistema de versiones para archivos JS"
      ],
      correctIndex: 0
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
        "Un lenguaje de consulta para APIs que permite a los clientes solicitar exactamente los datos que necesitan",
        "Un lenguaje para diseñar interfaces gráficas",
        "Una librería para manipulación de gráficos SVG"
      ],
      correctIndex: 0
    },
    {
      question: "¿Qué es la arquitectura de microservicios?",
      options: [
        "Un tipo de base de datos relacional",
        "Un enfoque para desarrollar aplicaciones como conjunto de pequeños servicios independientes",
        "Una herramienta de diseño gráfico en línea"
      ],
      correctIndex: 1
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
      ${option}
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

// Función para verificar respuesta al presionar el botón Verificar
function verificarRespuesta() {
  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (!selectedOption) {
    alert('Seleccioná una opción antes de continuar.');
    return;
  }

  const selectedIndex = parseInt(selectedOption.value);

  if (selectedIndex === currentQuestion.correctIndex) {
    // Aquí puedes agregar efectos de sonido si tienes definidos sounds.correct.play()
    alert('¡Respuesta correcta! ¡Un ladrillo menos!');
    breakBrick();
  } else {
    alert(`Respuesta incorrecta. La respuesta correcta era: ${currentQuestion.options[currentQuestion.correctIndex]}`);
  }

  // Mostrar la siguiente pregunta o el mensaje final
  if (!checkGameCompletion()) {
    showQuestion();
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