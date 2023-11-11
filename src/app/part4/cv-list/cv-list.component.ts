import { Component, OnInit } from '@angular/core';
import { CvListService } from '../service/cv-list.service';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent implements OnInit {

  cvs: any[] = [];
  error: string = '';
  constructor(private cvService: CvListService) { }

  ngOnInit() {
    this.getCvs();
  }

  getCvs() {
    this.cvService.getCvs()
      .subscribe(cvs => {
        this.cvs = cvs;
      },
      error => {
        this.error = error;
      });
  }

}
