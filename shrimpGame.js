let xp = 0;
let health = 100;
let gold = 0;
const weapons = [
    { name: 'stick', power: 5 },
    { name: 'dagger', power: 30 },
    { name: 'claw hammer', power: 50 },
    { name: 'sword', power: 100 }
];

const monsters = [
    {
      name: "slime",
      level: 2,
      health: 15
    },
    {
      name: "fanged beast",
      level: 8,
      health: 60
    },
    {
      name: "dragon",
      level: 20,
      health: 300
    }
];  

// Define the player's starting position
let playerX = 0;
let playerY = 0;

// Define the dungeon grid
let dungeonGrid = [
  [document.getElementById("room1"), document.getElementById("room2"), document.getElementById("room3")],
  [document.getElementById("room4"), document.getElementById("room5"), document.getElementById("room6")],
  [document.getElementById("room7"), document.getElementById("room8"), document.getElementById("room9")]
];

// Define the player's current room
let currentRoom = dungeonGrid[playerX][playerY];
currentRoom.innerText = "x";


// Define the player's inventory


