import { HomeService } from "./../../service/HomeService";
import { Component } from "@angular/core";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    this.homeService.GetBookDetails().subscribe(
      x => {
        console.log(x);
      },
      err => {
        console.log(err);
      }
    );
  }
}
