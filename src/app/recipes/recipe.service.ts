import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../ingredient.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe('Biryani' ,'Combination of Rice with Chicken',
        'https://t3.ftcdn.net/jpg/01/96/80/24/360_F_196802485_VQxk0qmyPGTq56rKYXGikVGApD3A7v5T.jpg',
        [
            new Ingredient('Chicken', 5),
            new Ingredient('Rice', 4),
        ])
        ,new Recipe('Soya Chaap' ,'soya chunks made with starch',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4V56guf-h-JuEmnmBbnH6P3dXCcQ8QVa4UhfMPPI7thnrUrq-Seahm7So1IESq-KRcAsL_f0T8az_cNmBeKh_EvJO2sTInhJGMy_XOo3CbNHuxvm6LLod8TDc9I7FxjpMHyNH3i18AZIkFUW3AhGNZHCmFyq45kYONKZaWtrmIp0a9RxbdcaIWyq4yCE/s4080/IMG_20230829_005131.webp',
        [
            new Ingredient('Soya Plates', 15),
            new Ingredient('Starch Powder', 10),
        ])
    ];

    getRecipe(){
        return this.recipes.slice();
    }
}