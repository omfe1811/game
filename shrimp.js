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
