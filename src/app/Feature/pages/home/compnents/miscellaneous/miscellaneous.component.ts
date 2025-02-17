import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsByNameComponent } from "../../../../../Shared/components/products-by-name/products-by-name.component";
import { MealsByName } from '../../../../../Shared/interfaces/meals-by-name';
import { Subscription } from 'rxjs';
import { MealsByNameService } from '../../../../../Shared/services/mealsByName/meals-by-name.service';

@Component({
  selector: 'app-miscellaneous',
  imports: [ProductsByNameComponent],
  templateUrl: './miscellaneous.component.html',
  styleUrl: './miscellaneous.component.scss'
})
export class MiscellaneousComponent implements OnInit , OnDestroy {
private readonly _mealsByNameService = inject(MealsByNameService)

  allmeals !: MealsByName[]
 subGetdata!: Subscription;

 ngOnInit(): void {
   this.getdata()
 }

  getdata(){
    this.subGetdata = this._mealsByNameService.getMealsByName("miscellaneous").subscribe({
      next : (res) => this.allmeals = res.meals,
      error : (err) => console.log(err)
    })
  }

  ngOnDestroy(): void {
    this.subGetdata.unsubscribe()
  }
}
