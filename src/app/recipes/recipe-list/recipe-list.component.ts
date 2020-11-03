import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Egg', 'how to make an omlet', 'https://poprostupycha.com.pl/my_uploads/2018/02/omlet.jpg'),
    new Recipe('Soup', 'how to make a soup', 'https://mylifeandkids.com/wp-content/uploads/2016/09/Vegetable-Soup-copy.png'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeItem: Recipe) {
    this.recipeWasSelected.emit(recipeItem);
  }
}
