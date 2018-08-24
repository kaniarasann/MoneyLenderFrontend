import { Component, OnInit } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { Chart } from "chart.js";
@Component({
  selector: "home",
  templateUrl: "home.html"
})
@IonicPage({
  name: "home"
})
export class HomeComponent implements OnInit {
  chart = [];
  data = {};
  options: {
    responsive: true,
    legend: {
      display: false;
    };
  };
  constructor() {}

  ngOnInit(): void {
    this.data = {
      datasets: [
        {
          data: [50000, 30000],
          backgroundColor: ["##FF5733", "#99FF33"]
        }
      ],
      labels: ["Amount Needs to be collected", "Amount Collected"]
    };

    this.chart = new Chart("canvas", {
      type: "doughnut",
      data: this.data,
      options: this.options
    });
  }
}
