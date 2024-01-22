import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-tablestreamlist',
  templateUrl: './tablestreamlist.component.html',
  styleUrls: ['./tablestreamlist.component.scss']
})
export class TablestreamlistComponent implements OnInit {
addtabledata:any='';
constructor(private router:Router){}
ngOnInit(): void {
  const gettabledata= localStorage.getItem('addlivestreamdata');
  if (gettabledata) {
    this.addtabledata = JSON.parse(gettabledata);
    console.log(this.addtabledata);
  }else{
    console.log('error localstroage data')
  }
}

editbutton(id:number){
console.log(id)
this.router.navigate(['/editstreamlist',id])

}

}
