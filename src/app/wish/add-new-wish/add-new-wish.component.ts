import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../Models/wishItem';

@Component({
  selector: 'app-add-new-wish',
  templateUrl: './add-new-wish.component.html',
  styleUrl: './add-new-wish.component.scss'
})
export class AddNewWishComponent {
  wishText = '';
  @Output() addWish : EventEmitter<WishItem> =new EventEmitter<WishItem>() ; 
  addToWishList(){
    this.addWish.emit(new WishItem(this.wishText))
    this.wishText='';
}
}
