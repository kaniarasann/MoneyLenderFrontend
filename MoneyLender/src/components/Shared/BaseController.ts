import { common } from "./../../shared/common";
import { ToastController } from "../../../node_modules/ionic-angular";
import { Network } from "@ionic-native/network";
export class BaseController {
  constructor(
    public toaster: ToastController,
    public network: Network,
    public common: common
  ) {
    this.setUpNetworkVarible();
  }
  public CreateToast(
    msg: string,
    duration: number = 5000,
    position: string = "bottom",
    showCloseButton: boolean = true
  ): void {
    this.toaster
      .create({
        message: msg,
        duration: duration,
        position: position,
        showCloseButton: showCloseButton
      })
      .present();
  }

  private setUpNetworkVarible(): void {
    this.network.onDisconnect().subscribe(() => {
      this.common.SetUpNetWorkAvailability(false);
    });
    this.network.onConnect().subscribe(() => {
      this.common.SetUpNetWorkAvailability(true);
    });
  }
}
