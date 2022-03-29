import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopShopsComponent } from './shops.component';

describe('ShopShopsComponent', () => {
  let component: ShopShopsComponent;
  let fixture: ComponentFixture<ShopShopsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
