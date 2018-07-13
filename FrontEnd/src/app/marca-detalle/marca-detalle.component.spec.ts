import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaDetalleComponent } from './marca-detalle.component';

describe('MarcaDetalleComponent', () => {
  let component: MarcaDetalleComponent;
  let fixture: ComponentFixture<MarcaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
