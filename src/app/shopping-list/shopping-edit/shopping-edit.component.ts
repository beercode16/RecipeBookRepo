import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('Qty' ,{static:true}) QtyElRef;
  @Output() AddEvent = new EventEmitter<Ingredient>();
  onAddIngredian(name : HTMLInputElement){
        var obj = new Ingredient(name.value , this.QtyElRef.nativeElement.value);
        this.AddEvent.emit(obj);
  }

}
