import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public httpClient: HttpClient) { }

  public getUsers(): Observable<any>{
    return this.httpClient.get('http://localhost:3000')
  }

  public newUser(data1,data2,data3): Observable<any>{
    return this.httpClient.post('http://localhost:3000',
    {
      'Name': data1,
      'Password': data2,
      'Email':data3
    })
  }
}
