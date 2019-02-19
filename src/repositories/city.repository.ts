import {DefaultCrudRepository} from '@loopback/repository';
import {City} from '../models';
import {MongodatabaseDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CityRepository extends DefaultCrudRepository<
  City,
  typeof City.prototype.name
> {
  constructor(
    @inject('datasources.mongodatabase') dataSource: MongodatabaseDataSource,
  ) {
    super(City, dataSource);
  }
}
