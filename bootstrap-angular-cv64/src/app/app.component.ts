import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'bootstrap-angular-cv64';

  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();

  constructor() {
    console.log('AppComponent.constructor');
  }

  increment() {
    this.count++;
    this.countChange.emit(this.count);
    console.log('increment current count: ' + this.count);
  }

  decrement() {
    this.count--;
    this.countChange.emit(this.count);
    console.log('decrement current count: ' + this.count);
  }
}
