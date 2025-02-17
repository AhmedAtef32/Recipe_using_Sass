import { Routes } from '@angular/router';
import { HomeComponent } from './Feature/pages/home/home.component';
import { AllMealsComponent } from './Feature/pages/home/compnents/all-meals/all-meals.component';
import { BeefComponent } from './Feature/pages/home/compnents/beef/beef.component';
import { BreakfastComponent } from './Feature/pages/home/compnents/breakfast/breakfast.component';
import { ChickenComponent } from './Feature/pages/home/compnents/chicken/chicken.component';
import { DessertComponent } from './Feature/pages/home/compnents/dessert/dessert.component';
import { GoatComponent } from './Feature/pages/home/compnents/goat/goat.component';
import { LambComponent } from './Feature/pages/home/compnents/lamb/lamb.component';
import { MiscellaneousComponent } from './Feature/pages/home/compnents/miscellaneous/miscellaneous.component';
import { PastaComponent } from './Feature/pages/home/compnents/pasta/pasta.component';
import { PorkComponent } from './Feature/pages/home/compnents/pork/pork.component';
import { SeafoodComponent } from './Feature/pages/home/compnents/seafood/seafood.component';
import { StarterComponent } from './Feature/pages/home/compnents/starter/starter.component';
import { VeganComponent } from './Feature/pages/home/compnents/vegan/vegan.component';
import { VegetarianComponent } from './Feature/pages/home/compnents/vegetarian/vegetarian.component';
import { NotFoundComponent } from './Feature/pages/not-found/not-found.component';
import { SideComponent } from './Feature/pages/home/compnents/side/side.component';
import { DetailsComponent } from './Feature/pages/details/details.component';

export const routes: Routes = [
  {path:"" , redirectTo:"Home" , pathMatch:"full"},
  {path:"Home" , component:HomeComponent,title:"Home" ,children:[
    {path:"" , redirectTo:"AllMeals" , pathMatch:"full"},
    {path:"AllMeals" , component: AllMealsComponent ,title:"AllMeals"},
    {path:"Beef" , component:BeefComponent ,title:"Beef"},
    {path:"Breackfast" , component:BreakfastComponent ,title:"Breackfast"},
    {path:"Chicken" , component:ChickenComponent ,title:"Chicken"},
    {path:"Dessert" , component:DessertComponent ,title:"Dessert"},
    {path:"Goat" , component:GoatComponent ,title:"Goat"},
    {path:"Lamb" , component:LambComponent ,title:"Lamb"},
    {path:"Miscellaneous" , component:MiscellaneousComponent ,title:"Miscellaneous"},
    {path:"Pasta" , component:PastaComponent,title:"Pasta"},
    {path:"Pork" , component:PorkComponent ,title:"Pork"},
    {path:"Seafood" , component:SeafoodComponent ,title:"Seafood"},
    {path:"Side" , component:SideComponent,title:"Side"},
    {path:"Starter" , component:StarterComponent ,title:"Starter"},
    {path:"Vegan" , component:VeganComponent ,title:"Vegan"},
    {path:"Vegetaria" , component:VegetarianComponent ,title:"Vegetaria"},
  ]},

  {path:"Details/:id" , component:DetailsComponent ,title:"Details"},
  {path:"**" , component:NotFoundComponent ,title:"not-found"}
];
