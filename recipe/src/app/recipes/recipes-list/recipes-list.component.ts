import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe, } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
     new Recipe ("Coconut cookies","test rec","assets/img/Fitness-On-Toast-Easter-Recipe-Coconut-Shy-Delicious-Tasty-Healthy-Treat-Recipe_-1024x683.jpg"),
     new Recipe("Chocolava", "This is simply a test", "assets/img/Ice-Cream-Brownie-Mountain-www.thereciperebel.com-7-of-16.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
