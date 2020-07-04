import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTabsPage } from './admin-tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/users',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminTabsPage,
    children: [
      {
        path: 'users',
        loadChildren: () => import('../admin-users/admin-users.module').then( m => m.AdminUsersPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../admin-news/admin-news.module').then(m => m.AdminNewsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTabsPageRoutingModule {}
