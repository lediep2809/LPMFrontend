import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuTucComponent } from './thu-tuc.component';

describe('ThuTucComponent', () => {
  let component: ThuTucComponent;
  let fixture: ComponentFixture<ThuTucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThuTucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuTucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
