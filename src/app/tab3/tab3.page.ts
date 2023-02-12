import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  mobile_a : any = true;

  constructor(public platform: Platform) {
    if(platform.is("desktop")){
      this.mobile_a=false;
    }
  }


}
