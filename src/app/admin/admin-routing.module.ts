import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StreamlistComponent } from './streamlist/streamlist.component';
import { VideolistComponent } from './videolist/videolist.component';
import { AddformstreamlistComponent } from './streamlist/addformstreamlist/addformstreamlist.component';
import { TablestreamlistComponent } from './streamlist/tablestreamlist/tablestreamlist.component';
import { EditformstreamlistComponent } from './streamlist/editformstreamlist/editformstreamlist.component';
import { AddformvideolistComponent } from './videolist/addformvideolist/addformvideolist.component';
import { EditformvideolistComponent } from './videolist/editformvideolist/editformvideolist.component';
import { TablevideolistComponent } from './videolist/tablevideolist/tablevideolist.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }, {
        path: "streamlist",
        component: StreamlistComponent,
        children: [
          {
            path: 'addstreamlist',
            component: AddformstreamlistComponent
          }, {
            path: '',
            component: TablestreamlistComponent
          }, {
            path: 'editstreamlist',
            component: EditformstreamlistComponent
          }
        ]

      },
      {
        path: 'videolist',
        component: VideolistComponent,
        children: [
          {
            path:'',
            component:TablevideolistComponent
          },
          {
            path: 'addvideolist',
          component:AddformvideolistComponent
          },{
            path:'editstreamlist/:id',
            component:EditformvideolistComponent,
            pathMatch:'full'
          }
        ]
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
