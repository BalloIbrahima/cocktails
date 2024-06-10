import { Component } from '@angular/core';
import { Cocktail } from './cocktail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cockails';

  cocktail: Cocktail = {
    name: "mojito",
    img:"https://www.destinationcocktails.fr/wp-content/uploads/2019/11/Cocktail-mojito-1.jpg.webp",
    description:"Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche"
  };
}
