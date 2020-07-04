import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminNewsPageRoutingModule } from './admin-news-routing.module';

import { AdminNewsPage } from './admin-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminNewsPageRoutingModule
  ],
  declarations: [AdminNewsPage]
})
export class AdminNewsPageModule {}
