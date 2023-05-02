import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  text: string = '';
  constructor() {}

  ngOnInit(): void {}
  changeText(event: Event) {
    this.text = (event.target as HTMLInputElement).value;
  }

  addTodo(): void {
    console.log('addTodo- ', this.text);
  }
}
