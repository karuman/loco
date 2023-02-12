import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KairanPage } from './kairan.page';

const routes: Routes = [
  {
    path: '',
    component: KairanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KairanPageRoutingModule {}
