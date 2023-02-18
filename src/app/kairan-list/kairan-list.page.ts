import { Component, OnInit ,OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { kairanLst } from '../kairan';
import { KairanService } from '../kairan.service';
import { AngularFirestore ,AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-kairan-list',
  templateUrl: './kairan-list.page.html',
  styleUrls: ['./kairan-list.page.scss'],
})
export class KairanListPage implements OnInit,OnDestroy  {

  cards: Array<kairanLst>=[];
  private subscription!: Subscription ;

  constructor(public navCtrl: NavController,private kairanService: KairanService,private firestore: AngularFirestore) {
  }

  ngOnInit() {
//    this.cards = this.kairanService.getKairanLst();
//    this.cards =  this.firestore.collection('kairan');
    this.subscription=this.firestore.collection('kairan_list',ref=> ref.orderBy('note','desc')).valueChanges().subscribe(cards => {

      this.cards = cards as kairanLst[];
 
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  gotoKairan(opt:any,opt1:any){
    this.navCtrl.navigateForward(["kairan"],{ queryParams: { order: opt,year:opt1 } });
  }


}
