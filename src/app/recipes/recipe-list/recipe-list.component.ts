import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('This is a recipe', 'This is a description', 'https://www.wellplated.com/wp-content/uploads/2019/01/Instant-Pot-Teriyaki-Chicken-recipe-500x500.jpg'),
    new Recipe('This is a recipe', 'This is a description', 'https://www.wellplated.com/wp-content/uploads/2019/01/Instant-Pot-Teriyaki-Chicken-recipe-500x500.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
