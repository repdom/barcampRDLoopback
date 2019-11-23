import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class ValoracionNegativaCandidato extends Entity {
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


  constructor(data?: Partial<ValoracionNegativaCandidato>) {
    super(data);
  }
}

export interface ValoracionNegativaCandidatoRelations {
  // describe navigational properties here
}

export type ValoracionNegativaCandidatoWithRelations = ValoracionNegativaCandidato & ValoracionNegativaCandidatoRelations;
