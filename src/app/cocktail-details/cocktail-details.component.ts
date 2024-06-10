import { Component, Input } from '@angular/core';
import { Cocktail } from '../cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss'
})
export class CocktailDetailsComponent {
  @Input() cocktail: Cocktail = {
    name: '',
    img: '',
    description: ''
  };
}
