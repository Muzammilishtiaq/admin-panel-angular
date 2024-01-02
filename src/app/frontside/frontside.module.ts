import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontsideRoutingModule } from './frontside-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FrontsideRoutingModule
  ]
})
export class FrontsideModule { }
