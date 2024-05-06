import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RecipeBookLocal';
  isDisplayShopping :boolean;
  isDisplayRecipe :boolean;

  isSelect(s : string){
    if(s==='Shopping'){
      this.isDisplayShopping = true;
      this.isDisplayRecipe = false;
    }
    else{
      this.isDisplayShopping = false;
      this.isDisplayRecipe = true;
    }
  }
}
