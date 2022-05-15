import {Game, Player} from './../src/js/Game.js';

describe('Game', () => {
  test('should create game object', () => {
const game = new Game(["scientist", "nerd"]);
    expect(game.players).toEqual(["scientist", "nerd"]);
  })

  test('should roll dice and present player with their turn activity', () => {
    const patty = new Player("gymBro");
    const pattysGame = new Game(patty);
    expect(pattysGame.takeTurn()).toEqual("battleMonster" || "tripAndFall" || "findFood");
  })

})

describe('Player', () => {
  test('should create player object', () => {
    const player = new Player(["scientist"]);
    expect(player.playerType).toEqual(["scientist"]);
    expect(player.hp).toEqual(100);
    expect(player.level).toEqual(1);
  })

  test('should equip player with the correct weapon and weapon damage for scientist', () => {
    const player = new Player("scientist");
    player.equip();
    expect(player.weapon).toEqual("chemical burn");
    expect(player.weaponDamage).toEqual(5);
  })

  test('should equip player with correct weapon and weapon damage for gymBro', () => {
    const player = new Player("gymBro");
    player.equip();
    expect(player.weapon).toEqual("towel whip");
    expect(player.weaponDamage).toEqual(5);
  })
})

