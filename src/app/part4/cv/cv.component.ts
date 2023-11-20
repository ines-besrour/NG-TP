import { Component, OnInit } from '@angular/core';
import { Cv } from "../model/cv";
import {CvService} from "../service/cv.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

  cvs :Cv[];
  selectedCV! : Cv;

  constructor(private cvService : CvService) {
    this.cvs = cvService.getDefaultCvs()
  }

  ngOnInit(): void {
  }

  showCV(cv: Cv){
    this.selectedCV = cv;
  }

}
