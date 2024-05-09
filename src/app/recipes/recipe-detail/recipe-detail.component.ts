import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  /**
   *
   */
  constructor(private shoppingListService : ShoppingListService) {
    
  }
  @Input() PickedRecipe : Recipe;

  ToShoppingCart(){

      this.shoppingListService.onAddMultipleIngredients(this.PickedRecipe.ingredients);
  }

}
