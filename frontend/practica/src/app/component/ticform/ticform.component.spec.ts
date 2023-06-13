import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicformComponent } from './ticform.component';

describe('TicformComponent', () => {
  let component: TicformComponent;
  let fixture: ComponentFixture<TicformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicformComponent]
    });
    fixture = TestBed.createComponent(TicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
