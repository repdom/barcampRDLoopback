import {DefaultCrudRepository} from '@loopback/repository';
import {Cargo, CargoRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CargoRepository extends DefaultCrudRepository<
  Cargo,
  typeof Cargo.prototype.codigo,
  CargoRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(Cargo, dataSource);
  }
}
