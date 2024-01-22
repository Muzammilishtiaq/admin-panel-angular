import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AdminNavComponent } from './layout/admin-nav/admin-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StreamlistComponent } from './streamlist/streamlist.component';
import { VideolistComponent } from './videolist/videolist.component';
import { TablestreamlistComponent } from './streamlist/tablestreamlist/tablestreamlist.component';
import { AddformstreamlistComponent } from './streamlist/addformstreamlist/addformstreamlist.component';
import { EditformstreamlistComponent } from './streamlist/editformstreamlist/editformstreamlist.component';
import { TablevideolistComponent } from './videolist/tablevideolist/tablevideolist.component';
import { AddformvideolistComponent } from './videolist/addformvideolist/addformvideolist.component';
import { EditformvideolistComponent } from './videolist/editformvideolist/editformvideolist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{ReactiveFormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    AdminNavComponent,
    DashboardComponent,
    StreamlistComponent,
    VideolistComponent,
    TablestreamlistComponent,
    AddformstreamlistComponent,
    EditformstreamlistComponent,
    TablevideolistComponent,
    AddformvideolistComponent,
    EditformvideolistComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
