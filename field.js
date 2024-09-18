export class Field {
    constructor(main) {
      this.main = main;
      this.fieldSize = 10;
      this.field = [];
      this.fieldGame = document.querySelector('.field');
    }
  
    createField() {
      this.field = [];
      this.fieldGame.innerHTML = '';
  
      for (let y = 0; y < this.fieldSize; y++) {
        this.field[y] = [];
        for (let x = 0; x < this.fieldSize; x++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.dataset.x = x;
          cell.dataset.y = y;
          this.fieldGame.appendChild(cell);
  
          this.field[y][x] = cell;
        }
      }
    }
  
    getCell(x, y) {
      return this.field[y][x];
    }
  
    render() {
        this.field.flat().forEach(cell => {
            cell.classList.remove('snake', 'apple');
          });
      
          // Отображаем змейку
          this.main.snake.snake.forEach(cell => {
            cell.classList.add('snake');
          });
      
          // Отображаем яблоко
          const apple = this.main.apple.apple;
          const appleCell = this.getCell(apple.x, apple.y);
          appleCell.classList.add('apple');
        }
    }
  

    import { Main } from './main.js';
    import { Snake } from './snake.js';
    import { Apple } from './apple.js';
    import { Score } from './score.js';
