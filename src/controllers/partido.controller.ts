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
import {Partido} from '../models';
import {PartidoRepository} from '../repositories';

export class PartidoController {
  constructor(
    @repository(PartidoRepository)
    public partidoRepository : PartidoRepository,
  ) {}

  @post('/partidos', {
    responses: {
      '200': {
        description: 'Partido model instance',
        content: {'application/json': {schema: getModelSchemaRef(Partido)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Partido, {exclude: ['codigo']}),
        },
      },
    })
    partido: Omit<Partido, 'codigo'>,
  ): Promise<Partido> {
    return this.partidoRepository.create(partido);
  }

  @get('/partidos/count', {
    responses: {
      '200': {
        description: 'Partido model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Partido)) where?: Where<Partido>,
  ): Promise<Count> {
    return this.partidoRepository.count(where);
  }

  @get('/partidos', {
    responses: {
      '200': {
        description: 'Array of Partido model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Partido)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Partido)) filter?: Filter<Partido>,
  ): Promise<Partido[]> {
    return this.partidoRepository.find(filter);
  }

  @patch('/partidos', {
    responses: {
      '200': {
        description: 'Partido PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Partido, {partial: true}),
        },
      },
    })
    partido: Partido,
    @param.query.object('where', getWhereSchemaFor(Partido)) where?: Where<Partido>,
  ): Promise<Count> {
    return this.partidoRepository.updateAll(partido, where);
  }

  @get('/partidos/{id}', {
    responses: {
      '200': {
        description: 'Partido model instance',
        content: {'application/json': {schema: getModelSchemaRef(Partido)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Partido> {
    return this.partidoRepository.findById(id);
  }

  @patch('/partidos/{id}', {
    responses: {
      '204': {
        description: 'Partido PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Partido, {partial: true}),
        },
      },
    })
    partido: Partido,
  ): Promise<void> {
    await this.partidoRepository.updateById(id, partido);
  }

  @put('/partidos/{id}', {
    responses: {
      '204': {
        description: 'Partido PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() partido: Partido,
  ): Promise<void> {
    await this.partidoRepository.replaceById(id, partido);
  }

  @del('/partidos/{id}', {
    responses: {
      '204': {
        description: 'Partido DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.partidoRepository.deleteById(id);
  }
}
