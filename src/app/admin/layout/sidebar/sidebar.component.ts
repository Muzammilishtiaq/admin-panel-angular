import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{
  sidebarlist: any = [
    {
      label: "Dashboard",
      link: "dashboard",
    }, {
      label: "Stream List",
      link: "streamlist",
    }, {
      label: "Video List",
      link: "videolist",
    }
  ]

}
