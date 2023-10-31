import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  favourites:Array<Number>
  constructor() { 
    this.favourites=[]
  }
  isFavourite(id: number): boolean {
    return this.favourites.includes(id);
  }
}
