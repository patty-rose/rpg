import {Game, Player} from './../src/js/Game.js';

describe('Game', () => {

  let patty;
  let pattysGame;

  beforeEach(() => {
    patty = new Player("gymBro");
    pattysGame = new Game(patty);
  });

  test('should create game object', () => {
    expect(pattysGame.player).toEqual(patty);
  })

  test('should roll dice and present player with their turn activity', () => {
    let testAnswer; 
    if (pattysGame.diceRollNumber === 1 || pattysGame.diceRollNumber === 6) {
      testAnswer = "battleMonster";
    } else if (pattysGame.diceRollNumber === 2 || pattysGame.diceRollNumber === 5) {
      testAnswer = "tripAndFall";
    } else if (pattysGame.diceRollNumber === 3 || pattysGame.diceRollNumber === 4) {
      testAnswer = "findFood";
    }
    expect(pattysGame.takeTurn()).toEqual(testAnswer);
  })

  test('should have monster hp lower due to getting attacked', ()=> {
    patty.equip();
    pattysGame.monsterHealth = 20;
    pattysGame.battleAttack();
    expect(pattysGame.monsterHealth).toEqual(15)
  })

  test('should run trip and fall which will decrease player hp by 5 and increase player xp by 5', () => {
    const patty = new Player("gymBro");
    const pattysGame = new Game(patty);
    pattysGame.tripAndFall();
    expect(pattysGame.player.hp).toEqual(95);
    expect(pattysGame.player.xp).toEqual(5);
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

