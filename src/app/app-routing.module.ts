import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from './part4/cv/cv.component';
import { DetailscvComponent } from './part4/detailscv/detailscv.component';
import { HttpComponent } from './part4/http/http.component';
import { AuthFormComponent } from './part4/auth-form/auth-form.component';

const routes: Routes = [
  {path: '', component: CVComponent},
  {path: 'cv', component: HttpComponent},
  {path: 'cv/:id', component: DetailscvComponent},
  {path: 'login', component: AuthFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
