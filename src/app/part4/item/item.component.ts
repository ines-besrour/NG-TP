import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Output() itemClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.itemClick.emit()
  }

}
