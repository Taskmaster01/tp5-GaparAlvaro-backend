import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisacComponent } from './divisac.component';

describe('DivisacComponent', () => {
  let component: DivisacComponent;
  let fixture: ComponentFixture<DivisacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivisacComponent]
    });
    fixture = TestBed.createComponent(DivisacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
