import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  id:number
  data:any

  constructor(private ar:ActivatedRoute, private http:HttpClient, private as:ApiService){

  }
  ngOnInit(){
    this.ar.params.subscribe((params)=>{
      this.id=params['id']
      console.log(this.id);
      
    })
    this.getDetails();
  }
  getDetails()
  {
    let obs= this.as.getDataById(this.id)

    obs.subscribe((response)=>{
      this.data=response.data;
      console.log(this.data);
      
    })
  }
}
