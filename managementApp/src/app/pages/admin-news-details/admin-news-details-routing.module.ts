import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminNewsDetailsPage } from './admin-news-details.page';

const routes: Routes = [
  {
    path: '',
    component: AdminNewsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminNewsDetailsPageRoutingModule {}
