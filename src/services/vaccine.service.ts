import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const baseUrl = "https://integrated-medical-records-dem.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

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
      this.url + '/patient-immunization/patient-immunization/all?cpf=42367438123',
      {headers: this.httpOptions.headers}
    ).pipe(
      map(response => { 
   
    console.log('service resposnse', response)
    return response;
    })
    );

  }
}


// var response = [
//   {
//     "idPatientVaccines": 1,
//     "vaccine": {
//       "idVaccine": 1,
//       "name": "FA",
//       "description": "vacina contra febre amarela",
//       "numberDoses": 0
//     },
//     "vaccineLot": 12345678,
//     "vaccineExpirationDate": null,
//     "dataVaccine": "08-11-2015", //"2015::08::11",
//     "placeVaccineApplied": "UBS ERMELINO MATARAZZO"
//   },
//   {
//     "idPatientVaccines": 10,
//     "vaccine": {
//       "idVaccine": 1,
//       "name": "FA",
//       "description": "vacina contra febre amarela",
//       "numberDoses": 0
//     },
//     "vaccineLot": 987654321,
//     "vaccineExpirationDate": null,
//     "dataVaccine": "08-11-2019",
//     "placeVaccineApplied": "UBS ERMELINO MATARAZZO"
//   },
//   {
//     "idPatientVaccines": 3,
//     "vaccine": {
//       "idVaccine": 2,
//       "name": "SABIN",
//       "description": "vacina contra a poliomielite.",
//       "numberDoses": 0
//     },
//     "vaccineLot": 5432654,
//     "vaccineExpirationDate": null,
//     "dataVaccine": "08-11-2012",
//     "placeVaccineApplied": "UBS ERMELINO MATARAZZO"
//   },
//   {
//     "idPatientVaccines": 2,
//     "vaccine": {
//       "idVaccine": 5,
//       "name": "VHB",
//       "description": "vacina contra a hepatite B.",
//       "numberDoses": 0
//     },
//     "vaccineLot": 653234,
//     "vaccineExpirationDate": null,
//     "dataVaccine": "21-01-2016", //"2016::01::21",
//     "placeVaccineApplied": "UBS ERMELINO MATARAZZO"
//   }
// ]