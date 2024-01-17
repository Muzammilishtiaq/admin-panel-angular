import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoJsComponent } from './video-js.component';

const routes: Routes = [
  {path:'',component:VideoJsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoJsRoutingModule { }
