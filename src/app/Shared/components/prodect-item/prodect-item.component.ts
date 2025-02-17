import { Component, Input, input } from '@angular/core';
import { AllMeals } from '../../interfaces/all-meals';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prodect-item',
  imports: [RouterLink],
  templateUrl: './prodect-item.component.html',
  styleUrl: './prodect-item.component.scss'
})
export class ProdectItemComponent {

@Input({required:true}) meal!: AllMeals;


}
