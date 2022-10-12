import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  @Output() showCV = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }


  cvSelected(){
    this.showCV.emit();
  }

}
