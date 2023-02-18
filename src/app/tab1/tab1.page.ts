import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AngularFirestore ,AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { kairanLst } from '../kairan';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  mobile_a : any = true;
  cards: Array<kairanLst>=[];
  latest_card:kairanLst={'note':'','title':'','year':''};



  constructor(public platform: Platform,public navCtrl: NavController,
    private firestore: AngularFirestore) {
    if(platform.is("desktop")){
      this.mobile_a=false;
    }
  }

  ngOnInit() {
    //    this.cards = this.kairanService.getKairanLst();
    //    this.cards =  this.firestore.collection('kairan');
        this.firestore.collection('kairan_list',ref=> ref.orderBy('note','desc')).valueChanges().subscribe(cards => {
    
          this.cards = cards as kairanLst[];
          this.latest_card=this.cards[0];

        });
      }

  gotoKairan(opt:any,opt1:any){
    this.navCtrl.navigateForward(["kairan"],{ queryParams: { order: opt,year:opt1 } });
  }

}
