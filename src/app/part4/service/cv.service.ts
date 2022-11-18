import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private cvs :Cv[] = [
    new Cv(
      0, "Achour", "Ines", 22, 11111111, "Student",""
    ),
    new Cv(
      1, "Sammari", "Amal", 2, 22222222, "Student2","profile2.jpg"
    ),
    new Cv(
      2, "Mami", "Y", 2, 22222222, "Student2","profile2.jpg"
    ),
  ];

  constructor() { }

  getCvs(): Cv[]{
    return this.cvs;
  }
}
