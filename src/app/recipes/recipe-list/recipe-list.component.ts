import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
  }

  onRecipeSelected(recipeItem: Recipe) {
    this.recipeWasSelected.emit(recipeItem);
  }
}
