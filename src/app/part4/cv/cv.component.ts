import { Component, OnInit } from '@angular/core';
import { Cv } from "../model/cv";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

  constructor() { }
  selectedCV : number = -1;
  cvs :Cv[] = [
    new Cv(
      0, "Achour", "Ines", 22, 11111111, "Student","test"
    ),
    new Cv(
      1, "Mami", "Y", 2, 22222222, "Student2","test2"
    ),
  ];

  ngOnInit(): void {
  }

  showCV(id: number){
    this.selectedCV = id;
  }

}
