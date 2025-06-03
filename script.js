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

    // Preguntas por nivel
    const questions = {
      basic: [
        { 
          question: "¿Qué significa HTML?", 
          answer: "hypertext markup language",
          correctAnswers: ["hypertext markup language"]
        },
        { 
          question: "¿Qué etiqueta se usa para crear un párrafo en HTML?", 
          answer: "<p>",
          correctAnswers: ["<p>", "p", "etiqueta p"]
        },
        { 
          question: "¿Qué símbolo se usa para comentarios en JavaScript?", 
          answer: "//",
          correctAnswers: ["//", "/**/"]
        },
        { 
          question: "¿Qué propiedad CSS se usa para cambiar el color de texto?", 
          answer: "color",
          correctAnswers: ["color"]
        },
        { 
          question: "¿Qué función se usa para imprimir en la consola en JavaScript?", 
          answer: "console.log()",
          correctAnswers: ["console.log()", "console.log"]
        },
        { 
          question: "¿Qué significa CSS?", 
          answer: "cascading style sheets",
          correctAnswers: ["cascading style sheets"]
        },
        { 
          question: "¿Qué tipo de dato es 42 en JavaScript?", 
          answer: "number",
          correctAnswers: ["number", "número"]
        },
        { 
          question: "¿Con qué etiqueta se inserta una imagen en HTML?", 
          answer: "<img>",
          correctAnswers: ["<img>", "img", "etiqueta img"]
        },
        { 
          question: "¿Qué método convierte un objeto JavaScript a string JSON?", 
          answer: "JSON.stringify()",
          correctAnswers: ["JSON.stringify()", "JSON.stringify"]
        },
        { 
          question: "¿Qué operador se usa para comparar valor y tipo en JavaScript?", 
          answer: "===",
          correctAnswers: ["==="]
        }
      ],
      intermediate: [
        { 
          question: "¿Qué es el DOM en JavaScript?", 
          answer: "Document Object Model",
          correctAnswers: ["document object model", "modelo de objetos del documento"]
        },
        { 
          question: "¿Qué es una función de callback?", 
          answer: "Una función que se pasa como argumento a otra función",
          correctAnswers: ["una función que se pasa como argumento a otra función", "función pasada como argumento"]
        },
        { 
          question: "¿Qué es un closure en JavaScript?", 
          answer: "Una función que tiene acceso al ámbito de su función padre incluso después de que ésta haya terminado",
          correctAnswers: ["función que tiene acceso al ámbito de su función padre", "función con acceso al ámbito externo"]
        },
        { 
          question: "¿Qué es el hoisting en JavaScript?", 
          answer: "El comportamiento de mover declaraciones al inicio de su ámbito",
          correctAnswers: ["comportamiento de mover declaraciones al inicio", "elevar declaraciones"]
        },
        { 
          question: "¿Qué es el event bubbling en JavaScript?", 
          answer: "La propagación de eventos desde el elemento hijo hacia los padres",
          correctAnswers: ["propagación de eventos", "eventos que se propagan hacia arriba"]
        },
        { 
          question: "¿Qué es una Promise en JavaScript?", 
          answer: "Un objeto que representa la eventual finalización o fallo de una operación asíncrona",
          correctAnswers: ["objeto para operaciones asíncronas", "manejo de asincronía"]
        },
        { 
          question: "¿Qué significa AJAX?", 
          answer: "Asynchronous JavaScript And XML",
          correctAnswers: ["asynchronous javascript and xml", "javascript y xml asíncronos"]
        },
        { 
          question: "¿Qué es el Local Storage en los navegadores?", 
          answer: "Un mecanismo para almacenar datos en el navegador de forma persistente",
          correctAnswers: ["almacenamiento en el navegador", "almacenamiento persistente"]
        },
        { 
          question: "¿Qué es una API REST?", 
          answer: "Una interfaz que usa HTTP para obtener datos o realizar operaciones",
          correctAnswers: ["interfaz que usa http", "arquitectura para apis web"]
        },
        { 
          question: "¿Qué significa el acrónimo SQL?", 
          answer: "Structured Query Language",
          correctAnswers: ["structured query language", "lenguaje de consulta estructurado"]
        }
      ],
      advanced: [
        { 
          question: "¿Qué es el patrón de diseño Singleton?", 
          answer: "Un patrón que restringe la instanciación de una clase a un único objeto",
          correctAnswers: ["patrón que restringe la instanciación", "una sola instancia"]
        },
        { 
          question: "Explica qué es el algoritmo de ordenamiento QuickSort", 
          answer: "Un algoritmo de ordenamiento que usa divide y vencerás",
          correctAnswers: ["algoritmo divide y vencerás", "ordenamiento por partición"]
        },
        { 
          question: "¿Qué es la complejidad computacional Big O?", 
          answer: "Una notación que describe el rendimiento o complejidad de un algoritmo",
          correctAnswers: ["notación para complejidad", "rendimiento de algoritmos"]
        },
        { 
          question: "¿Qué es la programación funcional?", 
          answer: "Un paradigma que trata la computación como evaluación de funciones matemáticas",
          correctAnswers: ["paradigma basado en funciones", "evaluación de funciones matemáticas"]
        },
        { 
          question: "¿Qué es un Web Worker en JavaScript?", 
          answer: "Un script que se ejecuta en segundo plano independiente de otros scripts",
          correctAnswers: ["script en segundo plano", "proceso paralelo en javascript"]
        },
        { 
          question: "¿Qué son los Service Workers?", 
          answer: "Scripts que el navegador ejecuta en segundo plano para manejar funciones sin conexión",
          correctAnswers: ["para funcionalidad offline", "scripts para caché y notificaciones"]
        },
        { 
          question: "¿Qué es WebAssembly (WASM)?", 
          answer: "Un formato de código binario para ejecutar código de alto rendimiento en navegadores",
          correctAnswers: ["formato de código binario", "código de alto rendimiento para navegadores"]
        },
        { 
          question: "¿Qué es la inyección de dependencias?", 
          answer: "Un patrón de diseño que implementa inversión de control para resolver dependencias",
          correctAnswers: ["inversión de control", "patrón para resolver dependencias"]
        },
        { 
          question: "¿Qué es GraphQL?", 
          answer: "Un lenguaje de consulta para APIs que permite a los clientes solicitar exactamente los datos que necesitan",
          correctAnswers: ["lenguaje de consulta para apis", "alternativa a rest"]
        },
        { 
          question: "¿Qué es la arquitectura de microservicios?", 
          answer: "Un enfoque para desarrollar aplicaciones como conjunto de pequeños servicios independientes",
          correctAnswers: ["servicios pequeños e independientes", "servicios descentralizados"]
        }
      ]
    };

    // Elementos del DOM
    const startButton = document.getElementById('start-btn');
    const restartButton = document.getElementById('restart-btn');
    const questionContainer = document.getElementById('question-container');
    const questionLevel = document.getElementById('question-level');
    const questionText = document.getElementById('question-text');
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

    // Crear estrellas en el fondo
    function createStars() {
      const starsContainer = document.getElementById('stars');
      const starsCount = 100;
      
      for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Posición aleatoria
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        // Tamaño aleatorio
        const size = Math.random() * 2 + 1;
        
        // Opacidad aleatoria
        const opacity = Math.random() * 0.5 + 0.5;
        
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = opacity;
        
        // Animación de parpadeo
        star.style.animation = `glow ${Math.random() * 3 + 2}s ease-in-out infinite alternate`;
        
        starsContainer.appendChild(star);
      }
    }

    // Obtener una pregunta aleatoria del nivel actual
    function getRandomQuestion() {
      const levelQuestions = questions[gameState.currentLevel];
      const usedIndices = gameState.usedQuestions[gameState.currentLevel];
      
      // Filtrar preguntas no usadas
      const availableQuestions = levelQuestions.filter((_, index) => !usedIndices.includes(index));
      
      if (availableQuestions.length === 0) {
        // Si todas las preguntas se han usado, reiniciar
        gameState.usedQuestions[gameState.currentLevel] = [];
        return levelQuestions[Math.floor(Math.random() * levelQuestions.length)];
      }
      
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      const question = availableQuestions[randomIndex];
      
      // Marcar esta pregunta como usada
      const originalIndex = levelQuestions.indexOf(question);
      gameState.usedQuestions[gameState.currentLevel].push(originalIndex);
      
      return question;
    }

    // Mostrar la pregunta actual
    function showQuestion() {
      const question = getRandomQuestion();
      questionText.textContent = question.question;
      
      // Actualizar el nivel mostrado
      let levelText = '';
      switch (gameState.currentLevel) {
        case 'basic':
          levelText = 'BÁSICO';
          questionLevel.style.color = 'var(--neon-blue)';
          break;
        case 'intermediate':
          levelText = 'INTERMEDIO';
          questionLevel.style.color = 'var(--neon-pink)';
          break;
        case 'advanced':
          levelText = 'AVANZADO';
          questionLevel.style.color = 'var(--neon-green)';
          break;
      }
      questionLevel.textContent = `NIVEL: ${levelText}`;
      
      // Mostrar el contenedor de preguntas
      questionContainer.style.display = 'block';
      
      // Pedir la respuesta al usuario
      setTimeout(() => {
        const userAnswer = prompt(question.question);
        
        if (userAnswer === null) {
          // El usuario canceló, esconder el contenedor de preguntas
          questionContainer.style.display = 'none';
          window.location.reload()
          return;
        }
        
        checkAnswer(userAnswer.trim().toLowerCase(), question);
      }, 500);
    }

    // Comprobar la respuesta del usuario
    function checkAnswer(userAnswer, question) {
      const isCorrect = question.correctAnswers.some(answer => 
        userAnswer.includes(answer.toLowerCase())
      );
      
      if (isCorrect) {
        sounds.correct.play();
        setTimeout(() => {
          sounds.break.play();
          breakBrick();
        }, 300);
        
        alert('¡Respuesta correcta! ¡Un ladrillo menos!');
      } else {
        sounds.wrong.play();
        alert(`Respuesta incorrecta. La respuesta correcta era: ${question.answer}`);
      }
      
      // Esconder el contenedor de preguntas
      questionContainer.style.display = 'none';
      
      // Si el juego no ha terminado, preguntar otra vez
      if (!checkGameCompletion()) {
        setTimeout(showQuestion, 1000);
      }
    }

    // Romper un ladrillo del muro actual
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
      
      // Encontrar un ladrillo no roto y romperlo
      const bricks = wallElement.querySelectorAll('.brick:not(.broken)');
      if (bricks.length > 0) {
        const brickToBreak = bricks[0];
        brickToBreak.style.animation = 'brickBreak 0.5s forwards';
        setTimeout(() => {
          brickToBreak.classList.add('broken');
        }, 500);
      }
      
      // Verificar si debemos cambiar de nivel
      if (bricksRemaining === 0) {
        if (gameState.currentLevel === 'basic') {
          gameState.currentLevel = 'intermediate';
        } else if (gameState.currentLevel === 'intermediate') {
          gameState.currentLevel = 'advanced';
        }
      }
    }

    // Verificar si el juego ha terminado
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

    // Mostrar el mensaje de ganador
    function showWinnerMessage() {
      sounds.win.play();
      winnerMessage.style.display = 'flex';
    }

    // Reiniciar el juego
    function restartGame() {
      // Reiniciar estado del juego
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
      
      // Ocultar mensaje de ganador
      winnerMessage.style.display = 'none';
    }

    // Iniciar el juego
    function startGame() {
      startButton.style.display = 'none';
      showQuestion();
    }

    // Event listeners
    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', restartGame);

    // Inicializar el fondo de estrellas
    createStars();