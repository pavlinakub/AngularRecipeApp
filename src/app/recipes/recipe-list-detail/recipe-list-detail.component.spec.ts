import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListDetailComponent } from './recipe-list-detail.component';

describe('RecipeListDetailComponent', () => {
  let component: RecipeListDetailComponent;
  let fixture: ComponentFixture<RecipeListDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeListDetailComponent]
    });
    fixture = TestBed.createComponent(RecipeListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
