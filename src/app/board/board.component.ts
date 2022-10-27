import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares: any[] = new Array(9).fill(null);
  xIsNext: boolean = false;
  winner: string | null = null;
  isGameInProgress: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = new Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.isGameInProgress = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(index: number) {
    if (this.squares[index]) return;
    this.squares[index] = this.player;
    this.xIsNext = !this.xIsNext;
    this.winner = this.calculateWinner();
    this.isGameInProgress =
      !this.winner && this.squares.find((s) => s === null) === null;
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
