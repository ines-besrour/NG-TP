import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-color',
  templateUrl: './bg-color.component.html',
  styleUrls: ['./bg-color.component.css']
})
export class BgColorComponent implements OnInit {

  color: string = "lightGreen";
  constructor() { }

  ngOnInit(): void {
  }

  colorChange(color : string){
    this.color = color;
  }

  defaultColor(){
    this.color = "lightGreen"
  }

}
