import { common } from "./common";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import { Subject } from "rxjs/Subject";
import { LoadingController } from "ionic-angular";
import 'rxjs/add/operator/finally';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private noOfActiveRequest: number = 0;
  private showHideLoader$ = new Subject<number>();
  private showLoadIcon: boolean = false;
  private dismissEvent$ = new Subject<boolean>();
  public loading = this.loadingCtrl.create({
    content: "Please wait...",
    dismissOnPageChange:true
  });
  constructor(private common: common, public loadingCtrl: LoadingController) {
    this.showHideLoader$.subscribe(x => {
      if (!this.showLoadIcon && x > 0) {
        this.showLoadIcon = true;
        this.loading.present();
      }
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    debugger;
    this.noOfActiveRequest++;
    this.showHideLoader$.next(this.noOfActiveRequest);
    if (
      this.common.AuthenticationToken != null &&
      this.common.AuthenticationToken.length > 0
    ) {
      req = req.clone({
        setHeaders: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
          Authorization: `Bearer ${this.common.AuthenticationToken[0].token}`
        }
      });
    }
    return next.handle(req).finally(() => this.hideShowLoadingIcon(this));
  }
  hideShowLoadingIcon(event:any):void{
    debugger;
    if (event instanceof HttpResponse) {
    if (this.showLoadIcon && this.noOfActiveRequest >= 0) {
      this.showLoadIcon = false;
      this.noOfActiveRequest = 0;
      this.loading.dismiss();
    }
  }
  }
}
