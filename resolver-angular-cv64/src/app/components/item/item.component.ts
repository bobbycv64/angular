import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../../models/item.models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Item[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    //this.items = this.activatedRoute.snapshot.data['itemResolverService'];
  }

  ngOnInit() {
  }
}
