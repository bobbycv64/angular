import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { ItemResolverService } from './services/resolvers/item-resolver.service';

import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, RoutingModule
  ],
//  providers: [ItemResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
