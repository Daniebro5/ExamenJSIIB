import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaGeneralComponent } from './marca-general.component';

describe('MarcaGeneralComponent', () => {
  let component: MarcaGeneralComponent;
  let fixture: ComponentFixture<MarcaGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
