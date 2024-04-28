import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewWishComponent } from './add-new-wish.component';

describe('AddNewWishComponent', () => {
  let component: AddNewWishComponent;
  let fixture: ComponentFixture<AddNewWishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewWishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
