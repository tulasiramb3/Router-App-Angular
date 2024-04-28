import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WishItem } from '../Models/wishItem';

@Component({
  selector: 'app-wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.scss'
})


export class WishFilterComponent implements OnInit{

  @Input() wishFilter : any;
  @Output() wishFilterChange =  new EventEmitter<any>();

  listFilter='0';

  ngOnInit(){
    this.updateFilter('0');
  }

  updateFilter(value:any){
    this.wishFilter = value;
    this.wishFilterChange.emit(this.wishFilter);
  }
}
