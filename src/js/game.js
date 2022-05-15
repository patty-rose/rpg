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
    this.level = 1;
  }
}

