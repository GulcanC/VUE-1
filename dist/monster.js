// 11-🐞create two separate function for two methods

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  // 1-🐞think that the datas are variables in JavaScript
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      // 16-🐞add a current round will be start from zero and it will increment
      currentRound: 0,
      // 27- 🐞 initially set the winner as null because at the beginning there is no winner. after go to watch
      winner: null,
      // 35- 🐞 add new property as empty array, after that go to method to set it for starting new game
      logMessages: [],
    };
  },
  // 13-🐞computed properties to change style. you can do it with html code ı did it as command.
  computed: {
    monsterBarStyles() {
      // 29- 🐞 when the game is over the bar should be empty, to do that
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      // 13-🐞computed properties to change style. you can do it with html code ı did it as command.
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      // 30- 🐞 when the game is over the bar should be empty, to do that. after that go to html to strat a new game
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      // 13-🐞computed properties to change style. you can do it with html code ı did it as command.
      return { width: this.playerHealth + "%" };
    },
    // 19- 🐞special attack should be at every three round. we have to disable it if the divison is three does not leave a remainder of zero. add a computed property to do that.
    useSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  // 25- 🐞 add a watcher property to learn which player win the game, compare health values
  // 26- 🐞 now go to the html file and add a new section for "game over"
  // 28- 🐞 here "winner" comes from "data" at the beginning it is null. go to html to  bind winner to new section
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  // 2-🐞think that the methods are actions
  methods: {
    // 3-🐞add a method when the attack button is clicked it will decrease the monster health
    attackMonster() {
      // 🐞 4-Calculate the damage. The random number shuld be between 5-15
      //🐞🐞🐞🐞5-const attackValue = Math.floor(Math.random() * (15 - 5)) + 5;
      // 17-🐞when you attack monster the current round will increment by one for attackMonster and special attack monster
      this.currentRound++;
      const attackValue = getRandomValue(5, 15);
      // 6-🐞reach the data property in your method
      this.monsterHealth = this.monsterHealth - attackValue;
      // 7-🐞this.monsterHealth -=attackValue;

      // 39- 🐞 this addLogMessage method should be added to other places. 1.attackMonster method. before monster attacks us.
      this.addLogMessage("player", "attack", attackValue);
      // 12-🐞attack player should be trigger when we attack the monster. when we attack the monster we will call "attackPlayer()" method
      this.attackPlayer();
    },
    // 8-🐞second action attack player
    attackPlayer() {
      //9-🐞🐞🐞🐞const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
      const attackValue = getRandomValue(8, 18);
      // 10-🐞reach the data property in your method
      this.playerHealth -= attackValue;
      // 40- 🐞 this addLogMessage method should be added to other places. 1.attackMonster method. before monster attacks us.
      this.addLogMessage("monster", "attack", attackValue);
    },
    // 14-🐞add a special attack, it will give a lot of damage
    specialAttackMonster() {
      // 18-🐞when you attack monster the current round will increment by one for attackMonster and special attack monster
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;

      // 41- 🐞 this addLogMessage method should be added to other places. 1.attackMonster method. before monster attacks us.
      this.addLogMessage("player", "attack", attackValue);
      // 15-🐞after spacial attack lunched our attackPlayer will be executed.
      this.attackPlayer();
    },
    // 20- 🐞heal button, player ı iyileştirmek için
    healPlayer() {
      // 22- 🐞 increment  the current round
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      // 21- 🐞 bizim max playerhealth 100 idi. eğer healValue ekleyince total 100 ü aşarsa player healthi 100 kabul et, geçmezse ekle yeni değeri
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      // 42- 🐞 this addLogMessage method should be added to other places. 1.attackMonster method. before monster attacks us. after that go to html to bind it
      this.addLogMessage("player", "heal", healValue);
      // 23- 🐞 call attackPlayer method
      this.attackPlayer();
    },
    // 31- 🐞 add a new method to start new game. all "data" properties should be start again but you have to put this poperty. and instead fo ":" you must use "=". Instead of "," you use ";" After that you go to button to bind start Game method.
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      // 36- 🐞 add new property for starting a new game
      this.logMessages = [];
    },
    // 32- 🐞 add a new method for surrender. after that go to html to bind surrender method

    surrender() {
      this.winner = "monster";
    },

    // 33- 🐞 add a new method for battle log. savaş günlüğü hangi adım atıldı ne kadar zarar verdi...
    // 34- 🐞 add a new method for battle log. This has three parameters. 1) who did something, 2)what happened, 3)how much damage was
    // 35- 🐞 after that go to data to add empty array "logMessages". initially it should be empty.
    // 37- 🐞 here use "unshift" method, it likes "push" method but push method add the item to the end of the array. "unshift" method adds the item to the last of the array. here "logMessages" is empty array. to output to the screen as a string use object with three key properties.
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
    // 38- 🐞 this addLogMessage method should be added to other places. 1.attackMonster method. before monster attacks us.
  },
});

app.mount("#game");
