import { Observable, of } from 'rxjs';

function log(message: string) {
    return console.log(message);
}

function handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
}

