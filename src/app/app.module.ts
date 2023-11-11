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
import { DefaultImagePipe } from './part4/pipe/default-image.pipe';
import { EmbaucheComponent } from './part4/embauche/embauche.component';
import {ToastrModule} from "ngx-toastr";
import { HeaderComponent } from './part4/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CvListComponent } from './part4/cv-list/cv-list.component';

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
    ItemComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
    CvListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
