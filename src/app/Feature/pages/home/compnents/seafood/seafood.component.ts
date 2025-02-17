import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MealsByNameService } from '../../../../../Shared/services/mealsByName/meals-by-name.service';
import { MealsByName } from '../../../../../Shared/interfaces/meals-by-name';
import { Subscription } from 'rxjs';
import { ProductsByNameComponent } from "../../../../../Shared/components/products-by-name/products-by-name.component";

@Component({
  selector: 'app-seafood',
  imports: [ProductsByNameComponent],
  templateUrl: './seafood.component.html',
  styleUrl: './seafood.component.scss'
})
export class SeafoodComponent implements OnInit , OnDestroy {

  private readonly _mealsByNameService = inject(MealsByNameService)

    allmeals !: MealsByName[]
   subGetdata!: Subscription;

   ngOnInit(): void {
     this.getdata()
   }

    getdata(){
      this.subGetdata = this._mealsByNameService.getMealsByName("Seafood").subscribe({
        next : (res) => this.allmeals = res.meals,
        error : (err) => console.log(err)
      })
    }

    ngOnDestroy(): void {
      this.subGetdata.unsubscribe()
    }
}
