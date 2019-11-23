import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class MasDeLoMismoCandidato extends Entity {
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


  constructor(data?: Partial<MasDeLoMismoCandidato>) {
    super(data);
  }
}

export interface MasDeLoMismoCandidatoRelations {
  // describe navigational properties here
}

export type MasDeLoMismoCandidatoWithRelations = MasDeLoMismoCandidato & MasDeLoMismoCandidatoRelations;
