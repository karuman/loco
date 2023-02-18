import { Component, OnInit, Input,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { kairan } from '../kairan';
import { AngularFirestore ,AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { parse } from 'path';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-kairan',
  templateUrl: './kairan.page.html',
  styleUrls: ['./kairan.page.scss'],
})
export class KairanPage implements OnInit, OnDestroy {

  click_mode =false;
  prev_card :any = null;
  private subscription!: Subscription ;

  private queryParams: any;
  count: string = '';
  year:string ='';

  sliderZoomOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,
    zoom: {
      maxRatio: 5
    },
  }
  
  mobile_a : any = true;

  img_url_list: any[] = [];
  kairan : any[] =[];
  kairans: Array<kairan>=[];
  
  constructor(private route: ActivatedRoute,public platform: Platform,private firestore: AngularFirestore) {
    if(platform.is("desktop")){
      this.mobile_a=false;
    }
   }

  ngOnInit() {
    this.queryParams = this.route.snapshot.queryParams;
    this.count = this.queryParams.order;
    this.year = this.queryParams.year;

    this.subscription= this.firestore.collection(this.year,ref=> ref.where('note','==',this.count).orderBy('idx')).valueChanges().subscribe(kairans => {

      this.kairans = kairans as kairan[];
 
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  clickImg(card:any){
    if(this.click_mode){
      this.click_mode=false;
      if(this.prev_card!=null){
        this.prev_card.el.style['z-index'] = 9;
        this.prev_card.Zoom
      }
    }else{
      this.click_mode=true;
      card.el.style['z-index'] = 11;
      this.prev_card = card;
    }
  }

}
