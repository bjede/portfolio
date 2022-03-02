import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcrollTopComponent } from './srcroll-top.component';

describe('SrcrollTopComponent', () => {
  let component: SrcrollTopComponent;
  let fixture: ComponentFixture<SrcrollTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrcrollTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcrollTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
