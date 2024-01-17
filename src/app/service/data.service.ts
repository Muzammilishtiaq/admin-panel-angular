import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private uploadvideoapi = 'http://localhost:4200/assets/data/uploadvideoapi.json';
  private livestreamapi = 'http://localhost:4200/assets/data/livestreamapi.json';
  constructor(private http: HttpClient) { }
  getuploadvideoPostData(){
    return this.http.get(this.uploadvideoapi);
  }

  getuploadvideoPosturl(id:number){
    return this.http.get(`${this.uploadvideoapi}/${id}`);
  }

  getlivestreamPostData(){
    return this.http.get(this.livestreamapi);
  }
  getlivestreamPosturl(id:number){
    return this.http.get(`${this.livestreamapi}/${id}`);
  }
}