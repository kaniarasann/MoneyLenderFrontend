import { common } from "./../../shared/common";
import { Component } from "@angular/core";
import { IonicPage, NavController } from "../../../node_modules/ionic-angular";
import { ToastController } from "ionic-angular";
import {
  FormGroup,
  FormBuilder,
  Validators
} from "../../../node_modules/@angular/forms";
import { BaseController } from "../Shared/BaseController";
import { LoginService } from "../../service/LoginService";

@IonicPage(
  {
    name:'login'
  }
)
@Component({
  selector: "login",
  templateUrl: "login.html"
})
export class LoginComponent extends BaseController {
  data: any;
  public login: FormGroup;

  public username: string;
  public password: string;

  public isUsernameValid: boolean;
  public isPasswordValid: boolean;

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public toaster: ToastController,
    private loginService: LoginService,
    private common: common
  ) {
    super(toaster);
    this.isUsernameValid = true;
    this.isPasswordValid = true;
    this.login = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
    this.data = {
      logo: "assets/imgs/logo.png",
      btnLogin: "Login",
      txtUsername: "Username",
      txtPassword: "Password",
      txtForgotPassword: "Forgot password?",
      btnResetYourPassword: "Reset your password",
      txtSignupnow: "Don't have an account?",
      btnSignupnow: "Signup now",
      title: "Welcome back,",
      subtitle: "please login to your account.",
      errorUser: "Field can't be empty.",
      errorPassword: "Field can't be empty."
    };
  }

  submitForm() {
    this.loginService
      .validateLoginCredentials(
        this.login.controls["username"].value,
        this.login.controls["password"].value
      )
      .subscribe(
        x => {
          this.common.AuthenticationToken = []
          this.common.AuthenticationToken.push({token:x.token,expiryDate:null,isExpired:null});
          this.navCtrl.push('home');
        },
        error => {
          console.log(error);
          this.CreateToast("Enter Valid username and password");
        }
      );
  }
}
