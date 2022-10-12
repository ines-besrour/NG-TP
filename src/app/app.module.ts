import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BgColorComponent } from './part1/bg-color/bg-color.component';
import { CarteVisiteComponent } from './part2/carte-visite/carte-visite.component';
import {FormsModule} from "@angular/forms";
import { FilsComponent } from './part3/fils/fils.component';
import { PereComponent } from './part3/pere/pere.component';
import { CVComponent } from './part4/cv/cv.component';
import { ListeComponent } from './part4/liste/liste.component';
import { DetailComponent } from './part4/detail/detail.component';
import { ItemComponent } from './part4/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    BgColorComponent,
    CarteVisiteComponent,
    FilsComponent,
    PereComponent,
    CVComponent,
    ListeComponent,
    DetailComponent,
    ItemComponent
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
