import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../components/home/home.component';
import { ItemComponent } from '../components/item/item.component';
import { ItemResolverService } from '../services/resolvers/item-resolver.service';

const routes: Routes = [
  {
    path: 'item', component: ItemComponent
  //  resolve: { itemResolverService: ItemResolverService }
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', component: HomeComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class RoutingModule { }
