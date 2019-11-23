import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class CargoAnteriorNoElectivo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  codigo?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'date',
  })
  actualizacion?: string;

  @property({
    type: 'date',
  })
  creacion?: string;


  constructor(data?: Partial<CargoAnteriorNoElectivo>) {
    super(data);
  }
}

export interface CargoAnteriorNoElectivoRelations {
  // describe navigational properties here
}

export type CargoAnteriorNoElectivoWithRelations = CargoAnteriorNoElectivo & CargoAnteriorNoElectivoRelations;
