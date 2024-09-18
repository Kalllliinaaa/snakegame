export class Apple {
    constructor(main) {
      this.main = main;
      this.fieldSize = 10;
      this.apple = { x: 0, y: 0 };
    }
  
    generateApple() {
      let x, y;
      do {
        x = Math.floor(Math.random() * this.fieldSize);
        y = Math.floor(Math.random() * this.fieldSize);
      } while (this.main.snake.snake.some(cell => cell.dataset.x == x && cell.dataset.y == y));
    
      this.apple.x = x;
      this.apple.y = y;
    }
    
  
    render() {
      const cells = this.main.field.field.flat();
      cells.forEach(cell => cell.classList.remove('apple'));
      const appleCell = this.main.field.getCell(this.apple.x, this.apple.y);
      appleCell.classList.add('apple');
    }
  }

  import { Main } from './main.js';
  import { Field } from './field.js';
  import { Snake } from './snake.js';
  import { Score } from './score.js';