import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.modal';

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'First Recipe',
      'This is a test',
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/03/16/unnamed.png?quality=75&width=982&height=726&auto=webp',
      [new Ingredient('abc', 1), new Ingredient('def', 10)]
    ),
    new Recipe(
      'Second Recipe',
      'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGo9C2-wIEGp3KnCOF7D4P9P6C8x2Q5CSeGA&usqp=CAU',
      [new Ingredient('xyz', 5), new Ingredient('wxy', 9)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
