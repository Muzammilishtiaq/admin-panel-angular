import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { HomeComponent } from './home/home.component';
import { LivepageComponent } from './livepage/livepage.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import {VideoJsModule} from '../video-js/video-js.module'

@NgModule({
  declarations: [
    HomeComponent,
    LivepageComponent,
    HeaderComponent,
    FooterComponent,
    VideoplayerComponent,
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    VideoJsModule
  ]
})
export class FrontendModule { }
