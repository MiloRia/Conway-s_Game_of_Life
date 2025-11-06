const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

//Configuration
const cellSize = 10; //px
const cols = canvas.width / cellSize;
const rows = canvas.height / cellSize;

//World state: 2D array filled with 0s
let world = [];
for (let y = 0; y < rows; y++) {
    world[y] = new Uint8Array(cols);
}

//Randomly populate the world for vizualization
for(let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
        world[y][x] = Math.random() < 0.25 ? 1 : 0; //25% alive
    }
}

function draw() {
    ctx.clearRect (0, 0, canvas.width, canvas.height);
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

draw();