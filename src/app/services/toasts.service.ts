import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root'
})
export class ToastsService {

  constructor(private toast: HotToastService) { }


  toastsShow(msg:string) {
    this.toast.show(msg);
  }

  toastsLoading(msg:string) {
    this.toast.loading(msg);
  }

  toastsSuccess(msg:string) {
    this.toast.success(msg);
  }

  toastsWarning(msg:string) {
    this.toast.warning(msg);
  }

  toastsError(msg:string) {
    this.toast.error(msg);
  }

  toastsInfo(msg:string) {
    this.toast.info(msg);
  }
}
