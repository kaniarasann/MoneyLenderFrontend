import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";

@Component({
  selector: "home",
  templateUrl: "home.html"
})
@IonicPage({
  name: "home"
})
export class HomeComponent {
  text: string;

  constructor() {
  }
}
