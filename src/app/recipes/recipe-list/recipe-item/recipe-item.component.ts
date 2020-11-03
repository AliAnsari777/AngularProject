import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // @Input() Decorator enable us to bind this property to ouside component, so we can bind this property in parent and send data from
  // parent to this child component.
  @Input() item: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
