import { Component, OnInit } from '@angular/core';
import { Card } from '../Card';
import { ApiService } from '../api.service';
import { Route, Router } from '@angular/router';
import { FavouriteService } from '../favourite.service';
import { FormBuilder, FormGroup } from '@angular/forms'
import { query } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataPagination: any = {}
  searchForm: FormGroup;
  disable:boolean=false
  constructor(private as: ApiService, private route: Router, private fs: FavouriteService,
    private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      query: ''
    });
  }
  response: any
  ngOnInit(): void {
    this.getResponse()
  }
  getResponse() {
    console.log("Url fetched");
    this.as.getData().subscribe((response: any) => {
      this.response = response?.data;
      this.dataPagination[this.as.current] = response.data
    })
  }
  getDataByPage(pg: number) {
    this.as.current = pg
    console.log("Using getDataByPage()");

    if (this.dataPagination[pg]) {
      // if data exists for this page, return it
      this.response = (this.dataPagination[pg]);
    } else {
      // if data doesn't exist for this page, fetch it from API
      this.getResponse();

    }
  }
  getNextData() {
    this.as.current = this.as.current + 1;
    this.getDataByPage(this.as.current);
  }
  getPreviousData() {
    this.as.current = this.as.current - 1;
    this.getDataByPage(this.as.current);
  }

  favouritesDisplay() {
    this.disable=true
    const datas: [][] = Object.values(this.dataPagination)
    this.response = []
    datas.forEach((data: []) => {
      let filteredData = data.filter((i: any) => {
        let index = this.fs.favourites.indexOf(i.id)
        if (index === -1) {
          return false;
        }
        else {
          return true;
        }
      })
      this.response.push(...filteredData);
    })
  }
  onSubmit() {
    if (this.searchForm) {
      let query = this.searchForm.value.query
      console.log(query);
      this.as.getDataBySearch(query).subscribe((response)=>{
        this.response=response.data;
      })
      console.log(this.response);
      
    }
  }
  homeDisplay()
  {
    this.getDataByPage(this.as.current);
    this.disable=false
  }
}
