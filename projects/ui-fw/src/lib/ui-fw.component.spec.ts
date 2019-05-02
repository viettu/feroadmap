import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFwComponent } from './ui-fw.component';

describe('UiFwComponent', () => {
  let component: UiFwComponent;
  let fixture: ComponentFixture<UiFwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
