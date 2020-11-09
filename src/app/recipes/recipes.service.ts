import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipesService {

    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Egg', 'how to make an omlet', 'https://poprostupycha.com.pl/my_uploads/2018/02/omlet.jpg'),
        new Recipe('Soup', 'how to make a soup', 'https://mylifeandkids.com/wp-content/uploads/2016/09/Vegetable-Soup-copy.png'),
    ];

    getRecipe() {
        return this.recipes.slice();
    }
}