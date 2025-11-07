# Conway's Game of Life

A simple web implementation of **Conway’s Game of Life**, built with pure **HTML, CSS, and JavaScript** using the `<canvas>` element.

---

## 🎮 Gameplay

Each cell on the grid is either **alive** or **dead**.  
Every generation evolves according to these simple rules:

1. Any live cell with fewer than two live neighbours dies (underpopulation).  
2. Any live cell with two or three live neighbours lives on to the next generation.  
3. Any live cell with more than three live neighbours dies (overpopulation).  
4. Any dead cell with exactly three live neighbours becomes a live cell (reproduction).

---

## ⚙️ Controls

| Button | Action |
|---------|---------|
| **Play / Pause** | Start or stop the simulation |
| **Step** | Advance one generation manually |
| **Speed ×1 / ×2 / ×4** | Change simulation speed |
| **Clear** | Clear the grid |
| **Pattern Selector** | Load classic patterns (Glider, Blinker, Block) |

---

## 🌐 World Type

The world is **toroidal** — cells on one edge connect seamlessly to the opposite edge.

---

## 🧩 Patterns

The project includes classic patterns:
- **Glider**
- **Blinker**
- **Block**

---

## 🧱 Technologies Used

- HTML5 Canvas  
- Vanilla JavaScript  
- CSS (basic layout)

---

## 🚀 How to Run

1. Clone or download this repository  
2. Open `index.html` in your browser  
3. Enjoy watching the evolution of life!

## 🧠 Inspiration

Based on John Conway’s mathematical Game of Life (1970).