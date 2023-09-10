import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnderlineComponent } from './ui-button/underline/underline.component';
import { BoldComponent } from './ui-button/bold/bold.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderlineComponent,
    BoldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
