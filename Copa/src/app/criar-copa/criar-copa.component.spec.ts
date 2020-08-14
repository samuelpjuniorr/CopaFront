import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCopaComponent } from './criar-copa.component';

describe('CriarCopaComponent', () => {
  let component: CriarCopaComponent;
  let fixture: ComponentFixture<CriarCopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarCopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
