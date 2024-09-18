export class Main {
  constructor() {
    this.snake = new Snake(this);
    this.field = new Field(this);
    this.apple = new Apple(this);
    this.score = new Score(this);

    this.field.createField();
    this.apple.generateApple();
    this.snake.createSnake();

    this.init();
  }

  init() {
    this.render();
    this.startGame();
  }

  render() {
    this.field.render();
    this.snake.render();
    this.apple.render();
    this.score.updateScore(this.snake.score);
  }

  startGame() {
    this.intervalId = setInterval(() => {
      this.snake.move();
      this.render();
    }, 500);

    window.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowUp') this.snake.changeDirection('up');
      else if (event.key === 'ArrowDown') this.snake.changeDirection('down');
      else if (event.key === 'ArrowLeft') this.snake.changeDirection('left');
      else if (event.key === 'ArrowRight') this.snake.changeDirection('right');
    });

    document.querySelector(".replay").addEventListener("click", () => this.replay());
  }

  endGame() {
    clearInterval(this.intervalId);
    if (this.snake.score > this.score.bestResult) {
      this.score.bestResult = this.snake.score;
      localStorage.setItem('bestResult', this.score.bestResult);
      this.score.updateBestResult();
    }
    this.render();
  }

  replay() {
    clearInterval(this.intervalId);
    this.snake.reset();
    this.apple.generateApple();
    this.render();
    this.startGame();
  }
}

import { Snake } from './snake.js';
import { Field } from './field.js';
import { Apple } from './apple.js';
import { Score } from './score.js';

const newMain = new Main();
