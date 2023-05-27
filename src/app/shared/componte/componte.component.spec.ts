import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponteComponent } from './componte.component';

describe('ComponteComponent', () => {
  let component: ComponteComponent;
  let fixture: ComponentFixture<ComponteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
