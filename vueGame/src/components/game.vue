<script>
import song1 from "../assets/sounds/1.mp3";
import song2 from "../assets/sounds/2.mp3";
import song3 from "../assets/sounds/3.mp3";
import song4 from "../assets/sounds/4.mp3";
export default {
  data() {
    return {
      urlSongs: [song1, song2, song3, song4],
      arrayComputer: [],
      arrayPlayer: [],
      round: 0,
      activeTiles: Array(4).fill(false),
      isDisableBtnStart: false,
      isDisableBoard: true,
      levels: { 1: "1000", 1.5: "1500", 0.4: "400" },
      time: "1000",
    };
  },
  methods: {
    playSong(index) {
      const audio = new Audio(this.urlSongs[index]);
      audio.play();
      return new Promise((resolve) => {
        audio.addEventListener("ended", resolve);
      });
    },
    comparisonAnswers() {
      for (let i = 0; i < this.arrayComputer.length; i++) {
        if (this.arrayComputer[i] !== this.arrayPlayer[i]) {
          return false;
        }
      }
      return true;
    },
    async newRound() {
      this.isDisableBoard = true;
      this.round++;
      this.arrayComputer.push(this.randomSong());
      await this.computerMoves().then((data) => {
        this.isDisableBoard = data;
      });
    },
    async computerMoves() {
      this.arrayPlayer = [];

      for (let i = 0; i < this.arrayComputer.length; i++) {
        this.activateTile(this.arrayComputer[i]);
        await this.playSong(this.arrayComputer[i]);
        this.deactivateTile(this.arrayComputer[i]);
        await new Promise((resolve) => setTimeout(resolve, this.time));
      }

      return false;
    },
    async start() {
      this.isDisableBtnStart = true;
      await this.newRound();
    },
    end() {
      alert("You Lose");
      this.isDisableBtnStart = false;
      this.arrayPlayer = [];
      this.arrayComputer = [];
      this.isDisableBoard = true;
      this.round = 0;
    },
    randomSong() {
      return Math.floor(Math.random() * 4);
    },
    getTileColor(index) {
      const colors = ["red", "blue", "yellow", "green"];
      return colors[index];
    },
    listenerClick(index) {
      this.playSong(index);
      this.arrayPlayer.push(index);
      if (this.arrayPlayer.length === this.arrayComputer.length) {
        const isNextRound = this.comparisonAnswers();
        if (isNextRound) {
          setTimeout(() => {
            this.start();
          }, 1000);
        } else {
          this.end();
        }
      }
    },
    activateTile(index) {
      this.activeTiles[index] = true;
    },

    deactivateTile(index) {
      this.activeTiles[index] = false;
    },
  },
};
</script>

<template>
  <div>
    <div class="wrapper">
      <h1>Simon Says</h1>
      <div class="game-board">
        <div class="simon">
          <ul>
            <button
              v-for="(url, index) in urlSongs"
              :key="index"
              @click="listenerClick(index)"
              @mousedown="activateTile(index)"
              @mouseup="deactivateTile(index)"
              :disabled="isDisableBoard"
              :class="[
                'tile',
                getTileColor(index),
                { active: activeTiles[index] },
              ]"
            ></button>
          </ul>
        </div>
      </div>
      <div class="game-info">
        <h2>
          Round: <span> {{ round }}</span>
        </h2>
        <button
          data-action="start"
          :disabled="isDisableBtnStart"
          @click="start"
        >
          Start
        </button>
        <p data-action="lose">
          Sorry, you lost after <span data-round="0"></span> rounds!
        </p>
      </div>
      <div class="game-options">
        <h2>Game Options:</h2>
        <div v-for="(times, level) in levels" :key="level">
          <input
            type="radio"
            :disabled="isDisableBtnStart"
            name="mode"
            :value="times"
            v-model="time"
          />
          <label>x{{ level }}</label>
        </div>
      </div>
      <div data-action="sound"></div>
    </div>
  </div>
</template>

<style scoped></style>
