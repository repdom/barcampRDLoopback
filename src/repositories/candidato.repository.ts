import {DefaultCrudRepository} from '@loopback/repository';
import {Candidato, CandidatoRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CandidatoRepository extends DefaultCrudRepository<
  Candidato,
  typeof Candidato.prototype.codigo,
  CandidatoRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(Candidato, dataSource);
  }
}
