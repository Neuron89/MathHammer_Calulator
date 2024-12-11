function warhammerCombatTracker(){
  //the purpose of this is to make a app that would track the average of wounds from attack that would 
  //make it through the save of another character
  //v1
  //define a dice roll = an object that contains a var with value of 6 and a function that returns a random number 1-6
// class Unit {
//   constructor(name, toughness, save, invSave){
//     this.name = name;
//     this.toughness = toughness;
//     this.save = save;
//     this.invSave = invSave;
//   }
// }
// function Attack(){

// }

  //player enters number of attacks, BS of attack, strength of attack, and armor pen
  //  how many attack do you have?
//   alert('How many atacks do you have')

// function getAttack() {
  
//     attacks = document.getElementById("userInputAttacks").value;
//     attacks = attacks;
// }
  
//   //  what is your BS
//   alert('what is your BS')
//   const attackerBS = prompt()
//   //  what is your strength
//   alert('what is your Str')
//   const attackerStr = prompt()
//   //  what is your armor pen
//   alert('what is your armor Pen')
//   const attackerArmorPen = prompt()
//   //player then enters toughtness of enemy, armor save of enemy
//   alert('enemys toughtness')
//   const enemyTough = prompt()

//   alert('enemys armor save')
//   const enemySave = prompt()



  //returns the number of wounds (rounded down) that would make it through

  //v2
  //
  
  //console.log(attacks);
//mathHammer();
}
function d6Single(){
  return Math.floor(Math.random() * 6) + 1;
}


function d6Multiple(numDice, diceSize){
  let result = [];
  if(diceSize === 'D3'){
    for(let i = 0; i < numDice; i++){
      const rollResult = Math.floor(Math.random() * 3) + 1;
     result.push(rollResult);
    }
  }else if(diceSize === 'D6'){
   for(let i = 0; i < numDice; i++){
      const rollResult = Math.floor(Math.random() * 6) + 1;
     result.push(rollResult);
    }
  }
  return result;
}
// State variables
const state = {
    Attacks: 1,
    BS: 1,
    Strength: 1,
    ArmorPen: 1,
    Damage: 1,
    Toughness: 1,
    ArmorSave: 1,
    InvSave: 1
};

// Preset values for quick selection
const presetValues = [1, 5, 10, 25];

function adjustValue(statName, change) {
    const currentIndex = presetValues.indexOf(state[statName]);
    let newIndex = currentIndex + change;
    
    // Handle wrapping around
    if (newIndex >= presetValues.length) newIndex = 0;
    if (newIndex < 0) newIndex = presetValues.length - 1;
    
    // Update state and display
    state[statName] = presetValues[newIndex];
    document.getElementById(`${statName.toLowerCase()}Value`).textContent = state[statName];
}

function getValue(statName) {
    return state[statName];
}
function attackHits(){
  let diceRoll = d6Multiple(getAttack, 'd6');
  let attckResults = [];
  for(let i = 0; i > diceRoll.length; i++){
    if(diceRoll[i] >= bS){
      attackResults.push(diceRoll[i]);
    }
  }
  attackResults.length
  function calculateResults() {
      // Get current values from state
      const attacks = getValue('Attacks');
      const bs = getValue('BS');
      const strength = getValue('Strength');
      const armorPen = getValue('ArmorPen');
      const toughness = getValue('Toughness');
      const armorSave = getValue('ArmorSave');
      const invSave = getValue('InvSave');
  
      // Roll for hits
      let diceRolls = d6Multiple(attacks, 'D6');
      let hits = diceRolls.filter(roll => roll >= bs).length;
  
      // Roll for wounds
      let woundRolls = d6Multiple(hits, 'D6');
      let woundTarget = calculateWoundTarget(strength, toughness);
      let wounds = woundRolls.filter(roll => roll >= woundTarget).length;
  
      // Roll for saves
      let effectiveArmorSave = armorSave + armorPen;
      let saveRolls = d6Multiple(wounds, 'D6');
      let finalWounds = saveRolls.filter(roll => {
          let armorSaveSuccess = roll >= effectiveArmorSave;
          let invSaveSuccess = roll >= invSave;
          return !(armorSaveSuccess || invSaveSuccess);
      }).length;
  
      // Display results
      displayResults(attacks, hits, wounds, finalWounds);
  }
  
  function calculateWoundTarget(strength, toughness) {
      if (strength >= toughness * 2) return 2;
      if (strength > toughness) return 3;
      if (strength === toughness) return 4;
      if (strength <= toughness / 2) return 6;
      return 5;
  }
  
  function displayResults(attacks, hits, wounds, finalWounds) {
      const resultsHtml = `
          <div class="results">
              <h2>Results</h2>
              <p>Attacks: ${attacks}</p>
              <p>Hits: ${hits}</p>
              <p>Wounds: ${wounds}</p>
              <p>Final Wounds: ${finalWounds}</p>
          </div>
      `;
      
      // Create or update results display
      let resultsDiv = document.querySelector('.results');
      if (resultsDiv) {
          resultsDiv.innerHTML = resultsHtml;
      } else {
          document.body.insertAdjacentHTML('beforeend', resultsHtml);
      }
}
