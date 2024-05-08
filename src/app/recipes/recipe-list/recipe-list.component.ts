import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  @Output() RecipeListEvent = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('Biryani' ,'Combination of Rice with Chicken','https://t3.ftcdn.net/jpg/01/96/80/24/360_F_196802485_VQxk0qmyPGTq56rKYXGikVGApD3A7v5T.jpg')
    ,new Recipe('Biryani Blues' ,'Combination of Rice with Chicken','https://t3.ftcdn.net/jpg/01/96/80/24/360_F_196802485_VQxk0qmyPGTq56rKYXGikVGApD3A7v5T.jpg')
  ];
  constructor(){}
  ngOnInit(): void {
    
  }

  RecipeItemDetails(r : Recipe){
    
    this.RecipeListEvent.emit(r);
  }
  
}
