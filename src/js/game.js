function equippedWeapon(playerType) {
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

  takeTurn() {
    let diceRoll = Math.floor((Math.random()*6) + 1);
    if(diceRoll === 1 || 6) {
      return "battleMonster"
    } else if(diceRoll === 2 || 5) {
      return "tripAndFall"
    } else if(diceRoll === 3 || 4) {
      return "findFood"
    }
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