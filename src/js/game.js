export default class Game {
  constructor(players) {
    this.players = players;
  }

}

class Player extends Game {
  constructor() {
    this.playerType = playerType;
    this.hp = hp;
    this.weapon = weapon;
    this.level = level;
  }
}