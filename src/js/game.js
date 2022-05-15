function equippedWeapon(playerType) {
  const weaponMap = {
    "scientist" : ["chemical burn", 5],
    "gymBro" : ["towel whip", 5]
  }
  return weaponMap[playerType];
}

function turnActivity(diceRollNumber) {
  const diceRollActivityMap = {
    1 : "battleMonster",
    2 : "tripAndFall",
    3 : "findFood",
    4 : "findFood",
    5 : "tripAndFall",
    6 : "battleMonster",
  }
  return diceRollActivityMap[diceRollNumber];
}

function rollDice() {
  let diceRoll = Math.floor((Math.random()*6) + 1);
}

export class Game {
  constructor(player) {
    this.player = player;
    this.monsterHealth = 0;
    this.diceRollNumber = 0;
  }

  takeTurn() {
    // this.diceRollNumber = rollDice();
    console.log(turnActivity(this.diceRollNumber))
    return turnActivity(this.diceRollNumber);
  }

  battleAttack() {
    this.monsterHealth -= this.player.weaponDamage;
    if (this.monsterHealth >0) {
      this.player.hp -= 5;
    } else if (this.monsterHealth <=0) {
      this.player.xp += 15;
      return "Good job! You killed the monster!";
    }
  }

  tripAndFall() {
    this.player.hp -= 5;
    this.player.xp += 5;
  }
}

export class Player{
  constructor(playerType) {
    this.playerType = playerType;
    this.hp = 100;
    this.xp = 0;
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