import { Component, Input } from '@angular/core';
import { MealsByName } from '../../interfaces/meals-by-name';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-by-name',
  imports: [RouterLink],
  templateUrl: './products-by-name.component.html',
  styleUrl: './products-by-name.component.scss'
})
export class ProductsByNameComponent {

    @Input({required: true}) meal!: MealsByName ;


}
