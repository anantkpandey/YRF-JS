/**
 * YRF Spy Universe Problem Solver
 *
 * This program assists a protagonist from the YRF Spy Universe in solving a problem
 * faced by their folks. It provides a framework for defining the problem,
 * gathering intel, analyzing clues, and executing a solution.
 */

class Spy {
  constructor(name, skills = []) {
    this.name = name;
    this.skills = skills;
    this.intel = {};
    this.clues = [];
    console.log(`Agent ${this.name} reporting for duty.`);
  }

  addSkill(skill) {
    if (!this.skills.includes(skill)) {
      this.skills.push(skill);
      console.log(`${this.name} has acquired the skill: ${skill}`);
    } else {
      console.log(`${this.name} already possesses the skill: ${skill}`);
    }
  }

  gatherIntel(source, information) {
    this.intel[source] = information;
    console.log(`${this.name} gathered intel from ${source}: ${information}`);
  }

  receiveClue(clue) {
    this.clues.push(clue);
    console.log(`${this.name} received a new clue: "${clue}"`);
  }

  analyzeIntelAndClues() {
    console.log(`\n${this.name} is analyzing the gathered intel and clues...`);
    console.log("--- Intel ---");
    for (const source in this.intel) {
      console.log(`${source}: ${this.intel[source]}`);
    }
    console.log("\n--- Clues ---");
    this.clues.forEach((clue, index) => console.log(`Clue ${index + 1}: "${clue}"`));

    // This is where the core logic for analyzing the intel and clues would go.
    // Based on the specific problem, you would implement functions to:
    // - Identify patterns
    // - Connect pieces of information
    // - Filter out irrelevant data
    // - Formulate hypotheses

    // Example (very basic):
    if (this.intel["informant"] && this.intel["informant"].includes("location")) {
      console.log("\nPotential lead identified: Location mentioned in informant's intel.");
    }
    if (this.clues.some(clue => clue.includes("code"))) {
      console.log("Potential lead identified: A coded message might be significant.");
    }
  }

  formulatePlan(objective, steps) {
    console.log(`\n${this.name} is formulating a plan to achieve the objective: ${objective}`);
    this.plan = { objective, steps };
    steps.forEach((step, index) => console.log(`${index + 1}. ${step}`));
  }

  executePlan() {
    if (!this.plan) {
      console.log(`${this.name} needs a plan before execution!`);
      return;
    }

    console.log(`\n${this.name} is executing the plan: ${this.plan.objective}`);
    this.plan.steps.forEach((step, index) => {
      console.log(`Executing step ${index + 1}: ${step}`);
      // Simulate step execution (replace with actual logic)
      this.simulateAction(step);
    });
    console.log(`\n${this.name} has completed the mission for their folks!`);
  }

  simulateAction(action) {
    const delay = Math.random() * 1000; // Simulate varying action times
    setTimeout(() => {
      console.log(`(Simulated) Action "${action}" completed.`);
      // Here you could add logic to update the state based on the action
    }, delay);
  }

  reportStatus() {
    console.log(`\n--- Status Report for Agent ${this.name} ---`);
    console.log("Skills:", this.skills.join(", "));
    console.log("Intel:", this.intel);
    console.log("Clues:", this.clues);
    if (this.plan) {
      console.log("Current Plan:", this.plan);
    } else {
      console.log("Current Plan: None");
    }
  }
}

// --- Scenario: The Missing Intel ---
console.log("\n--- Scenario: The Missing Intel ---");

const agentVikram = new Spy("Vikram", ["Combat", "Infiltration", "Linguistics"]);
agentVikram.addSkill("Hacking");

agentVikram.gatherIntel("Headquarters", "Important intel package went missing.");
agentVikram.gatherIntel("Source A", "Last seen near the old warehouse district.");
agentVikram.receiveClue("A torn piece of paper with the symbol 'Trishul'.");
agentVikram.receiveClue("A faint scent of a rare perfume.");

agentVikram.analyzeIntelAndClues();

agentVikram.formulatePlan(
  "Retrieve the missing intel package",
  [
    "Investigate the old warehouse district.",
    "Look for any signs of the 'Trishul' symbol.",
    "Identify the source of the rare perfume.",
    "Infiltrate potential hideouts based on the clues.",
    "Secure and retrieve the intel package.",
    "Report back to headquarters."
  ]
);

agentVikram.executePlan();

agentVikram.reportStatus();

// --- Another Scenario: The Double Agent ---
console.log("\n--- Another Scenario: The Double Agent ---");

const agentZoya = new Spy("Zoya", ["Espionage", "Disguise", "Code Breaking"]);

agentZoya.gatherIntel("Internal Affairs", "Suspicion of a double agent within the ranks.");
agentZoya.gatherIntel("Surveillance", "Agent X has been meeting with known adversaries.");
agentZoya.receiveClue("Encrypted messages with a recurring keyword: 'Chameleon'.");
agentZoya.receiveClue("Agent X has access to sensitive operational data.");

agentZoya.analyzeIntelAndClues();

agentZoya.formulatePlan(
  "Identify and neutralize the double agent",
  [
    "Decrypt the intercepted messages, focusing on the 'Chameleon' keyword.",
    "Conduct further surveillance on Agent X's activities.",
    "Cross-reference Agent X's access logs with data breaches.",
    "Set a trap to expose the double agent.",
    "Neutralize the threat and secure sensitive information."
  ]
);

agentZoya.executePlan();

agentZoya.reportStatus();
