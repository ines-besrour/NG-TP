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
  selectedCV : number = -1;

  constructor(private cvService : CvService) {
    this.cvs = cvService.getCvs()
  }

  ngOnInit(): void {
  }

  showCV(id: number){
    this.selectedCV = id;
  }

}
