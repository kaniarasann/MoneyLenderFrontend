import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { common } from '../shared/common';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  constructor(private httpService: HttpClient,private common:common) {}

  validateLoginCredentials(username:string,password:string):Observable<any> {
    return this.httpService.post(`${this.common.ApiUrl}/api/token`, {
      username: username,
      password: password
    });
  }
}
