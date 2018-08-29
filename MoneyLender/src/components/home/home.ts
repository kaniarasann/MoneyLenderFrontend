import { BaseController } from './../Shared/BaseController';
import { Component, OnInit } from "@angular/core";
import { IonicPage, ToastController,NavController } from "ionic-angular";
import { Chart } from "chart.js";
import { common } from '../../shared/common';
import { Network } from '@ionic-native/network';
@Component({
  selector: "home",
  templateUrl: "home.html"
})
@IonicPage({
  name: "home"
})
export class HomeComponent extends BaseController  implements OnInit  {
  chart = [];
  data = {};
  options: {
    responsive: true,
    legend: {
      display: false;
    };
  };
  constructor(public common: common,
    public network:Network,
    public toaster: ToastController,
    public navCtrl: NavController) {
    super(toaster,network,common);
  }

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
