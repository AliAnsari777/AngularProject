import { Ingredients } from '../shared/ingredients.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredients[];

    constructor(name: string, des: string, img: string, ing: Ingredients[]) {
        this.name = name;
        this.description = des;
        this.imagePath = img;
        this.ingredients = ing;
    }
}