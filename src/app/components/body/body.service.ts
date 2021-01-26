import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BodyService {



  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  getCountry(code: string){
    return this.http.get('https://restcountries.eu/rest/v2/alpha/' + code);
  }

}


