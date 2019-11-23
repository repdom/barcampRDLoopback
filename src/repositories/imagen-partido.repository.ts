import {DefaultCrudRepository} from '@loopback/repository';
import {ImagenPartido, ImagenPartidoRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ImagenPartidoRepository extends DefaultCrudRepository<
  ImagenPartido,
  typeof ImagenPartido.prototype.codigo,
  ImagenPartidoRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(ImagenPartido, dataSource);
  }
}
