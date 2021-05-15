import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://api.themoviedb.org/3";
  private API_KEY = "350dad8860d22b1a9136a026d3f04a31"

  constructor(private httpClient: HttpClient) { }
  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER + '/movie/popular?api_key=' +this.API_KEY);
  }
}
