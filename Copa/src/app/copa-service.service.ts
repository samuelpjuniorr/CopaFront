import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CopaServiceService {
  urlBaseApi:string = 'https://localhost:44333/api/'
  constructor(private httpClient: HttpClient) {

   }

   resgatarEquipes(){

    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
      })
    }
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.urlBaseApi+'equipe/listar',httpOptions).subscribe(data => {
        resolve(data)
      }, err => {
        console.log(err);
        reject(err);
      });
    });

   }

   gerarCopa(equipesParticipantes:any){

    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    }

    return new Promise((resolve, reject) => {
      this.httpClient.post(this.urlBaseApi+'copa/resultado',equipesParticipantes,httpOptions).subscribe(data => {
        resolve(data)
      }, err => {
        console.log(err);
        reject(err);
      });
    });

   }
}
