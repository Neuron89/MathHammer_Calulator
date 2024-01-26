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
let attacks;
let bS;
let strength;
let armorPen;
let damage;
let toughness;
let armorSav;
let invSav;
function getAttack() {
  attacks = document.getElementById("userInputAttacks").value;
  return attacks;
}
function getBS() {
  bS = document.getElementById("userInputBS").value;
  return bS;
}
function getStrength() {
  strength = document.getElementById("userInputStrength").value;
  return strength;
}
function getArmorPen() {
  armorPen = document.getElementById("userInputArmorPen").value;
  return armorPen;
}
function getDamage() {
  damage = document.getElementById("userInputDamage").value;
  return damage;
}
function getToughness() {
  toughness = document.getElementById("userInputToughness").value;
  return toughness;
}
function getArmorSav() {
  armorSav = document.getElementById("userInputArmorSav").value;
  return armorSav;
}
function getInvSav() {
  invSav = document.getElementById("userInputInvSave").value;
  return invSav;
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
  return;
}
function weaponOutput(){
  return;
}
function weaponDamage(){

  return;
}

function displayResult(){
  return;
}
