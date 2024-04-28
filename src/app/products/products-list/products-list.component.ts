import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})

export class ProductsListComponent implements OnInit{

  products : any = [];
  constructor(private productService : ProductsService){
  }
  
  ngOnInit(): void {
      this.productService.getProducts().subscribe( (result : any)=>{
          this.products = result;
      })
  }

}
