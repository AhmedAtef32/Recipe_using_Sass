import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsByNameService {

  constructor() { }

 private readonly  _httpClient =inject(HttpClient);

 getMealsByName(name:string):Observable<any>{
  return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
}

}

