import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService } from '../service/cv.service';
import { Cv } from '../model/cv';
import { debounceTime, distinctUntilChanged, switchMap, scan, tap } from 'rxjs/operators';


@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  searchControl = new FormControl();
  searchForm = this.formBuilder.group({
    search: this.searchControl
  });
  cvs: Cv[] = [];  
  intermediateResults: Cv[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private cvService: CvService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setupAutoComplete();
  }

  setupAutoComplete() {
    this.searchControl.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm) => this.cvService.searchCvs(searchTerm)),
      tap(() => {
        // Reset the array when a new search term is entered
        this.cvs = [];
      }),
      scan((acc: Cv[], current: Cv[]) => [...acc, ...current], []) 
      )
    .subscribe((cvs) => {
      this.cvs = [];
      this.cvs = cvs;
      
      
      this.intermediateResults = cvs; // Store intermediate results for display
      console.log(this.intermediateResults);
    });
    
  }

  onCvSelect(cv: Cv) {
    this.router.navigate(['/details', cv.id]);
  }
}

