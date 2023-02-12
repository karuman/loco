import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KairanPageRoutingModule } from './kairan-routing.module';

import { KairanPage } from './kairan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KairanPageRoutingModule
  ],
  declarations: [KairanPage]
})
export class KairanPageModule {}
