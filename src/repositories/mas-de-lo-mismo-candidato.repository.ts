import {DefaultCrudRepository} from '@loopback/repository';
import {MasDeLoMismoCandidato, MasDeLoMismoCandidatoRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MasDeLoMismoCandidatoRepository extends DefaultCrudRepository<
  MasDeLoMismoCandidato,
  typeof MasDeLoMismoCandidato.prototype.codigo,
  MasDeLoMismoCandidatoRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(MasDeLoMismoCandidato, dataSource);
  }
}
