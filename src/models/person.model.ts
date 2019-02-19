import {Entity, model, property} from '@loopback/repository';

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
  full_name: string;

  @property({
    type: 'number',
  })
  age?: number;


  constructor(data?: Partial<Person>) {
    super(data);
  }
}
