import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class ImagenPartido extends Entity {
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


  constructor(data?: Partial<ImagenPartido>) {
    super(data);
  }
}

export interface ImagenPartidoRelations {
  // describe navigational properties here
}

export type ImagenPartidoWithRelations = ImagenPartido & ImagenPartidoRelations;
