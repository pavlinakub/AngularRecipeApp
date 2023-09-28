import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Hamburger',
      'test simply',
      'https://static.toprecepty.cz/fotky/images/3/2772-860-484.webp'
    ),
    new Recipe(
      'Pizza',
      'test simply',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1024px-Pizza-3007395.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'test simply',
      'https://static.toprecepty.cz/fotky/images/3/2772-860-484.webp'
    ),
  ];
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
function output(): (
  target: RecipeListComponent,
  propertyKey: 'recipeWasSelected'
) => void {
  throw new Error('Function not implemented.');
}
