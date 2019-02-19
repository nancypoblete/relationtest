import {Entity, model, property} from '@loopback/repository';

@model()
export class City extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'string',
  })
  continent?: string;


  constructor(data?: Partial<City>) {
    super(data);
  }
}
