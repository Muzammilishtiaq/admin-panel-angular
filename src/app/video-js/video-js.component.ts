import { Component, ElementRef,Output, Input, EventEmitter, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video-js',
  templateUrl: './video-js.component.html',
  styleUrls: ['./video-js.component.scss']
})
export class VideoJsComponent implements OnInit , OnDestroy {
  @ViewChild('target', { static: true }) target!: ElementRef;
  // See options: https://videojs.com/guides/options
  @Input()
  options!: {
    preloadWebComponents: boolean;
    fluid: boolean;
    // aspectRatio: string;
    autoplay: boolean;
    controls: boolean;
    sources: {
      src: any;
      type: any;
    }[];
  };

  player: any
  @Output() onPlaybackError = new EventEmitter<any>();
  constructor(
    private elementRef: ElementRef,
  ) { }

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady');
    });
    this.player.volume(1);



    this.player.on('error', (element: any, error: any) => {
      console.error(error);
      this.onPlaybackError.emit(error);
    });
  }

  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }

}
