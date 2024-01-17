import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit {
  videoOptions = {};
  videoId!: number;
  singleUploadVideourl: any;
  singlelivestreamurl: any;
  constructor(private route: ActivatedRoute, private api: DataService) { }
  ngOnInit(): void {
    // this.videoId = this.route.snapshot.paramMap.get('videoId');
    this.api.getlivestreamPosturl(this.videoId).subscribe((data) => {
      console.log(data)
      this.singlelivestreamurl = data;
    })
    this.api.getuploadvideoPosturl(this.videoId).subscribe((data) => {
      this.singleUploadVideourl = data;
    })
  }
}

