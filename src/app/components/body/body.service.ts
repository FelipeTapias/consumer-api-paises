import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BodyService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  getCountry(code: string){
    return this.http.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
  }

  // getCovid(){
  //   const headers = new HttpHeaders()
  //   .set('key', '9deb7ef6f2msh0836d17ae7ad479p1e2a30jsn8fbd0ea80293')
  //   .set('host', 'covid-193.p.rapidapi.com')
  //   return this.http.get('https://covid-193.p.rapidapi.com/', {headers, });
  // }

  // getInfoNumber(){
  //   return this.http.get(`http://numbersapi.com/80`);
  // }

}
