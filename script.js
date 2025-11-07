const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
const stepBtn = document.getElementById("stepBtn");

//Configuration
const cellSize = 10; //px
const cols = canvas.width / cellSize;
const rows = canvas.height / cellSize;

let world = [];

//Randomly populate the world for vizualization
for(let y = 0; y < rows; y++) {
    world[y] = new Uint8Array(cols);
    for (let x = 0; x < cols; x++) {
        world[y][x] = Math.random() < 0.5 ? 1 : 0; //25% alive
    }
}

function draw() {
    ctx.fillStyle = "#161a36";
    ctx.fillRect (0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#5ad28a";

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++){
            if (world[y][x] === 1) {
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
            }
        }
    }

    drawGrid();
}

function drawGrid() {
    ctx.strokeStyle = "#2a2f57";
    ctx.beginPath();
    for (let x = 0; x <= cols; x++) {
        ctx.moveTo(x * cellSize + 0.5, 0);
        ctx.lineTo(x * cellSize + 0.5, canvas.height);
    }
    for (let y = 0;y <= rows; y++)  {
        ctx.moveTo(0, y * cellSize + 0.5);
        ctx.lineTo(canvas.width, y * cellSize + 0.5);
    }
    ctx.stroke();
}

function countNeighbors(x, y) {
    let n = 0;
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            n += world[y + dy]?.[x + dx] ?? 0;
        }
    }
    return n;
}

function nextGeneration() {
    const newWorld = [];
    for (let y = 0; y < rows; y++) {
        newWorld[y] = new Uint8Array(cols);
        for (let x = 0; x < cols; x++) {
            const neighbors = countNeighbors(x, y);
            const alive = world[y][x] === 1;

            if (alive && (neighbors === 2 || neighbors === 3)) {
                newWorld[y][x] = 1;
            } else if (!alive && neighbors === 3) {
                newWorld[y][x] = 1;
            } else {
                newWorld[y][x] = 0;
            }
        }
    }
    world = newWorld;
    draw();
}

stepBtn.addEventListener("click", nextGeneration);

draw();