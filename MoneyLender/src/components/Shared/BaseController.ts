import { ToastController, Toast } from "../../../node_modules/ionic-angular";

export class BaseController {
  constructor(public toaster: ToastController) {}
  public CreateToast(
    msg: string,
    duration: number,
    position: string,
    showCloseButton: boolean
  ): void {
    this.toaster.create({
      message: msg,
      duration: duration,
      position: position,
      showCloseButton: showCloseButton
    }).present();
  }
}
