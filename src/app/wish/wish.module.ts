import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WishListComponent } from '../wish/wish-list/wish-list.component';
import { AddNewWishComponent } from '../wish/add-new-wish/add-new-wish.component';
import { WishFilterComponent } from '../wish/wish-filter/wish-filter.component';
import { WishListItemComponent } from '../wish/wish-list-item/wish-list-item.component';
import { WishComponent } from './wish.component';

@NgModule({
  declarations: [
    WishListComponent,
    AddNewWishComponent,
    WishFilterComponent,
    WishListItemComponent,
    WishComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule    
  ],  
  providers:[],
  exports:[ ]
})
export class WishModule { }
