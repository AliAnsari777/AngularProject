import { Component, ContentChild, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false }) inputName: ElementRef;
  @ViewChild('amountInput', { static: false }) inputAmount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem() {
    const ingName = this.inputName.nativeElement.value;
    const ingAmount = this.inputAmount.nativeElement.value;
    const ingredient = new Ingredients(ingName, ingAmount);
    this.ingredientAdded.emit(ingredient);
  }

}
