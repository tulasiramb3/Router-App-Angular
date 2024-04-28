import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private defaultHeaders() : any {
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    headers.append('Authorization' , 'sampleauth');
    return headers;
  }

  getWishItems() : any{
    let options = this.defaultHeaders();
    // options.params = new HttpParams({
    //   fromObject : {format : 'json'}
    // })
    return this.http.get("assets/wishes.json" , options).pipe(catchError(this.handleError));
  }

  private handleError(error : HttpErrorResponse){
    if(error.status == 0){
      console.log("client side error" , error.error);
    }
    else{
      console.log("server side error" , error.error);
    }
    return throwError(()=> new Error("some server error occured"));
  }
 

}
