import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private cvs :Cv[] = [
    new Cv(
      0, "besrour", "ines", 22, 14656718, "Student","ines besrour.jpg"
    ),
    new Cv(
      1, "kaabachi", "imen", 2, 11111111, "Student",""
    ),
  ];

  constructor() { }

  getCvs(): Cv[]{
    return this.cvs;
  }

}
