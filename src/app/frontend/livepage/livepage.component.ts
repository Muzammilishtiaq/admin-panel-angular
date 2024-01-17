import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-livepage',
  templateUrl: './livepage.component.html',
  styleUrls: ['./livepage.component.scss']
})
export class LivepageComponent implements OnInit {
  constructor(private apidata: DataService) { }
  videocard:any=[];
  ngOnInit(): void {
  this.apidata.getlivestreamPostData().subscribe(data =>{
    this.videocard = data;
    console.log(this.videocard)
  }, )
}
}
