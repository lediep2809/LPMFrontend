import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuyTrinhComponent } from './quy-trinh.component';

describe('QuyTrinhComponent', () => {
  let component: QuyTrinhComponent;
  let fixture: ComponentFixture<QuyTrinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuyTrinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuyTrinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
