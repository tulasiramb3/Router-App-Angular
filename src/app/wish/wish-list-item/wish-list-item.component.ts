import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../Models/wishItem';
import { EventService } from '../../Shared/service/eventservice';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.scss'
})
export class WishListItemComponent {

  constructor(private events : EventService) {
      
  }

  @Input() wish! : WishItem;

  get CssClasses():any{
    // return this.fullFilled ? ['strikeout text-muted']:[];

    return {'strikeout text-muted' : this.wish.isCompleted}
  }

  togglefullFilled(){
    this.wish.isCompleted = !this.wish.isCompleted;
  }

  DeleteItem(){
    this.events.emit('removeWish' , this.wish)
  }

}
