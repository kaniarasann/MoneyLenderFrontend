import { ToastController } from "../../../node_modules/ionic-angular";

export class BaseController {
  constructor(public toaster: ToastController) {}
  public CreateToast(
    msg: string,
    duration: number = 5000,
    position: string ="bottom",
    showCloseButton: boolean=true
  ): void {
    this.toaster.create({
      message: msg,
      duration: duration,
      position: position,
      showCloseButton: showCloseButton
    }).present();
  }
}
