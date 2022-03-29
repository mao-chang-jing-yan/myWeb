import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCoursesComponent } from './courses.component';

describe('CourseCoursesComponent', () => {
  let component: CourseCoursesComponent;
  let fixture: ComponentFixture<CourseCoursesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
