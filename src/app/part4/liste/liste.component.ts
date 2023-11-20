import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../service/cv.service';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  juniorCvs: Cv[] = [];
  seniorCvs: Cv[] = [];
  selectedTab: string = 'junior'; // Default to junior

  @Output() showCV = new EventEmitter<Cv>()
  @Input() cvs : Cv[] = [];

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.fetchCvs();
  }
  fetchCvs() {
    this.cvService.getCvsByCategory(this.selectedTab).subscribe((cvs) => {
      if (this.selectedTab === 'junior') {
        this.juniorCvs = cvs;
      } else {
        this.seniorCvs = cvs;
      }
    });
  }

  onTabChange(tab: string) {
    this.selectedTab = tab;
    this.fetchCvs();
  }

  cvSelected(cv: Cv){
    this.showCV.emit(cv);
  }

}
