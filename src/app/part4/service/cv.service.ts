import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";
import { Observable, Subject, catchError, map, tap } from "rxjs";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export const MES_CONSTANTES = {
  url : 'https://apilb.tridevs.net/api/personnes'
  
}


@Injectable({
  providedIn: 'root'
})
export class CvService {

  private selectCvSubject = new Subject<Cv>();
  selectCv$ = this.selectCvSubject.asObservable();
  cvs: Cv[] = [];

  private defaultCv :Cv[] = [
    new Cv(
      34, "besrour", "ines", 22, 14656718, "Student","ines besrour.jpg"
    ),
    new Cv(
      1, "kaabachi", "imen", 2, 11111111, "Student",""
    ),
  ];

  constructor(private http: HttpClient) {
    const storedCvs = localStorage.getItem('cvs');
    if (storedCvs) {
      this.cvs = JSON.parse(storedCvs);
    } else {
      // If data is not in localStorage, fetch it from the API
      this.fetchDataFromApi();
    }
  }

  private fetchDataFromApi(): void {
    this.http.get<Cv[]>('https://apilb.tridevs.net/api/personnes')
      .pipe(
        tap((data) => {
          this.cvs = data;
          // Save data to localStorage
          localStorage.setItem('cvs', JSON.stringify(data));
        })
      )
      .subscribe();
  }

  // Modify getCvs to fetch data from the API
  getCvsFromApi(): Observable<Cv[]> {
    return this.http.get<Cv[]>(MES_CONSTANTES.url);
  }

  getDefaultCvs(){
    return this.defaultCv
  }

  getCvs(): Cv[]{
    return this.cvs;
  }
  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }

  setCvs(cvs : Cv[]){
    this.cvs=cvs
  }


  getCvById(id:number): Cv|undefined{
      return this.cvs.find((cv) => cv.id === id);

  }

  getCvsByCategory(category: string): Observable<Cv[]> {
    return this.getCvsFromApi().pipe(
      map((cvs) => cvs.filter((cv) => (category === 'junior' ? cv.age < 40 : cv.age >= 40)))
    );
  }

  searchCvs(searchTerm: string): Observable<Cv[]> {
    
    const filter = {
      where: {
        name: {
          like: `%${searchTerm}%`
        }
      }
    };
    const urlWithFilter = `${MES_CONSTANTES.url}/?filter=${encodeURIComponent(JSON.stringify(filter))}`;

    return this.http.get<Cv[]>(urlWithFilter);

  }
}

