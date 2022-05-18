import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopProductsComponent } from './orders.component';

describe('ShopProductsComponent', () => {
  let component: ShopProductsComponent;
  let fixture: ComponentFixture<ShopProductsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
