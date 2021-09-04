import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSanitizationComponent } from './default-sanitization.component';

describe('DefaultSanitizationComponent', () => {
  let component: DefaultSanitizationComponent;
  let fixture: ComponentFixture<DefaultSanitizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultSanitizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultSanitizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
