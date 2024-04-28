import { Component, OnInit } from '@angular/core';
import { WishItem } from './Models/wishItem';
import { WishService } from './wish.service';
import { EventService } from '../Shared/service/eventservice';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.scss'
})
export class WishComponent implements OnInit{
  items : WishItem[] = [];
  wishFilter: string ="0";

  constructor(private events : EventService, private wishService : WishService) {
    events.listen('removeWish', (wish : any)=>{
      var index = this.items.indexOf(wish);
      this.items.splice(index,1);
    })
  }
  ngOnInit() {
    this.wishService.getWishItems().subscribe(
      (obj : any)=>{
      this.items = obj;
      },
      (error:Error)=>{
        alert(error.message);
      })   
  }

  AddtoItems(wishItem: WishItem)
  {
    this.items.push(wishItem);
  }

   get visibleItems() : WishItem[]{
    if(this.wishFilter == '0')
      return this.items;
    else if(this.wishFilter =='1')
      return this.items.filter(m=>m.isCompleted)    
    else
      return this.items.filter(m=>!m.isCompleted)    
  }

  
}
