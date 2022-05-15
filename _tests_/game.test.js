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
})