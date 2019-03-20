import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupdatesComponent } from './groupdates.component';

describe('GroupdatesComponent', () => {
  let component: GroupdatesComponent;
  let fixture: ComponentFixture<GroupdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
