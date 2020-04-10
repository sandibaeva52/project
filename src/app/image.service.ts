import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Image} from './images';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {IMAGES} from './mock-images';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
  private imagesUrl = 'api/images';
  getImage(id: number): Observable<Image> {
    return of(IMAGES.find(image => image.id === id));
  }

  getImages(): Observable<Image> {
    return this.http.get<any>(this.imagesUrl)
      .pipe(
        tap(_ => this.log('fetched images')),
        catchError(this.handleError<any>('getImages', []))
      );
  }

  getImagesByCategoryId(id: number): Observable<any> {
    return of(IMAGES.filter(image => image.category_id === id));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
