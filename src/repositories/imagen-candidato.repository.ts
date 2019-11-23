import {DefaultCrudRepository} from '@loopback/repository';
import {ImagenCandidato, ImagenCandidatoRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ImagenCandidatoRepository extends DefaultCrudRepository<
  ImagenCandidato,
  typeof ImagenCandidato.prototype.codigo,
  ImagenCandidatoRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(ImagenCandidato, dataSource);
  }
}
