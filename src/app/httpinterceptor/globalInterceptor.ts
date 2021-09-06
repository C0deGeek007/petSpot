import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http" 
import { Observable, of } from "rxjs";
import { mockUser } from '../usersData/mock-user';
import { mockUserInfo } from '../usersData/mock-userInfo';
import { emailindex } from '../usersData/emailIndexMap';


@Injectable()

export class globalInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.url);
        if(req.method==='POST' && req.url==='http://localhost:4200/login') {
            const indx=emailindex.get(req.body.email);
            if(indx!=undefined && req.body['password']===mockUser[indx]['password']) {
                return of(new HttpResponse({
                    status:200,
                    body:indx
                }))
            }
        }

        if(req.method==='POST' && req.url==='http://localhost:4200/signup') {
            req.body.id=mockUser.length;
            mockUser.push(req.body);
            emailindex.set(req.body['email'],req.body.id);
            return of(new HttpResponse({
                status:200,
                body:req.body.id,
            }))
        }

        if(req.method=='POST' && req.url==='http://localhost:4200/createUser') {
            mockUserInfo.push(req.body);
            return of(new HttpResponse({
                status:200
            }))
        }

        if(req.method==='GET' && req.url==='http://localhost:4200/profile') {
            const userid=parseInt(req.params.get('id') as string)
            console.log("get user data request intercepted");
            return of (new HttpResponse({
                status:200,
                body:mockUserInfo[userid]
            }))
        }

        console.log("request not intercepted");
        return next.handle(req);
    }

}