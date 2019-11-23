import {DefaultCrudRepository} from '@loopback/repository';
import {ValoracionNegativaCandidato, ValoracionNegativaCandidatoRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ValoracionNegativaCandidatoRepository extends DefaultCrudRepository<
  ValoracionNegativaCandidato,
  typeof ValoracionNegativaCandidato.prototype.codigo,
  ValoracionNegativaCandidatoRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(ValoracionNegativaCandidato, dataSource);
  }
}
