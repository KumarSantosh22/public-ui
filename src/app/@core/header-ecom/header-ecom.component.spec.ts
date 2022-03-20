import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEcomComponent } from './header-ecom.component';

describe('HeaderEcomComponent', () => {
  let component: HeaderEcomComponent;
  let fixture: ComponentFixture<HeaderEcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
