/* ====================================================================
   HAD (SNAKE) — logika hry
   --------------------------------------------------------------------
   Tenhle soubor je MOZEK hry. Čti ho odshora dolů — komentáře
   vysvětlují každou část. Vzhled hry je v style.css.

   Jak hra funguje (ve zkratce):
   1. Herní plocha je mřížka 20×20 políček.
   2. Had je seznam (pole) políček — první políčko je hlava.
   3. Každých pár milisekund se had posune o jedno políčko.
   4. Když hlava narazí na jídlo → had vyroste a přičte se skóre.
   5. Když hlava narazí do zdi nebo do vlastního těla → konec hry.
   ==================================================================== */

// ------------------------------------------------------------------
// 1. NASTAVENÍ — čísla, která můžeš měnit a sledovat, co se stane
// ------------------------------------------------------------------
const GRID_SIZE = 20;          // kolik políček má mřížka (20×20)
const CELL_SIZE = 20;          // velikost jednoho políčka v pixelech
const START_SPEED_MS = 150;    // jak často se had hýbe (menší = rychlejší)
const SPEED_UP_EVERY = 5;      // po kolika jídlech se hra zrychlí
const SPEED_UP_BY_MS = 10;     // o kolik ms se zrychlí
const MIN_SPEED_MS = 60;       // rychlostní strop, ať to není nehratelné

// ------------------------------------------------------------------
// 2. NAPOJENÍ NA HTML — najdeme si prvky ze stránky index.html
// ------------------------------------------------------------------
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");          // "štětec", kterým kreslíme
const scoreEl = document.getElementById("score");
const highScoreEl = document.getElementById("highScore");
const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlayTitle");
const overlayText = document.getElementById("overlayText");
const startButton = document.getElementById("startButton");

// Barvy si bereme ze style.css, aby skiny fungovaly i tady
const cssVars = getComputedStyle(document.documentElement);
const COLOR_SNAKE = cssVars.getPropertyValue("--barva-hada").trim();
const COLOR_HEAD = cssVars.getPropertyValue("--barva-hlavy").trim();
const COLOR_FOOD = cssVars.getPropertyValue("--barva-jidla").trim();
const COLOR_GRID = cssVars.getPropertyValue("--barva-mrizky").trim();

// ------------------------------------------------------------------
// 3. STAV HRY — proměnné, které se během hraní mění
// ------------------------------------------------------------------
let snake;          // pole políček hada, např. [{x:10,y:10}, {x:9,y:10}]
let direction;      // kam had právě jede, např. {x:1,y:0} = doprava
let nextDirection;  // kam zahne při dalším kroku (kvůli rychlému mačkání)
let food;           // políčko s jídlem, např. {x:5,y:7}
let score;          // aktuální skóre
let speedMs;        // aktuální rychlost hry
let gameLoopId;     // "budík" herní smyčky (abychom ho uměli vypnout)
let isRunning = false;
let isPaused = false;

// Rekord se ukládá do prohlížeče — přežije i zavření stránky
let highScore = Number(localStorage.getItem("snakeHighScore")) || 0;
highScoreEl.textContent = highScore;

// ------------------------------------------------------------------
// 4. START NOVÉ HRY — všechno vynulujeme a spustíme smyčku
// ------------------------------------------------------------------
function startGame() {
  // Had začíná uprostřed, má 3 články a jede doprava
  snake = [
    { x: 10, y: 10 },  // hlava
    { x: 9, y: 10 },
    { x: 8, y: 10 },   // ocas
  ];
  direction = { x: 1, y: 0 };
  nextDirection = { x: 1, y: 0 };
  score = 0;
  speedMs = START_SPEED_MS;
  scoreEl.textContent = score;
  placeFood();

  overlay.classList.add("hidden");   // schováme úvodní obrazovku
  isRunning = true;
  isPaused = false;
  scheduleNextStep();
}

// Naplánuje další krok hry. setTimeout = "za speedMs milisekund
// zavolej funkci gameStep". Tak vzniká herní smyčka.
function scheduleNextStep() {
  clearTimeout(gameLoopId);
  gameLoopId = setTimeout(gameStep, speedMs);
}

// ------------------------------------------------------------------
// 5. JEDEN KROK HRY — srdce celé hry, opakuje se pořád dokola
// ------------------------------------------------------------------
function gameStep() {
  if (!isRunning || isPaused) return;

  direction = nextDirection;

  // Spočítáme, kde bude hlava po tomhle kroku
  const head = snake[0];
  const newHead = { x: head.x + direction.x, y: head.y + direction.y };

  // KOLIZE SE ZDÍ: vyjeli jsme ven z mřížky?
  const hitWall =
    newHead.x < 0 || newHead.x >= GRID_SIZE ||
    newHead.y < 0 || newHead.y >= GRID_SIZE;

  // KOLIZE S TĚLEM: je nová hlava na políčku, kde už had je?
  const hitSelf = snake.some(
    (segment) => segment.x === newHead.x && segment.y === newHead.y
  );

  if (hitWall || hitSelf) {
    gameOver();
    return;
  }

  // Posun hada: novou hlavu přidáme dopředu...
  snake.unshift(newHead);

  // ...a pokud jsme NEsnědli jídlo, ocas odebereme (had má stejnou délku).
  // Pokud jsme jídlo snědli, ocas necháme → had vyroste o 1 článek.
  if (newHead.x === food.x && newHead.y === food.y) {
    eatFood();
  } else {
    snake.pop();
  }

  draw();
  scheduleNextStep();
}

// ------------------------------------------------------------------
// 6. JÍDLO — přičtení skóre, zrychlení, nové jídlo
// ------------------------------------------------------------------
function eatFood() {
  score += 1;
  scoreEl.textContent = score;

  // Každých SPEED_UP_EVERY jídel hru trochu zrychlíme
  if (score % SPEED_UP_EVERY === 0 && speedMs > MIN_SPEED_MS) {
    speedMs -= SPEED_UP_BY_MS;
  }

  placeFood();
}

// Umístí jídlo na náhodné VOLNÉ políčko (ne na hada!)
function placeFood() {
  do {
    food = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some((s) => s.x === food.x && s.y === food.y));
}

// ------------------------------------------------------------------
// 7. KONEC HRY
// ------------------------------------------------------------------
function gameOver() {
  isRunning = false;
  clearTimeout(gameLoopId);

  // Překonali jsme rekord? Uložíme ho.
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("snakeHighScore", highScore);
    highScoreEl.textContent = highScore;
  }

  overlayTitle.textContent = "KONEC HRY";
  overlayText.textContent = `Tvoje skóre: ${score}`;
  startButton.textContent = "🔄 Hrát znovu";
  overlay.classList.remove("hidden");
}

// ------------------------------------------------------------------
// 8. KRESLENÍ — překreslí celou herní plochu
// ------------------------------------------------------------------
function draw() {
  // Smažeme všechno z minulého snímku
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawGrid();

  // Jídlo nakreslíme jako kolečko
  ctx.fillStyle = COLOR_FOOD;
  ctx.beginPath();
  ctx.arc(
    food.x * CELL_SIZE + CELL_SIZE / 2,
    food.y * CELL_SIZE + CELL_SIZE / 2,
    CELL_SIZE / 2 - 2,
    0,
    Math.PI * 2
  );
  ctx.fill();

  // Hada nakreslíme článek po článku (hlava má jinou barvu)
  snake.forEach((segment, index) => {
    ctx.fillStyle = index === 0 ? COLOR_HEAD : COLOR_SNAKE;
    ctx.fillRect(
      segment.x * CELL_SIZE + 1,
      segment.y * CELL_SIZE + 1,
      CELL_SIZE - 2,
      CELL_SIZE - 2
    );
  });
}

// Jemná mřížka, ať je vidět, po jakých políčkách se had hýbe
function drawGrid() {
  ctx.strokeStyle = COLOR_GRID;
  ctx.lineWidth = 1;
  for (let i = 1; i < GRID_SIZE; i++) {
    ctx.beginPath();
    ctx.moveTo(i * CELL_SIZE, 0);
    ctx.lineTo(i * CELL_SIZE, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i * CELL_SIZE);
    ctx.lineTo(canvas.width, i * CELL_SIZE);
    ctx.stroke();
  }
}

// ------------------------------------------------------------------
// 9. OVLÁDÁNÍ — reagujeme na stisknuté klávesy
// ------------------------------------------------------------------
document.addEventListener("keydown", (event) => {
  // Mezerník = start (když hra neběží)
  if (event.code === "Space" && !isRunning) {
    startGame();
    return;
  }

  // P = pauza / pokračovat
  if (event.key.toLowerCase() === "p" && isRunning) {
    isPaused = !isPaused;
    if (!isPaused) scheduleNextStep();
    return;
  }

  // Šipky mění směr. DŮLEŽITÉ: had se nesmí otočit o 180°
  // (jinak by okamžitě narazil sám do sebe). Proto kontrolujeme,
  // že nový směr není přesný opak toho současného.
  const turns = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 },
  };

  const turn = turns[event.key];
  if (!turn) return;             // jiná klávesa nás nezajímá
  event.preventDefault();        // ať šipky neposouvají stránku

  const isOpposite = turn.x === -direction.x && turn.y === -direction.y;
  if (!isOpposite) {
    nextDirection = turn;
  }
});

startButton.addEventListener("click", startGame);

// Na začátku nakreslíme prázdnou plochu, ať canvas není černá díra
drawGrid();
