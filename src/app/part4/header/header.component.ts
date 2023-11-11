import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    
  ) { }
  visibility = false;
  ngOnInit() {
  }


  show() {
    this.visibility = !this.visibility;
  }
}