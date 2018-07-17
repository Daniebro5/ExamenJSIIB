import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloDetalleExtendidoComponent } from './modelo-detalle-extendido.component';

describe('ModeloDetalleExtendidoComponent', () => {
  let component: ModeloDetalleExtendidoComponent;
  let fixture: ComponentFixture<ModeloDetalleExtendidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloDetalleExtendidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloDetalleExtendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
