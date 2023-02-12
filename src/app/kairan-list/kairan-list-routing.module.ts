import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KairanListPage } from './kairan-list.page';

const routes: Routes = [
  {
    path: '',
    component: KairanListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KairanListPageRoutingModule {}
