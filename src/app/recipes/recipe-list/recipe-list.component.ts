import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Spaguetti!',
      'This is a recipe test',
      'https://cdn.kiwilimon.com/recetaimagen/23973/th5-640x426-17908.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
