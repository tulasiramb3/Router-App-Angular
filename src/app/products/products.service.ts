import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products : any[] = [
    {Id : 1, name : "Apples", price : 100},
    {Id : 2, name : "Bananas" , price : 200},
    {Id : 3, name : "Oranges" , price : 300}
  ]
  constructor() { }
  getProducts(){
    return of(this.products);
  }
  getProductbyId(id : number){
    return of(this.products.find(m=>m.Id==id));
  }

}
