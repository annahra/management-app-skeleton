import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminNewsDetailsPageRoutingModule } from './admin-news-details-routing.module';

import { AdminNewsDetailsPage } from './admin-news-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminNewsDetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdminNewsDetailsPage]
})
export class AdminNewsDetailsPageModule {}
