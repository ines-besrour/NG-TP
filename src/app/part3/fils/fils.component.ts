import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() pereColor! : string;
  @Output() btnClick = new EventEmitter()
  myFavoriteColor: string = "lightGreen";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit(this.myFavoriteColor);
  }

}
