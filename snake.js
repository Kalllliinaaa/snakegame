export class Snake {
    constructor(main) {
      this.main = main;
      this.fieldSize = 10;
      this.snake = [];
      this.direction = 'right';
      this.score = 0;
    }
  
    createSnake() {
      const startHeadX = Math.floor(this.fieldSize / 2);
      const startHeadY = startHeadX;
  
      for (let i = 0; i < 2; i++) {
        const x = startHeadX - i;
        const y = startHeadY;
        const cell = this.main.field.getCell(x, y);
        cell.classList.add('snake');
        this.snake.push(cell);
      }
    }
  
    getCell(x, y) {
      return this.main.field.getCell(x, y);
    }
  
    move() {
      const head = this.snake[0];
      const headX = parseInt(head.dataset.x);
      const headY = parseInt(head.dataset.y);
  
      let newHeadX = headX;
      let newHeadY = headY;
  
      switch (this.direction) {
          case 'up': newHeadY--; break;
          case 'down': newHeadY++; break;
          case 'left': newHeadX--; break;
          case 'right': newHeadX++; break;
      }
  
      if (newHeadX < 0) newHeadX = this.fieldSize - 1;
      if (newHeadX >= this.fieldSize) newHeadX = 0;
      if (newHeadY < 0) newHeadY = this.fieldSize - 1;
      if (newHeadY >= this.fieldSize) newHeadY = 0;
  
      const newHead = this.getCell(newHeadX, newHeadY);
  
      if (this.snake.includes(newHead)) {
          this.main.endGame();
          return;
      }
  
      this.snake.unshift(newHead);
      newHead.classList.add('snake');
      const apple = this.main.apple;
  
      if (apple.apple.x === newHeadX && apple.apple.y === newHeadY) {
          apple.generateApple();
          this.score++;
          this.main.score.updateScore(this.score);
          apple.render();
      } else {
          const tail = this.snake.pop();
          tail.classList.remove('snake');
      }
    }
  
    changeDirection(direction) {
      const oppositeDirections = {
        'up': 'down',
        'down': 'up',
        'left': 'right',
        'right': 'left'
      };
  
      if (direction !== oppositeDirections[this.direction]) {
        this.direction = direction;
      }
    }
  
    reset() {
      this.snake.forEach(cell => cell.classList.remove('snake'));
      this.snake = [];
      this.direction = 'right';
      this.score = 0;
      this.createSnake();
    }
  
    render() {
      this.snake.forEach(cell => cell.classList.add('snake'));
    }
  }

  import { Main } from './main.js';
  import { Field } from './field.js';
  import { Apple } from './apple.js';
  import { Score } from './score.js';