import { Component } from '@angular/core';
import { CategorysComponent } from "../categorys/categorys.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CategorysComponent,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
