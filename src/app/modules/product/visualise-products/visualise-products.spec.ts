import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiseProducts } from './visualise-products';

describe('VisualiseProducts', () => {
  let component: VisualiseProducts;
  let fixture: ComponentFixture<VisualiseProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualiseProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualiseProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
