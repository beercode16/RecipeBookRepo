import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipeItem : Recipe; 
  @Output() RecipeEvent = new EventEmitter<Recipe>();
  OnRecipeItemClick(){
    this.RecipeEvent.emit(this.recipeItem);
  }
}
