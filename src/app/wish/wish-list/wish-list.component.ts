import { Component, Input } from '@angular/core';
import { WishItem } from '../Models/wishItem';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent {

 @Input() wishes : WishItem[] = [];   

}
