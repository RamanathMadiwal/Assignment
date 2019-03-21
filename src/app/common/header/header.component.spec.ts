import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
 // let navigateSpy: Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //Testing Router Components

  // it('should navigate', () => {
  //   let component = fixture.componentInstance;
  //   let navigateSpy = spyOn(router, 'navigate');
  //
  //   component.goSomewhere();
  //   expect(navigateSpy).toHaveBeenCalledWith(['/channel']);
  // });


  // it('should navigate on click - lessons', () => {
  //   const debugElm = fixture.debugElement.nativeElement.querySelector('#lessons');
  //   debugElm.click();
  //   let navigateSpy = spyOn(router, 'navigate');
  //   expect(navigateSpy).toHaveBeenCalledWith(['/channel']); // <= check spy
  // });
});
