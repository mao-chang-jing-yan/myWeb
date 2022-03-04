import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolCollegesComponent } from './colleges.component';

describe('SchoolCollegesComponent', () => {
  let component: SchoolCollegesComponent;
  let fixture: ComponentFixture<SchoolCollegesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolCollegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolCollegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
