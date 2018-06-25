import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url = `http://${environment.api.host}:${environment.api.port}`;

  constructor(private http: HttpClient) { }

  getCompany(id: string): Observable<any> {
    return this.http.get(this.url + '/companys/' + id)
      .pipe();
  }
}
