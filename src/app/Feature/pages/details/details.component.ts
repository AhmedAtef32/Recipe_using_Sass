import {  Component, inject, OnInit} from '@angular/core';
import { MeetServiceService } from '../../../Shared/services/meals_Services/meals-service.service';
import { ActivatedRoute } from '@angular/router';
import { AllMeals } from '../../../Shared/interfaces/all-meals';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  private readonly _meetServiceService= inject(MeetServiceService);
  private readonly _activatedRoute= inject(ActivatedRoute);
  mealInfo: AllMeals = {} as AllMeals;
  mealId!:string;
  platform:boolean =false;
  ngOnInit(): void {
    this.getMealId();
    this.getMealById();
  }

  getMealId(){
    this._activatedRoute.paramMap.subscribe((params)=>{
      this.mealId = params.get('id')!;
    })
  }


  getMealById(){


        this._meetServiceService.getmealById(this.mealId).subscribe({
          next:(res) => {

            this.mealInfo = res.meals[0];
            console.log(this.mealInfo)
        },
        error:(err) => {console.log(err)
        }
      })



  }


}
