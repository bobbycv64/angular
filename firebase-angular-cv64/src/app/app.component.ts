import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {

  items: Observable<Item[]>;

  constructor(public angularFirestore: AngularFirestore) {
    this.items = this.angularFirestore.collection('items').valueChanges();

    console.log("end");
  }
}
