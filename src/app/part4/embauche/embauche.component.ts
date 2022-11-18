import { Component, OnInit } from '@angular/core';
import {EmbaucheService} from "../service/embauche.service";
import {Cv} from "../model/cv";

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  embauched : Cv[]
  constructor(private embaucheService : EmbaucheService) {
    this.embauched = embaucheService.getEmbaucheCvs();
  }

  ngOnInit(): void {
  }

}
