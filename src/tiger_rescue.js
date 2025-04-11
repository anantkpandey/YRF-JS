// tiger_rescue.js - Colonel Luthra guides Tiger’s rescue mission
console.log("Tiger’s Rescue Operation - Luthra’s Directive");

// Mission data (adjust as per intel, Tiger!)
let target = "Pathaan";       // Ally in distress
let enemyCount = 15;         // Number of hostiles
let tigerHealth = 70;        // Health percentage (0-100)
let intelReliable = true;    // Intel accuracy

// Decision logic with if-else and logical operators
if (enemyCount <= 20 && tigerHealth >= 60 && intelReliable) {
    console.log(`Mission green, Tiger! Save ${target} and the team!`);
    console.log(`Enemies: ${enemyCount}, Health: ${tigerHealth}%, Intel: Reliable`);
} else if (enemyCount <= 20 && tigerHealth >= 60 && !intelReliable) {
    console.log(`Intel shaky—${enemyCount} enemies, ${tigerHealth}% health. Proceed with caution to save ${target}!`);
} else if (enemyCount > 20 && tigerHealth >= 60) {
    console.log(`Enemies swarm—${enemyCount} strong. Health ${tigerHealth}%. Call backup for ${target}!`);
} else if (enemyCount <= 20 && tigerHealth < 60) {
    console.log(`You’re battered—${tigerHealth}% health, ${enemyCount} foes. Pull back, save ${target} later!`);
} else {
    console.log(`Mission red—${enemyCount} enemies, ${tigerHealth}% health, Intel: ${intelReliable ? "Yes" : "No"}. Abort, Tiger!`);
}

// Luthra’s override
if (target === "Pathaan" || enemyCount < 10) {
    console.log("Pathaan’s priority—or odds favor us. Strike hard, Tiger!");
}