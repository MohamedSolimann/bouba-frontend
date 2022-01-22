import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FliterMenuComponent } from './fliter-menu.component';

describe('FliterMenuComponent', () => {
  let component: FliterMenuComponent;
  let fixture: ComponentFixture<FliterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FliterMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FliterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
