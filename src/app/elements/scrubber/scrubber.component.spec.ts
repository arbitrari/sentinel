import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrubberComponent } from './scrubber.component';

describe('ScrubberComponent', () => {
  let component: ScrubberComponent;
  let fixture: ComponentFixture<ScrubberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrubberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrubberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
