//weapons
let weapons = ["plastic straw", "fishing rod", "trident", "harpoon", "seaweed whip", "fishing net"]

//Attack Functions
let crabStrength=Math.floor(Math.random()*10);
let shrimpHp = 15;
    
function crabAttack(){
    if (shrimpHp > crabStrength){
    shrimpHp= shrimpHp - crabStrength;
    console.log("Crab strikes damaging you for: " + crabStrength + ". You survive.");
    console.log("Your HP after the attack " + shrimpHp);
    } else {
    console.log("Crab strikes damaging you for: " + crabStrength + ". You die.");
    }
}

//eatKrill function
function eatKrill(){
    let krillCalories=Math.floor(Math.random()*5);
    shrimpHp= shrimpHp + krillCalories;
    console.log("You ate some krill. It heals you for " + krillCalories +". Your current HP is: " + shrimpHp) 
} 
//calling the functions
crabAttack();
eatKrill();

function GameMap(rows, cols, cellSize) {
    this.rows = rows; // Number of rows in the map
    this.cols = cols; // Number of columns in the map
    this.cellSize = cellSize; // Size of each cell (e.g., 50px)
  
    this.init = function () {
        const playboard = document.getElementById("playboard");
  
        // Clear the playboard before rendering (useful for resetting the map)
        playboard.innerHTML = "";
  
        // Set up the grid dynamically
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                const cell = document.createElement("div");
                cell.classList.add("grid-cell");
                cell.dataset.x = x; // Store x coordinate in the cell
                cell.dataset.y = y; // Store y coordinate in the cell
                playboard.appendChild(cell);
            }
        }
  
        console.log("Map initialized with rows:", this.rows, "cols:", this.cols);
    };
  
    this.getCell = function (x, y) {
      // Get a specific cell by x, y coordinates
      return document.querySelector(`.grid-cell[data-x="${x}"][data-y="${y}"]`);
    };
  
    this.placeObject = function (x, y, element) {
        // Place an object (like the hero) in a specific cell
        const cell = this.getCell(x, y);
        if (cell) {
            cell.appendChild(element);
        }
    };
};
  
const gameMap = new GameMap(3, 3, 50);
