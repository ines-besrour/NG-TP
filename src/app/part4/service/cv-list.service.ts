import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvListService {
  private apiUrl = 'https://apilb.tridevs.net';

  constructor(private http: HttpClient) { }
  getCvs(): Observable<any[]> {
    const url = `${this.apiUrl}/api/cvs`;

    return this.http.get<any[]>(url)
      .pipe(
        catchError(error => {
          console.error('Une erreur s\'est produite lors de la récupération des CVs', error);
          // Afficher un toast d'erreur ici, par exemple avec une bibliothèque de notifications comme ngx-toastr
          // et renvoyer des FakeCvs en cas d'erreur
          return throwError('Une erreur est survenue, les FakeCvs sont affichés.');
        })
      );
    
  }
  
}
