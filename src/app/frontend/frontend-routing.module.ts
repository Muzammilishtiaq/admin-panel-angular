import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivepageComponent } from './livepage/livepage.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },{
    path:'home',
    component: HomeComponent
  },{
    path: 'livestream',
    component:LivepageComponent
  },{
    path:'player/:videoType/:videoId',
    component:VideoplayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
