import { HomeComponent } from "./home";
import { NgModule } from "../../../node_modules/@angular/core";
import { IonicPageModule } from "../../../node_modules/ionic-angular";
@NgModule({
  declarations: [HomeComponent],
  imports: [IonicPageModule.forChild(HomeComponent)],
  exports: [HomeComponent]
})
export class HomeModule {}
