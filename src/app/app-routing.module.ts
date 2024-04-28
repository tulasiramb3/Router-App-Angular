import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WishListComponent } from './wish/wish-list/wish-list.component';
import { WishComponent } from './wish/wish.component';

const routes : Routes = [
  {path : "" , component : FirstComponent},
  {path : "Second" , component : SecondComponent},
  {path: "Contact/us",component : ContactComponent},
  {path: 'Products', component : ProductsListComponent},
  {path: 'product/:id', component : ProductDetailComponent},
  {path: 'WishList', component : WishComponent },
  {path: "**",  component : NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
