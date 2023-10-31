import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  current = 1
  
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    console.log(this.current);
    if (this.current < 0) {
      this.current = 1;
    }
    return this.http.get<any[]>(`https://api.artic.edu/api/v1/artworks?page=${this.current}`)
  }
  getDataById(id:number):Observable<any>
  {
    return this.http.get<any>(`https://api.artic.edu/api/v1/artworks/${id}`)
  }
  getDataBySearch(q:string)
  {
    console.log("Seraching by keyword");
    
    return this.http.get<any>(`https://api.artic.edu/api/v1/artworks/search?q=${q}&fields=id,title,image_id`)
  }
}
