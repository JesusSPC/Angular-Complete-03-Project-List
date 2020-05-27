import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Spaguetti!',
      'This is a recipe test',
      'https://cdn.kiwilimon.com/recetaimagen/23973/th5-640x426-17908.jpg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Tomato Sauce', 2),
        new Ingredient('Cheese', 10000)
      ]),
    new Recipe(
      'Chocolate!',
      'This is a recipe test number 2',
      'https://upload.wikimedia.org/wikipedia/commons/f/f2/Chocolate.jpg',
      [
        new Ingredient('Cocoa', 1),
        new Ingredient('Sugar', 2),
        new Ingredient('Milk', 5)
      ])
    ];

  constructor(private slService: ShoppinListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next([...this.recipes]);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next([...this.recipes]);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next([...this.recipes]);
  }
}
