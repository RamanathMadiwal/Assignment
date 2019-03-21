import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent} from './homecomponent.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router)
  });

  it('should create Channel Session Component', () => {
    expect(component).toBeTruthy();
  });

  it('should render --> "Hello, world!"   in a h1 tag', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello, world!');
  });


  it('should render --> "Please click lesson tabs for assignment"   in a p tag', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Please click lesson tabs for assignment');
  });





});
