import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsByNameComponent } from "../../../../../Shared/components/products-by-name/products-by-name.component";
import { MealsByName } from '../../../../../Shared/interfaces/meals-by-name';
import { Subscription } from 'rxjs';
import { MealsByNameService } from '../../../../../Shared/services/mealsByName/meals-by-name.service';

@Component({
  selector: 'app-pasta',
  imports: [ProductsByNameComponent],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.scss'
})
export class PastaComponent implements OnInit , OnDestroy {
private readonly _mealsByNameService = inject(MealsByNameService)

  allmeals !: MealsByName[]
 subGetdata!: Subscription;

 ngOnInit(): void {
   this.getdata()
 }

  getdata(){
    this.subGetdata = this._mealsByNameService.getMealsByName("pasta").subscribe({
      next : (res) => this.allmeals = res.meals,
      error : (err) => console.log(err)
    })
  }

  ngOnDestroy(): void {
    this.subGetdata.unsubscribe()
  }
}
