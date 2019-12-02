import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const baseUrl = "https://integrated-medical-records-dem.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class EmergencyService {

  url: string = baseUrl;

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };


  getAllInfo() {
    return this.http.get(
      this.url + '/emergency-card/get-card?idEmergencyCard=2',
      {headers: this.httpOptions.headers}
      ).pipe(
        map((response:any) => {
          console.log('service resposnse', response)
          return response;
        })
      );

  }
}