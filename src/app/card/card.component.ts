import { Component, Input } from '@angular/core';
import { FavouriteService } from '../favourite.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  pro: any
  constructor(public fs: FavouriteService) {

  }
  mark(id: number) {

    if (!this.fs.isFavourite(id)) {
      this.fs.favourites.push(id)
      console.log(this.fs.favourites);
      
    }
    else {
      let index=this.fs.favourites.indexOf(id);
      this.fs.favourites.splice(index,1);
    }
    event?.stopPropagation()

  }
}
