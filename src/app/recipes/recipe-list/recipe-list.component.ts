import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Spaguetti!',
      'This is a recipe test',
      'https://cdn.kiwilimon.com/recetaimagen/23973/th5-640x426-17908.jpg'),
    new Recipe(
      'Chocolate!',
      'This is a recipe test number 2',
      'https://upload.wikimedia.org/wikipedia/commons/f/f2/Chocolate.jpg')
    ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
