import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAPageComponent } from './test-a-page.component';

describe('TestAPageComponent', () => {
  let component: TestAPageComponent;
  let fixture: ComponentFixture<TestAPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
