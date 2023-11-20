import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscvComponent } from './detailscv.component';

describe('DetailscvComponent', () => {
  let component: DetailscvComponent;
  let fixture: ComponentFixture<DetailscvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailscvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailscvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
