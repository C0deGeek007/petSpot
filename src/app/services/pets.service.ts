import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http:HttpClient) { }

  addpets(petdetail:object) {
    // console.log("inside pet service");
    // console.log(petdetail);
    return this.http.post<any>('http://localhost:4200/addpets',petdetail);
  }

  getpets(userid:string) {
    console.log("inside get pets service")
    console.log(userid)
    return this.http.get<any>('http://localhost:4200/getpets',{params:{id:userid}});
  }

}
