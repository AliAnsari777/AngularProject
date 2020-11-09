import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { Recipe } from './recipe.model';

export class RecipesService {

    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Egg',
            'how to make an omlet',
            'https://poprostupycha.com.pl/my_uploads/2018/02/omlet.jpg',
            [
                new Ingredients('egg', 2),
                new Ingredients('oil', 1)
            ]),
        new Recipe('Soup',
            'how to make a soup',
            'https://mylifeandkids.com/wp-content/uploads/2016/09/Vegetable-Soup-copy.png',
            [
                new Ingredients('vegtable', 5),
                new Ingredients('water', 2)
            ]),
    ];

    getRecipe() {
        return this.recipes.slice();
    }
}