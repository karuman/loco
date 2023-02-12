import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  mobile_a : any = true;

  constructor(public platform: Platform) {
    if(platform.is("desktop")){
      this.mobile_a=false;
    }
  }

}
