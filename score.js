export class Score {
    constructor(main) {
      this.main = main;
      this.bestResult = parseInt(localStorage.getItem('bestResult')) || 0;
      this.scoreElement = document.querySelector(".score");
      this.bestResultElement = document.querySelector(".best-result");
      this.updateScore(0);
      this.updateBestResult();
    }
  
    updateScore(score) {
      this.scoreElement.textContent = `Score: ${score}`;
    }
  
    updateBestResult() {
      this.bestResultElement.textContent = `Best-result: ${this.bestResult}`;
    }
  }

  import { Main } from './main.js';
  import { Field } from './field.js';
  import { Apple } from './apple.js';
  import { Snake } from './snake.js';