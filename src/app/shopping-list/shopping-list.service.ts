import { EventEmitter } from "@angular/core";
import { Ingredient } from "../ingredient.model";

export class ShoppingListService{
    ingredientsAdded = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      onAddIngredian(ingredient: Ingredient){
            this.ingredients.push(ingredient);
            this.ingredientsAdded.emit(this.ingredients.slice());
      }
        onAddMultipleIngredients(ingredients : Ingredient[]){
            this.ingredients = this.ingredients.concat(ingredients);
            this.ingredientsAdded.emit(this.ingredients.slice());
        }
    
    getIngredient(){
        return this.ingredients.slice();
        
    }

}