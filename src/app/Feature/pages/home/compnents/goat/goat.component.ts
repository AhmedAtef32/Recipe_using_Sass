import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsByNameComponent } from "../../../../../Shared/components/products-by-name/products-by-name.component";
import { MealsByNameService } from '../../../../../Shared/services/mealsByName/meals-by-name.service';
import { MealsByName } from '../../../../../Shared/interfaces/meals-by-name';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-goat',
  imports: [ProductsByNameComponent],
  templateUrl: './goat.component.html',
  styleUrl: './goat.component.scss'
})
export class GoatComponent implements OnInit , OnDestroy {
private readonly _mealsByNameService = inject(MealsByNameService)

  allmeals !: MealsByName[]
 subGetdata!: Subscription;

 ngOnInit(): void {
   this.getdata()
 }

  getdata(){
    this.subGetdata = this._mealsByNameService.getMealsByName("Goat").subscribe({
      next : (res) => this.allmeals = res.meals,
      error : (err) => console.log(err)
    })
  }

  ngOnDestroy(): void {
    this.subGetdata.unsubscribe()
  }
}
