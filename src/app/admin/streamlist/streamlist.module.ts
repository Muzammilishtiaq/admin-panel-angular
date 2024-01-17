import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamlistRoutingModule } from './streamlist-routing.module';
import { AddformstreamlistComponent } from './addformstreamlist/addformstreamlist.component';
import { EditformstreamlistComponent } from './editformstreamlist/editformstreamlist.component';
import { TablestreamlistComponent } from './tablestreamlist/tablestreamlist.component';


@NgModule({
  declarations: [
    AddformstreamlistComponent,EditformstreamlistComponent,TablestreamlistComponent
  ],
  imports: [
    CommonModule,
    StreamlistRoutingModule
  ]
})
export class StreamlistModule { }
