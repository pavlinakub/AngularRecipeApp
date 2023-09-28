import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list-detail',
  templateUrl: './recipe-list-detail.component.html',
  styleUrls: ['./recipe-list-detail.component.css'],
})
export class RecipeListDetailComponent {
  @Input() recipe!: Recipe;
}
