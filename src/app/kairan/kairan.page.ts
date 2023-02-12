import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kairan',
  templateUrl: './kairan.page.html',
  styleUrls: ['./kairan.page.scss'],
})
export class KairanPage implements OnInit {
  @Input() public id: string =""; // *a

  click_mode =false;
  prev_card :any = null;
  
  sliderZoomOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,
    zoom: {
      maxRatio: 5
    },
  }
  
  img_url_list: any[] = [];
  
  constructor() {
    this.img_url_list.push('1SivTDEtuWwkqLEvZxCXTXtisR6tKmIrA');
    this.img_url_list.push('1ev1vuvLk2hA6c2fZI55aXUo9g5EICv4v')
    this.img_url_list.push('1JzqTXFrdWUhA7_DhQR_aG7kyHjC9m3Ls');
    this.img_url_list.push('12FKXB0aVUncA5N2wGl13A6u6i_WCOd5o');
    this.img_url_list.push('1touwCAAIKgQ-6K8VaYp2gvifImReMfxX');
    this.img_url_list.push('1JlJtnQaMPnJi3SJG2dvap-b4Ys8D4MsH');        
    this.img_url_list.push('1lYv9Wam54_6L7aV56wjCBNXvTqdTIHwO');        
    this.img_url_list.push('1SajH8WZ_Bd4-Sp_Vh1pT00V9gqC4XC7D');
   }

  ngOnInit() {
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
