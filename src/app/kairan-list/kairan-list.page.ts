import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { kairanLst } from '../kairan';
import { KairanService } from '../kairan.service';
import { AngularFirestore ,AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-kairan-list',
  templateUrl: './kairan-list.page.html',
  styleUrls: ['./kairan-list.page.scss'],
})
export class KairanListPage implements OnInit {

  cards: Array<kairanLst>=[];

  constructor(public navCtrl: NavController,private kairanService: KairanService,private firestore: AngularFirestore) {
  }

  ngOnInit() {
//    this.cards = this.kairanService.getKairanLst();
//    this.cards =  this.firestore.collection('kairan');
    this.firestore.collection('kairan',ref=> ref.orderBy('note','desc')).valueChanges().subscribe(cards => {

      this.cards = cards as kairanLst[];
 
    });
  }
  gotoKairan(opt:any){
    this.navCtrl.navigateForward(["kairan"],{ queryParams: { order: opt } });
  }


}
