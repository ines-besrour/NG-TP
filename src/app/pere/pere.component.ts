import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

  color: string = "green";

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color : string){
    this.color = color
  }

}
