import { Component, ElementRef, inject, ViewChild, viewChild } from '@angular/core';
import {  Event, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-categorys',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './categorys.component.html',
  styleUrl: './categorys.component.scss'
})
export class CategorysComponent {
  private readonly  _router =inject(Router)

  categoriesName : string[] =[
    "Beef",
    "Breackfast",
    "Chicken",
    "Dessert",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetaria",

  ]

  @ViewChild('search') inputSearch!:ElementRef ;
  inputValue!: string;

  getInputValue(): void {
  this.inputValue = this.inputSearch.nativeElement.value;

  this._router.navigate(["Home/" + this.inputValue])
}

}
