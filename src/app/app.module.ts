import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BgColorComponent } from './bg-color/bg-color.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import {FormsModule} from "@angular/forms";
import { FilsComponent } from './fils/fils.component';
import { PereComponent } from './pere/pere.component';

@NgModule({
  declarations: [
    AppComponent,
    BgColorComponent,
    CarteVisiteComponent,
    FilsComponent,
    PereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
