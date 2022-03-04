import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolSchoolsComponent } from './schools.component';

describe('SchoolSchoolsComponent', () => {
  let component: SchoolSchoolsComponent;
  let fixture: ComponentFixture<SchoolSchoolsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
