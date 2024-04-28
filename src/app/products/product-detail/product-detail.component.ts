import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{

  constructor(private router : ActivatedRoute, private productService : ProductsService){
    
  }
  id : any;
  product :any = {};
  ngOnInit(): void {
      this.router.paramMap.subscribe((params : ParamMap)=>{
        this.id = params.get('id');
        if(this.id){
           this.productService.getProductbyId(this.id).subscribe((result)=>{
              this.product = result;
           });
        }
        console.log(this.product);
      })
  }

}
