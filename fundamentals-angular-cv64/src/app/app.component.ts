import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, Item {

  title = 'fundamentals-angular-cv64';
  item: Item = <Item>{};
  items: Item[] = [];

  constructor() {
    console.log('AppComponent.constructor');
  }

  ngOnInit() {

    this.item = { description: 'description1', title: 'title1' };

    console.log(this.item.description);
    console.log(this.item.title);

    this.items.push(this.item);

  }
}
