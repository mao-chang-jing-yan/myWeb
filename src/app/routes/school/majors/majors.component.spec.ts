import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolMajorsComponent } from './majors.component';

describe('SchoolMajorsComponent', () => {
  let component: SchoolMajorsComponent;
  let fixture: ComponentFixture<SchoolMajorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolMajorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolMajorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
