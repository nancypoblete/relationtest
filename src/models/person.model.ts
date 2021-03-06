import {Entity, model, property, belongsTo} from '@loopback/repository';
import {City} from './city.model';

@model()
export class Person extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  fullName: string;

  @property({
    type: 'number',
  })
  age?: number;

  @belongsTo(() => City, {keyTo: 'name'}) //Creating a relation belongsTo with the City model
  bornCity: string;

  constructor(data?: Partial<Person>) {
    super(data);
  }
}
