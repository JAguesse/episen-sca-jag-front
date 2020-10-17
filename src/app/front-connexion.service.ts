import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FrontConnexionService {

  private baseUrl = 'http://episen-sca-jag-back_docker:8080/';
  //private baseUrl = 'http://172.31.254.61:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  postChat(chat: String) : void{
    this.http.post<boolean>(`${this.baseUrl}` + `add/order`, chat)
    .subscribe(function(data){
      console.log(data);
    });
  }
}
