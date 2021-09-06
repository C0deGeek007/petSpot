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

}
