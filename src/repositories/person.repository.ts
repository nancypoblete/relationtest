import {
  BelongsToAccessor,
  DefaultCrudRepository,
  juggler,
  repository,
} from '@loopback/repository';
import {Person, City} from '../models';
import {inject, Getter} from '@loopback/core';
import {CityRepository} from '../repositories';

export class PersonRepository extends DefaultCrudRepository<
  Person,
  typeof Person.prototype.id
> {
  public readonly city: BelongsToAccessor<City, typeof Person.prototype.id>;
  constructor(
    @inject('datasources.mongodatabase') protected db: juggler.DataSource,
    @repository.getter('CustomerRepository')
    cityRepositoryGetter: Getter<CityRepository>,
  ) {
    super(Person, db);
    this.city = this.createBelongsToAccessorFor(
      'bornCity',
      cityRepositoryGetter,
    );
  }
}
