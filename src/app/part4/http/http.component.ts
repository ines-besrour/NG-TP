import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../service/cv.service';
import { ToastrService } from 'ngx-toastr';



export const MES_CONSTANTES = {
  url : 'https://apilb.tridevs.net/api/personnes'
  
}

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  cvs :Cv[]=[];
  selectedCV! : Cv | undefined;


  constructor(
    private httpClient :HttpClient,
    private cvService : CvService,
    private toastr : ToastrService
    ) {  }

  ngOnInit(): void {

    this.cvService.getCvsFromApi().subscribe(
      (cvs) => {
        this.cvs = cvs;
        // Update the cvs array in CvService if needed
        this.cvService.setCvs(cvs);
      },
      (error) => {
        this.toastr.error('An error occurred while fetching data');
        // Fallback to default data in case of an error
        this.cvs = this.cvService.getDefaultCvs();
      }
    );
  }
  showCV(cv: Cv){
    this.selectedCV = cv;
    
  }

}
