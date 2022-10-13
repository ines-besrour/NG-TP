import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  @Input() showedCv!: Cv;

  ngOnInit(): void {
  }

}
