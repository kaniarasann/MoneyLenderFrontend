import { NgModule } from "../../../node_modules/@angular/core";
import { LoginComponent } from "./login";
import { IonicPageModule } from "../../../node_modules/ionic-angular";

@NgModule({
  declarations:[LoginComponent],
  imports:[IonicPageModule.forChild(LoginComponent)],
  exports:[LoginComponent]
})
export class LoginModule{

}
