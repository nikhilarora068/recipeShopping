import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modal';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  toShoppingList(ingredients: Ingredient[]) {
    this.recipeService.addIngredientsToShoppingList(ingredients);
  }
}
