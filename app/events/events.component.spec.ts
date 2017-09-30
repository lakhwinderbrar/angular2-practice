import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAppComponent } from './events.component';

describe('EventsComponent', () => {
  let component: EventsAppComponent;
  let fixture: ComponentFixture<EventsAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
