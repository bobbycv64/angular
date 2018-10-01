// https://www.youtube.com/watch?v=Dm1OpX42Aho&t=6s
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../../models/item.models';
import { ItemService } from '../item.service';

//@Injectable()
//export class ItemResolverService implements Resolve<Item[]> {

  //constructor(private _itemService: ItemService) {}
  //resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): Observable<Item[]> {
    //return this._itemService.getItems();
//  }
//}

export class ItemResolverService {
  
}
