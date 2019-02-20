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
import {City} from '../models';
import {CityRepository} from '../repositories';

export class CitiesController {
  constructor(
    @repository(CityRepository)
    public cityRepository : CityRepository,
  ) {}

  @post('/cities', {
    responses: {
      '200': {
        description: 'City model instance',
        content: {'application/json': {schema: {'x-ts-type': City}}},
      },
    },
  })
  async create(@requestBody() city: City): Promise<City> {
    return await this.cityRepository.create(city);
  }

  @get('/cities/count', {
    responses: {
      '200': {
        description: 'City model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(City)) where?: Where,
  ): Promise<Count> {
    return await this.cityRepository.count(where);
  }

  @get('/cities', {
    responses: {
      '200': {
        description: 'Array of City model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': City}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(City)) filter?: Filter,
  ): Promise<City[]> {
    return await this.cityRepository.find(filter);
  }

  @patch('/cities', {
    responses: {
      '200': {
        description: 'City PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() city: City,
    @param.query.object('where', getWhereSchemaFor(City)) where?: Where,
  ): Promise<Count> {
    return await this.cityRepository.updateAll(city, where);
  }

  @get('/cities/{id}', {
    responses: {
      '200': {
        description: 'City model instance',
        content: {'application/json': {schema: {'x-ts-type': City}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<City> {
    return await this.cityRepository.findById(id);
  }

  @patch('/cities/{id}', {
    responses: {
      '204': {
        description: 'City PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() city: City,
  ): Promise<void> {
    await this.cityRepository.updateById(id, city);
  }

  @put('/cities/{id}', {
    responses: {
      '204': {
        description: 'City PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() city: City,
  ): Promise<void> {
    await this.cityRepository.replaceById(id, city);
  }

  @del('/cities/{id}', {
    responses: {
      '204': {
        description: 'City DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cityRepository.deleteById(id);
  }
}
