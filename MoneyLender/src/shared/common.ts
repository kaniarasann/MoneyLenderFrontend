import { Injectable } from "../../node_modules/@angular/core";
import { DateTime } from "ionic-angular";

@Injectable()
export class common {
  public ApiUrl: string = "http://kaniarasan-001-site1.itempurl.com";
  public AuthenticationToken:AuthenticationToken[];
}

export class AuthenticationToken {
  token: string;
  expiryDate: DateTime | null;
  isExpired: boolean | null;
}
