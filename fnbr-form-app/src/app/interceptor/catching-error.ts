import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { ResApp } from '@app/model/ResApp';

@Injectable({providedIn : 'any'})
export class ErrorCatchingInterceptor implements HttpInterceptor {



    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        return next.handle(request)
            .pipe(
                map(res => {

                   if(res instanceof HttpResponse && (res.body as ResApp<any>).code != "0001" ){

                    

                    throw new Error((res.body as ResApp<any>).msgUsuario);
                    
                   }

                    return res
                }),
                catchError((error: HttpErrorResponse) => {
                    

                    return throwError(()=>error);
                    
                })
            )
    }
}