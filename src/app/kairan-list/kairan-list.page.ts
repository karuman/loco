import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { kairanLst } from '../kairan';
import { KairanService } from '../kairan.service';

@Component({
  selector: 'app-kairan-list',
  templateUrl: './kairan-list.page.html',
  styleUrls: ['./kairan-list.page.scss'],
})
export class KairanListPage implements OnInit {

  cards: Array<kairanLst>=[];

  constructor(public navCtrl: NavController,private kairanService: KairanService) {
  }

  ngOnInit() {
    this.cards = this.kairanService.getKairanLst();
  }
  gotoKairan(opt:any){
    this.navCtrl.navigateForward(["kairan"],{ queryParams: { order: opt } });
  }


}
