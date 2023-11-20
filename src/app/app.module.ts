import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BgColorComponent } from './part1/bg-color/bg-color.component';
import { CarteVisiteComponent } from './part2/carte-visite/carte-visite.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { HttpComponent } from './part4/http/http.component';
import { DetailscvComponent } from './part4/detailscv/detailscv.component';
import { AuthFormComponent } from './part4/auth-form/auth-form.component';
import { AutoCompleteComponent } from './part4/auto-complete/auto-complete.component';

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
    HttpComponent,
    DetailscvComponent,
    AuthFormComponent,
    AutoCompleteComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
