import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisalistComponent } from './divisalist.component';

describe('DivisalistComponent', () => {
  let component: DivisalistComponent;
  let fixture: ComponentFixture<DivisalistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivisalistComponent]
    });
    fixture = TestBed.createComponent(DivisalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
