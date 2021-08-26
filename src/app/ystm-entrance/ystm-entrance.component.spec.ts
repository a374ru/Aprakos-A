import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YstmEntranceComponent } from './ystm-entrance.component';

describe('YstmEntranceComponent', () => {
  let component: YstmEntranceComponent;
  let fixture: ComponentFixture<YstmEntranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YstmEntranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YstmEntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
