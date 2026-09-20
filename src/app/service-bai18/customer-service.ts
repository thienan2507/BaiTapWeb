import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable(
    {providedIn: 'root'}
)
export class CustomerService {
    private _url: string='assets/data/customers.json';
    constructor(private _http: HttpClient){}
    getGroupCustomers(): Observable<any>{
        return this._http.get<any>(this._url).pipe(
            retry(3),
            catchError(this.handleError)
        )
    }

    private handleError(error: HttpErrorResponse){
        return throwError(() => new Error(error.message || "Lỗi kết nối máy chủ"))
    }
}
