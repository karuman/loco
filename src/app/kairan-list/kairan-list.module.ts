import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KairanListPageRoutingModule } from './kairan-list-routing.module';

import { KairanListPage } from './kairan-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KairanListPageRoutingModule
  ],
  declarations: [KairanListPage]
})
export class KairanListPageModule {}
