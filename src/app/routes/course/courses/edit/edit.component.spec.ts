import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysUsersEditComponent } from './edit.component';

describe('SysUsersEditComponent', () => {
  let component: SysUsersEditComponent;
  let fixture: ComponentFixture<SysUsersEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SysUsersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
