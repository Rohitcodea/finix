import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginetionComponent } from './paginetion.component';

describe('PaginetionComponent', () => {
  let component: PaginetionComponent;
  let fixture: ComponentFixture<PaginetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginetionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
