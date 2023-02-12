import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kairan',
  templateUrl: './kairan.page.html',
  styleUrls: ['./kairan.page.scss'],
})
export class KairanPage implements OnInit {
  @Input() public id: string =""; // *a

  click_mode =false;
  prev_card :any = null;
  
  private queryParams: any;
  count: number = 0;

  sliderZoomOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,
    zoom: {
      maxRatio: 5
    },
  }
  
  img_url_list: any[] = [];
  kairan : any[] =[];
  
  constructor(private route: ActivatedRoute) {
    var img_list:any[]=[];
    img_list.push('1HjpsSpqw0iVE4sfvJGssqYXbUxQshIHl');
    img_list.push('1X7o1-6dXYLank7SKqHaXCEqmBr1P9EOB');
    img_list.push('1obiEezlGmFz_TB8A3Z38ltzXmMShJNJr');
    img_list.push('1UtN2nGyGz0s-8wBYyJQfjCGhhXcW9dMv');
    img_list.push('142yYd2NPhLYCbf6FyDw8_72QtdoPeXEg');
    img_list.push('1qednJeI7KMLlhymL397ByiML2LPG1nFx');
    img_list.push('1-rXhNu1OBBgue8yIaxbjM6qjOuKN-Qaj');
    img_list.push('1XVT7DSWCyWkI46ujfoNK6sXgb7-uUh3V');
    img_list.push('1ym5rAU1QlLaG4OQNsRiLgpCalWWJ5lti');
    img_list.push('1TZNXUs-aitd3uT0o-ds5ybE6dSJPazcq');
    this.kairan['20221215']=img_list;

    img_list=[];
    img_list.push('1JFZwg6FfZkWfaX52BinVlQHqbWmIQjNl');
    img_list.push('1dmj68MpYjgsjLGkERPaglEnNF-Gk5WPE');
    img_list.push('1yBDL26cfbnuj0rUJJIsVbMGwxLOklKvt');
    img_list.push('1qGnxvI0NfPJEx-4bjD5dQ_W7ez_fArq5');
    img_list.push('1HQXV9HHtoRpjPPVUFVKQ2nvTYPHOCyBx');
    img_list.push('1jUxs5BP52IJ4NVNRdWxLYb2xcN9nd1QQ');
    img_list.push('1VJlr_fXiO0dboDId7AegYM1iLRYUASCo');
    img_list.push('1cI3TkpoRyyxZxziGo4-1SiRwyhxqxEM5');
    img_list.push('1VWvkxlIy3K9ae-powL-GANKhJuBsCT15');
    img_list.push('1LLyKhYukqMv4xtl9HQt7AYqqMSYpKPNF');
    img_list.push('1oveAGS31GwUB2uc2zpSuWPAgZu5PDLoN');
    img_list.push('1FRwoT7EmRL5LW00M5GVhGH3BPNmLzvdw');
    img_list.push('1OpZAMwCVm_mXMukot5r-uCx9qP7o7Naz');
    img_list.push('1EA3aE2h4QnQpDUXTuJ9wSLqeBsipq6em');    
    this.kairan['20230115']=img_list;

    img_list=[];    
    img_list.push('1KtPpnjnFcgTUCuieMw7XJ11OSWHlYUXh');
    img_list.push('1eppw_y7yA9BF0GqqTV69aM3-C0iKcAYT');
    img_list.push('1IUZad1HtOTxSTduhvZs1XejY9BamnrZQ');
    img_list.push('1iSCZDhitvog7Q0uqw4zzS2rGN9ewDDvz');
    img_list.push('1k7Xq5X8SQTAxX_8l6dXn-6wWQYyQgbk0');
    img_list.push('1Zg0TuJKBAtDzRxu7h73pSxHDPbk6Jd-S');
    img_list.push('1gMlaaQKilBdno-mAzsMXkriG2TlpL5cj');
    img_list.push('1uLBEpu_AcCjtiXlEr_NULfbP4AIGokuD');
    this.kairan['20230201']=img_list;    
   }

  ngOnInit() {
    this.queryParams = this.route.snapshot.queryParams;
    this.count = parseInt(this.queryParams.order);
    this.img_url_list = this.kairan[this.count];
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
