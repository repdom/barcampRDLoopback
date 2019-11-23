import {DefaultCrudRepository} from '@loopback/repository';
import {CargoAnteriorNoElectivo, CargoAnteriorNoElectivoRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CargoAnteriorNoElectivoRepository extends DefaultCrudRepository<
  CargoAnteriorNoElectivo,
  typeof CargoAnteriorNoElectivo.prototype.codigo,
  CargoAnteriorNoElectivoRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(CargoAnteriorNoElectivo, dataSource);
  }
}
