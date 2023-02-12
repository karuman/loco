import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  mobile_a : any = true;

  constructor(public platform: Platform,public navCtrl: NavController) {
    if(platform.is("desktop")){
      this.mobile_a=false;
    }
  }

  gotoKairan(){
    var opt='20230201';
    this.navCtrl.navigateForward(["kairan"],{ queryParams: { order: opt } });
  }

}
