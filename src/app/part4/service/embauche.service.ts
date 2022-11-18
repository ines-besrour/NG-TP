import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private embauche : Cv[] = []

  constructor(private toastrService: ToastrService) { }

  getEmbaucheCvs() : Cv[]{
    return this.embauche
  }

  addEmbaucheCv(cv : Cv){
    if(this.embauche.includes(cv)){
      //alert("Ce cv est déja embauché")
      this.toastrService.error("Ce cv est déja embauché",)
    }
    else{
      this.embauche.push(cv)
      this.toastrService.success("Cv embauché avec succés")
    }
  }
}
