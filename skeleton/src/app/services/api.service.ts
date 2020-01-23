import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  base_path = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { 

  }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      })
    }
   
    // Handle API errors
    // handleError(error: HttpErrorResponse) {
    //   if (error.error instanceof ErrorEvent) {
    //     // A client-side or network error occurred. Handle it accordingly.
    //     console.error('An error occurred:', error.error.message);
    //   } else {
    //     // The backend returned an unsuccessful response code.
    //     // The response body may contain clues as to what went wrong,
    //     console.error(
    //       `Backend returned code ${error.status}, ` +
    //       `body was: ${error.error}`);
    //   }
    //   // return an observable with a user-facing error message
    //   return throwError(
    //     'Something bad happened; please try again later.');
    // };
    private handleError (error: Response | any) {
      return Observable.throw(error);
    }
   
   
    // Create a new item
    createItem(controller,item): Observable<any> {
      let path = this.base_path + '/' + 'api/'+ controller;
      return this.http
        .post<any>(path, JSON.stringify(item), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
       // Update item by id
       updateItem(controller, item): Observable<any> {
        let path = this.base_path + '/' + 'api/'+ controller;
        return this.http
          .put<any>(path, JSON.stringify(item), this.httpOptions)
          .pipe(
            retry(2),
            catchError(this.handleError)
          )
      }
    
    // Get data
    getData(controller): Observable<any> {
      return this.http
        .get<any>(this.base_path + '/' + 'api/'+ controller)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

    // Get single student data by ID
    getItem(id): Observable<any> {
      return this.http
        .get<any>(this.base_path + '/' + id)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
   
    // Get students data
    getList(): Observable<any> {
      return this.http
        .get<any>(this.base_path)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
   
 
   
    // Delete item by id
    deleteItem(controller,id) {
      return this.http
        .delete<any>(this.base_path + '/' + 'api/'+ controller + '/' + id, this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }


}
