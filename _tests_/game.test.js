import Game from './../src/js/Game.js'

describe('Game', () => {
  test('should create game object', () => {
const game = new Game(["scientist", "nerd"]);
    expect(game.players).toEqual(["scientist", "nerd"]);
  })
})