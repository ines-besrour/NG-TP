import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from './part4/cv/cv.component';
import { EmbaucheComponent } from './part4/embauche/embauche.component';
import { CvListComponent } from './part4/cv-list/cv-list.component';

const routes: Routes = [
  {path: '', component: CVComponent},
  {path: 'cv', component: CvListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
