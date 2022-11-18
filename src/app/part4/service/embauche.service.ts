import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private embauche : Cv[] = []
  constructor() { }

  getEmbaucheCvs() : Cv[]{
    return this.embauche
  }

  addEmbaucheCv(cv : Cv){
    this.embauche.push(cv)
  }
}
