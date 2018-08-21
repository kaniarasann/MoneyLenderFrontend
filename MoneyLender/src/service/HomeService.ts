import { HttpClient, HttpHeaders } from "@angular/common/http";
import { common } from "./../shared/common";
import { Injectable } from "@angular/core";

@Injectable()
export class HomeService {
  constructor(private common: common, private Http: HttpClient) {}
  GetBookDetails(){
  return this.Http.get(`${this.common.ApiUrl}/api/books`);
  }
}
