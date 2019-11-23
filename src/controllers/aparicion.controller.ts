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
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Aparicion} from '../models';
import {AparicionRepository} from '../repositories';

export class AparicionController {
  constructor(
    @repository(AparicionRepository)
    public aparicionRepository : AparicionRepository,
  ) {}

  @post('/apariciones', {
    responses: {
      '200': {
        description: 'Aparicion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Aparicion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aparicion, {exclude: ['codigo']}),
        },
      },
    })
    aparicion: Omit<Aparicion, 'codigo'>,
  ): Promise<Aparicion> {
    return this.aparicionRepository.create(aparicion);
  }

  @get('/apariciones/count', {
    responses: {
      '200': {
        description: 'Aparicion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Aparicion)) where?: Where<Aparicion>,
  ): Promise<Count> {
    return this.aparicionRepository.count(where);
  }

  @get('/apariciones', {
    responses: {
      '200': {
        description: 'Array of Aparicion model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Aparicion)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Aparicion)) filter?: Filter<Aparicion>,
  ): Promise<Aparicion[]> {
    return this.aparicionRepository.find(filter);
  }

  @patch('/apariciones', {
    responses: {
      '200': {
        description: 'Aparicion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aparicion, {partial: true}),
        },
      },
    })
    aparicion: Aparicion,
    @param.query.object('where', getWhereSchemaFor(Aparicion)) where?: Where<Aparicion>,
  ): Promise<Count> {
    return this.aparicionRepository.updateAll(aparicion, where);
  }

  @get('/apariciones/{id}', {
    responses: {
      '200': {
        description: 'Aparicion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Aparicion)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Aparicion> {
    return this.aparicionRepository.findById(id);
  }

  @patch('/apariciones/{id}', {
    responses: {
      '204': {
        description: 'Aparicion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aparicion, {partial: true}),
        },
      },
    })
    aparicion: Aparicion,
  ): Promise<void> {
    await this.aparicionRepository.updateById(id, aparicion);
  }

  @put('/apariciones/{id}', {
    responses: {
      '204': {
        description: 'Aparicion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() aparicion: Aparicion,
  ): Promise<void> {
    await this.aparicionRepository.replaceById(id, aparicion);
  }

  @del('/apariciones/{id}', {
    responses: {
      '204': {
        description: 'Aparicion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.aparicionRepository.deleteById(id);
  }
}
