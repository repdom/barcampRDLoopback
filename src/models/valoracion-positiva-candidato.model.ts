import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class ValoracionPositivaCandidato extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  codigo?: number;

  @property({
    type: 'date',
  })
  creacion?: string;

  @property({
    type: 'date',
  })
  actualizacion?: string;


  constructor(data?: Partial<ValoracionPositivaCandidato>) {
    super(data);
  }
}

export interface ValoracionPositivaCandidatoRelations {
  // describe navigational properties here
}

export type ValoracionPositivaCandidatoWithRelations = ValoracionPositivaCandidato & ValoracionPositivaCandidatoRelations;
