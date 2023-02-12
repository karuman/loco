import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kairan-list',
  templateUrl: './kairan-list.page.html',
  styleUrls: ['./kairan-list.page.scss'],
})
export class KairanListPage implements OnInit {

    cards: Array<{title: string, note: string}>;

  constructor(public navCtrl: NavController) {
    this.cards = [];
    this.cards.push({title: '2023年02月01日', note: '20230201'});
    this.cards.push({title: '2023年01月15日', note: '20230115'});
    this.cards.push({title: '2022年12月15日', note: '20221215'});
  }

  ngOnInit() {
  }
  gotoKairan(opt:any){
    this.navCtrl.navigateForward(["kairan"],{ queryParams: { order: opt } });
  }


}
