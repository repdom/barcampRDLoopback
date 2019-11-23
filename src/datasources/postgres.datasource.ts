import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './postgres.datasource.json';

export class PostgresDataSource extends juggler.DataSource {
  static dataSourceName = 'Postgres';

  constructor(
    @inject('datasources.config.Postgres', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
