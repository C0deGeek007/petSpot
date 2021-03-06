import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getUserProfile(user:string) {
    return this.http.get<any>('http://localhost:4200/profile',{params:{id:user}});
  }

  editUserProfile(userChanges:object) {
    console.log("user changes are");
    console.log(userChanges);
    return this.http.post<any>('http://localhost:4200/editUser',userChanges)
  }

}
