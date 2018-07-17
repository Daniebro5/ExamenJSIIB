import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloDetalleComponent } from './modelo-detalle.component';

describe('ModeloDetalleComponent', () => {
  let component: ModeloDetalleComponent;
  let fixture: ComponentFixture<ModeloDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
