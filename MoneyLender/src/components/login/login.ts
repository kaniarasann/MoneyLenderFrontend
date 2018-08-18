import { Component, Input } from "@angular/core";
import { IonicPage, NavController } from "../../../node_modules/ionic-angular";
import { ToastController } from "ionic-angular";
import {
  FormGroup,
  FormBuilder,
  Validators
} from "../../../node_modules/@angular/forms";
import { BaseController } from "../Shared/BaseController";
import { LoginService } from "../../service/LoginService";
import { HomePage } from "../../pages/home/home";


@IonicPage()
@Component({
  selector: "login",
  templateUrl: "login.html"
})
export class LoginComponent extends BaseController{
  @Input()
  data: any;
  @Input()
  events: any;

  public login: FormGroup;

  public username: string;
  public password: string;

  public isUsernameValid: boolean;
  public isPasswordValid: boolean;

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public toaster: ToastController,
    private loginService:LoginService
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
    this.loginService.validateLoginCredentials().subscribe(x=>{
      this.navCtrl.push(HomePage);
      console.log(x)
    });
  }
}
