import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminNewsPage } from './admin-news.page';

const routes: Routes = [
  {
    path: '',
    component: AdminNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminNewsPageRoutingModule {}
