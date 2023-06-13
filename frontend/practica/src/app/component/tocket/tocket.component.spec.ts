import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TocketComponent } from './tocket.component';

describe('TocketComponent', () => {
  let component: TocketComponent;
  let fixture: ComponentFixture<TocketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TocketComponent]
    });
    fixture = TestBed.createComponent(TocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
