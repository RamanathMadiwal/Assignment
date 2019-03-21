import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelSessionsComponent } from './channelsessions.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ChannelsessionsComponent', () => {
  let component: ChannelSessionsComponent;
  let fixture: ComponentFixture<ChannelSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientModule],
      declarations: [ ChannelSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
