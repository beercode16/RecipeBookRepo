import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  providers:[]
})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingredient[] ;

  constructor(private shoppinglistService : ShoppingListService) { }

  ngOnInit() {
      this.ingredients = this.shoppinglistService.getIngredient();

      this.shoppinglistService.ingredientsAdded.subscribe((ing : Ingredient[])=>{
          this.ingredients = ing;
      })
  }
}
