import {Game, Player} from './../src/js/Game.js';

describe('Game', () => {
  test('should create game object', () => {
const game = new Game(["scientist", "nerd"]);
    expect(game.players).toEqual(["scientist", "nerd"]);
  })
})

describe('Player', () => {
  test('should create player object', () => {
    const player = new Player(["scientist"]);
    expect(player.playerType).toEqual(["scientist"]);
    expect(player.hp).toEqual(100);
    expect(player.level).toEqual(1);
  })

  test('should equip player with the correct weapon based on player type', () => {
    const player = new Player("scientist");
    player.equip();
    expect(player.weapon).toEqual("chemical burn");
  })
})