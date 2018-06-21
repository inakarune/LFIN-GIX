import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  url = `http://${environment.api.host}:${environment.api.port}`;
  

  constructor(private http: HttpClient) { }

  getGames(): Observable<{}> {
    return this.http.get(this.url + '/games')
      .pipe(
        tap(user => this.log('fetched user')),
        catchError(this.handleError('getUser', []))
      );
  }

  getGame(id: string): Observable<{}> {
    return this.http.get(this.url + `/games/${id}`)
      .pipe(
        tap(user => this.log('fetched user')),
        catchError(this.handleError('getUser', []))
      );
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
