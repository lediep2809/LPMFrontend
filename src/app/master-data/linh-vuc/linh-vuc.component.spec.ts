import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhVucComponent } from './linh-vuc.component';

describe('LinhVucComponent', () => {
  let component: LinhVucComponent;
  let fixture: ComponentFixture<LinhVucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinhVucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhVucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
