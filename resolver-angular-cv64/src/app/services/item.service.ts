import { Observable } from 'rxjs';

let items = [
  { id: 1, name: "Ester" },
  { id: 2, name: "Bobby" }
];

export class ItemService {

  getItems() {
    return Observable.create(observer => {
      observer.next(items);
    });
  }
}
