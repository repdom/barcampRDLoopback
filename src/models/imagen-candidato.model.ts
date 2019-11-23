import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class ImagenCandidato extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  codigo?: number;

  @property({
    type: 'string',
  })
  imagen?: string;


  constructor(data?: Partial<ImagenCandidato>) {
    super(data);
  }
}

export interface ImagenCandidatoRelations {
  // describe navigational properties here
}

export type ImagenCandidatoWithRelations = ImagenCandidato & ImagenCandidatoRelations;
