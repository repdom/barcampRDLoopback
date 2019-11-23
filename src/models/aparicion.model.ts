import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Aparicion extends Entity {
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
  titulo: string;

  @property({
    type: 'string',
  })
  link?: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @property({
    type: 'date',
  })
  creacion?: string;

  @property({
    type: 'date',
  })
  actualizacion?: string;


  constructor(data?: Partial<Aparicion>) {
    super(data);
  }
}

export interface AparicionRelations {
  // describe navigational properties here
}

export type AparicionWithRelations = Aparicion & AparicionRelations;
