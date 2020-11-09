import { Ingredients } from '../shared/ingredients.model';

export class ShoppingListService {

    private ingredients: Ingredients[] = [
        new Ingredients('salt', 2),
        new Ingredients('tomato', 10),
        new Ingredients('potato', 14)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredients: Ingredients) {
        this.ingredients.push(ingredients);
    }
}