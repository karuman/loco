import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'kairan',
    loadChildren: () => import('./kairan/kairan.module').then( m => m.KairanPageModule)
  },
  {
    path: 'kairan-list',
    loadChildren: () => import('./kairan-list/kairan-list.module').then( m => m.KairanListPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
