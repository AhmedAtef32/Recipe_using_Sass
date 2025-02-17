import { Component, inject } from '@angular/core';
import { ProdectItemComponent } from "../../../../../Shared/components/prodect-item/prodect-item.component";
import { MeetServiceService } from '../../../../../Shared/services/meals_Services/meals-service.service';
import { AllMeals } from '../../../../../Shared/interfaces/all-meals';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-meals',
  imports: [ProdectItemComponent],
  templateUrl: './all-meals.component.html',
  styleUrl: './all-meals.component.scss'
})
export class AllMealsComponent {


  _meetServiceService= inject(MeetServiceService)

  allMeals:AllMeals[] =[]

  subMelas!:Subscription
  ngOnInit(): void {
    this.getAllMelas()
   }

   getAllMelas(){
     this.subMelas = this._meetServiceService.getMeetData().subscribe({
      next : (res) => this.allMeals = res.meals ,
      error : (err) => console.log(err),
    })
   }
   ngOnDestroy(){
    this.subMelas.unsubscribe();
   }
}
