import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

  constructor() { }

  selectedCV : number = -1;
  ngOnInit(): void {
  }

  showCV(){
    this.selectedCV =0;
  }

}
