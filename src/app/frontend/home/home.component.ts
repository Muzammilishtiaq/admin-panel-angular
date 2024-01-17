import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  videocard: any = [];

  constructor(private apidata: DataService, private router: Router) {}

  ngOnInit(): void {
    this.apidata.getuploadvideoPostData().subscribe((data) => {
      this.videocard = data;
      console.log(this.videocard)
    });
  }

  // navigateToVideoPlayer(videoUrl: any,type:any) {
  //   this.router.navigate(['/player'], { queryParams: { watch: videoUrl, type: type }});
  // }
}
