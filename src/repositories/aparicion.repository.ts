import {DefaultCrudRepository} from '@loopback/repository';
import {Aparicion, AparicionRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AparicionRepository extends DefaultCrudRepository<
  Aparicion,
  typeof Aparicion.prototype.codigo,
  AparicionRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(Aparicion, dataSource);
  }
}
