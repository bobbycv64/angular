import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatTabsModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
