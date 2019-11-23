import {DefaultCrudRepository} from '@loopback/repository';
import {ValoracionPositivaCandidato, ValoracionPositivaCandidatoRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ValoracionPositivaCandidatoRepository extends DefaultCrudRepository<
  ValoracionPositivaCandidato,
  typeof ValoracionPositivaCandidato.prototype.codigo,
  ValoracionPositivaCandidatoRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(ValoracionPositivaCandidato, dataSource);
  }
}
