import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = `http://${environment.api.host}:${environment.api.port}`;
  userUrl = `${this.url}/user`;
  loginUrl = `${this.url}/login`;

  constructor(private http: HttpClient) { }

  getUser(): Observable<{}> {
    return this.http.get(this.userUrl)
      .pipe(
        tap(user => this.log('fetched user')),
        catchError(this.handleError('getUser', []))
      );
  }

  login(loginForm) {
    return this.http.post(this.loginUrl, loginForm, httpOptions)
      .pipe(
        tap(user => this.log('send success')),
        catchError(this.handleError('login', []))
      );
  }

  logout() {

  }
  
  private log(message: string) {
    return console.log(message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

}
