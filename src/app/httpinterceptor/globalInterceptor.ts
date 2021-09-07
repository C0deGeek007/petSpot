import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http" 
import { Observable, of } from "rxjs";
import { mockUser } from '../usersData/mock-user';
import { mockUserInfo } from '../usersData/mock-userInfo';
import { emailindex } from '../usersData/emailIndexMap';
import { userpetsmap } from '../usersData/mock-pets';


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

        if(req.method==='POST' && req.url==='http://localhost:4200/editUser') {
            const userid=parseInt(req.body['id']);
            mockUser[userid].password=req.body['password'];
            mockUserInfo[userid].username=req.body['username'];
            mockUserInfo[userid].password=req.body['password'];
            return of(new HttpResponse({
                status:200
            }))
        }

        if(req.method==='POST' && req.url==='http://localhost:4200/addpets') {
            const userid=parseInt(req.body.userid);
            delete req.body.userid;
            const petsdetails=req.body;
            // console.log('inside interceptor');
            // console.log(userid);
            // console.log(petsdetails);
            if(userpetsmap.has(userid)) {
                const petid=userpetsmap.get(userid)?.length
                petsdetails['id']=petid;
                userpetsmap.get(userid)?.push(petsdetails);
            } else {
                userpetsmap.set(userid,[]);
                petsdetails['id']=0;
                userpetsmap.get(userid)?.push(petsdetails);
            }
            return of(new HttpResponse({
                status:200,
                body:userpetsmap
            }))
        }

        if(req.method==='GET' && req.url==='http://localhost:4200/getpets') {
            const userid=parseInt(req.params.get('id') as string);
            console.log("getpets interceptor");
            console.log(userid);
            if(userpetsmap.has(userid)) {
                const res=userpetsmap.get(userid);
                return of(new HttpResponse({
                    status:200,
                    body:res
                }))
            }else {
                return of(new HttpResponse({
                    status:200,
                    body:[]
                }))
            }
        }

        if(req.method==='GET' && req.url==='http://localhost:4200/petById') {
            const petid=parseInt(req.params.get('petid') as string);
            const userid=parseInt(req.params.get('userid') as string);
            return of(new HttpResponse({
                status:200,
                body:userpetsmap.get(userid)![petid]
            }))
        }

        if(req.method==='POST' && req.url==='http://localhost:4200/editpets') {
            const userid=parseInt(req.body.userid);
            delete req.body.userid;
            const petid=parseInt(req.body.id);
            userpetsmap.get(userid)![petid]=req.body;
            return of(new HttpResponse({
                status:200
            }))
        }

        console.log("request not intercepted");
        return next.handle(req);
    }

}