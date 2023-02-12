import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  mobile_a : any = true;

  constructor(public platform: Platform,public navCtrl: NavController) {
    if(platform.is("desktop")){
      this.mobile_a=false;
    }
  }

  gotoKairanList(){
    this.navCtrl.navigateForward("kairan-list");
  }

}
