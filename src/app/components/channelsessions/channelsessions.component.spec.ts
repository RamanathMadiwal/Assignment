import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsessionsComponent } from './channelsessions.component';

describe('ChannelsessionsComponent', () => {
  let component: ChannelsessionsComponent;
  let fixture: ComponentFixture<ChannelsessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelsessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
