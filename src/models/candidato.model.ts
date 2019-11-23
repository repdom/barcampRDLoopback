import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Candidato extends Entity {
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

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;


  constructor(data?: Partial<Candidato>) {
    super(data);
  }
}

export interface CandidatoRelations {
  // describe navigational properties here
}

export type CandidatoWithRelations = Candidato & CandidatoRelations;
