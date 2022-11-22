import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ; 
import { User} from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor( private http:HttpClient) { }
  getAllUsers(){
    return this.http.get<User>('http://localhost:3000/users'); 
  }
  CreatelUsers(data : any ){
    return this.http.post('http://localhost:3000/users',data); 
  }
  DeleteUsers(id :any ){
    return this.http.delete('http://localhost:3000/users',id); 
  }
 /*
  getoneUser(){
    return this.http.get<UserInterface>('http://localhost:3000/users'); 
  }*/
}
