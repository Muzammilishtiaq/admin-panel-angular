import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoJsRoutingModule } from './video-js-routing.module';
import { VideoJsComponent } from './video-js.component';


@NgModule({
  declarations: [
    VideoJsComponent
  ],
  imports: [
    CommonModule,
    VideoJsRoutingModule
  ],exports:[VideoJsComponent]
})
export class VideoJsModule { }
