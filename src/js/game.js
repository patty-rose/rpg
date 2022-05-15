function equippedWeapon(playerType) {
  let weaponDamage = 0;
  const weaponMap = {
    "scientist" : ["chemical burn", 5],
    "gymBro" : ["towel whip", 5]
  }
  return weaponMap[playerType];
}

export class Game {
  constructor(players) {
    this.players = players;
  }

}

export class Player{
  constructor(playerType) {
    this.playerType = playerType;
    this.hp = 100;
    this.weapon;
    this.weaponDamage = 0;
    this.level = 1;
  }

  equip() {
    this.weaponDamage = 0;
    this.weapon = equippedWeapon(this.playerType)[0];
    this.weaponDamage = equippedWeapon(this.playerType)[1];
  }

}

// function equippedWeapon() {
//   let weaponDamage = 0;
//   const weaponMap = {
//     "chemical Burn" : 5,
//     "towel whip" : 5,
//   }
//   return weaponMap;
// };

// Player.prototype.equip = function(){
//   this.weapon = 0;
//   this.weapon = equippedWeapon(this.playerType);
// }

// // pizza examples below

// const weaponMap = {
//   playerType: "scientist", weapon : "chemical burn", 5
// }



// Player.prototype.equip = function(){
//   this.weaponDamage = 0;
//   this.weapon = equippedWeapon(this.playerType)[0];
//   this.weaponDamage = equippedWeapon(this.playerType)[1];
// }


// function calculateSizeCost(size) {
//   let sizeCost = 0;
//   const sizeCostMap = {
//     "small" : 5,
//     "medium" : 10,
//     "large" : 15,
//     "extra-large" : 20,
//   }
//   return sizeCostMap[size];
// }

// Pizza.prototype.calculatePizzaCost = function(){
//   this.pizzaCost = 0
//   this.pizzaCost = calculateSizeCost(this.size) + calculateToppingsCost(this.toppings);
// };

