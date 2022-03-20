import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEcomTwoComponent } from './header-ecom-two.component';

describe('HeaderEcomTwoComponent', () => {
  let component: HeaderEcomTwoComponent;
  let fixture: ComponentFixture<HeaderEcomTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEcomTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEcomTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
