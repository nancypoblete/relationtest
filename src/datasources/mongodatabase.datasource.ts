import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './mongodatabase.datasource.json';

export class MongodatabaseDataSource extends juggler.DataSource {
  static dataSourceName = 'mongodatabase';

  constructor(
    @inject('datasources.config.mongodatabase', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
