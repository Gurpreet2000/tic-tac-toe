import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() value: 'X' | 'O' | undefined | null = undefined;

  constructor() {}

  ngOnInit(): void {}
}
