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
    this.cards.push({title: '2023年02月01日', note: 'test'});
    this.cards.push({title: '2023年01月15日', note: 'test'});
    this.cards.push({title: '2022年12月15日', note: 'test'});
    this.cards.push({title: '2022年12月01日', note: 'test'});
    this.cards.push({title: '2022年11月15日', note: 'test'});
    this.cards.push({title: '2022年11月01日', note: 'test'});
    this.cards.push({title: '2022年10月15日', note: 'test'});
  }

  ngOnInit() {
  }
  gotoKairan(opt:any){
    this.navCtrl.navigateForward("kairan");
  }


}
