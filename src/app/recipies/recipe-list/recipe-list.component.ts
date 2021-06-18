import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 recipes:Recipe[]=[ new Recipe('Chocolate Cake','Home made chocolate cake made from oreo biscuits','http://mycakerecipes.com/wp-content/uploads/2017/06/Cookies-n-Cream-Oreo-Cake-Roll.jpg')];
  constructor() { }

  ngOnInit(): void {
  }

}
