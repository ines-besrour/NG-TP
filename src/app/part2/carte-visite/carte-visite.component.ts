import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit {

  firstName : string = "Ines";
  secondName : string = "Besrour";
  job: string = "Student";
  image: string = "insat.jpg";
  quote: string = "test"
  jobDescription : string = "Software engineer"
  keyWords : string = "python"

  constructor() { }

  ngOnInit(): void {
  }

  test(){
    console.log("ok")
  }
}
