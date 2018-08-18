import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { common } from '../shared/common';

@Injectable()
export class LoginService {
  constructor(private httpService: HttpClient,private common:common) {}

  validateLoginCredentials() {
    return this.httpService.post(`${this.common.ApiUrl}/api/login`, {
      email: "peter@klaven",
      password: "cityslicka"
    });
  }
}
