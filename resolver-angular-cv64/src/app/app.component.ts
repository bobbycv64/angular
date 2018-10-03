// https://www.youtube.com/watch?v=6xmCNfPP90E
// https://www.youtube.com/watch?v=KefdTtsoKjY
// https://www.youtube.com/watch?v=Sm353aYNZxU
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from './models/item.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  items: Item[];
  item: Item;

  // inject into AppComponent the ActivatedRoute
  constructor(private activatedRoute: ActivatedRoute) {

    // receives data that was previously created by the Router
    // subscribe to the data observable and retrieve the data and extract item from the data
  //  activatedRoute.data.subscribe(
  //    data => this.item = data['item']
  //  );
  }

  //constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  //  this.items = this.activatedRoute.snapshot.data['itemResolverService'];

  ngOnInit() {

  }
}
