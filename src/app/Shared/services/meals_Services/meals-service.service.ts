import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetServiceService {

  constructor() { }

 private readonly _httpClient= inject(HttpClient)

 getMeetData():Observable<any>{
   return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
 }

 getmealById(id:string):Observable<any>{
   return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
 }


}
