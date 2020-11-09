import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // @Input() Decorator enable us to bind this property to ouside component, so we can bind this property in parent and send data from
  // parent to this child component.
  @Input() item: Recipe;
  // @Output() recipeItem = new EventEmitter<void>();

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
  }

  onSelect() {
    // this.recipeItem.emit();
    this.recipeService.selectedRecipe.emit(this.item);
  }
}
