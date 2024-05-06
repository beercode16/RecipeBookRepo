import { Component, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'

})
export class HaederComponent{
    @Output() EventEmit = new EventEmitter<string>();
    selectDOM(s : string){
        if(s=== 'Recipe'){
            this.EventEmit.emit('Recipe');
        }
        else{
            this.EventEmit.emit('Shopping');
        }
    }
}