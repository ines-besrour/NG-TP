import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../model/cv";
import {EmbaucheService} from "../service/embauche.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private embaucheService: EmbaucheService) { }

  @Input() showedCv!: Cv;

  ngOnInit(): void {
  }

  embaucher(){
    this.embaucheService.addEmbaucheCv(this.showedCv)
  }

}
