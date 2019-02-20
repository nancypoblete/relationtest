import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Person} from '../models';
import {PersonRepository} from '../repositories';

export class PersonsController {
  constructor(
    @repository(PersonRepository)
    public personRepository : PersonRepository,
  ) {}

  @post('/persons', {
    responses: {
      '200': {
        description: 'Person model instance',
        content: {'application/json': {schema: {'x-ts-type': Person}}},
      },
    },
  })
  async create(@requestBody() person: Person): Promise<Person> {
    return await this.personRepository.create(person);
  }

  @get('/persons/count', {
    responses: {
      '200': {
        description: 'Person model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Person)) where?: Where,
  ): Promise<Count> {
    return await this.personRepository.count(where);
  }

  @get('/persons', {
    responses: {
      '200': {
        description: 'Array of Person model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Person}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Person)) filter?: Filter,
  ): Promise<Person[]> {
    return await this.personRepository.find(filter);
  }

  @patch('/persons', {
    responses: {
      '200': {
        description: 'Person PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() person: Person,
    @param.query.object('where', getWhereSchemaFor(Person)) where?: Where,
  ): Promise<Count> {
    return await this.personRepository.updateAll(person, where);
  }

  @get('/persons/{id}', {
    responses: {
      '200': {
        description: 'Person model instance',
        content: {'application/json': {schema: {'x-ts-type': Person}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Person> {
    return await this.personRepository.findById(id);
  }

  @patch('/persons/{id}', {
    responses: {
      '204': {
        description: 'Person PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() person: Person,
  ): Promise<void> {
    await this.personRepository.updateById(id, person);
  }

  @put('/persons/{id}', {
    responses: {
      '204': {
        description: 'Person PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() person: Person,
  ): Promise<void> {
    await this.personRepository.replaceById(id, person);
  }

  @del('/persons/{id}', {
    responses: {
      '204': {
        description: 'Person DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.personRepository.deleteById(id);
  }
}
