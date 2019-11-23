import {DefaultCrudRepository} from '@loopback/repository';
import {Partido, PartidoRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PartidoRepository extends DefaultCrudRepository<
  Partido,
  typeof Partido.prototype.codigo,
  PartidoRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(Partido, dataSource);
  }
}
