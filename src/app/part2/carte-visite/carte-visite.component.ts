import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit {

  firstName : string = "Ines";
  secondName : string = "Achour";
  job: string = "Student";
  image: string = "insat.jpg";
  quote: string = "No quotes here"
  jobDescription : string = "Exhausting"
  keyWords : string = "No idea"

  constructor() { }

  ngOnInit(): void {
  }

  test(){
    console.log("ok")
  }
}
