import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderPageComponent } from './order-page.component';

describe('OderPageComponent', () => {
  let component: OderPageComponent;
  let fixture: ComponentFixture<OderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OderPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
