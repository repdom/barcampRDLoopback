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
import {MasDeLoMismoCandidato} from '../models';
import {MasDeLoMismoCandidatoRepository} from '../repositories';

export class MasDeLoMismoCandidatoController {
  constructor(
    @repository(MasDeLoMismoCandidatoRepository)
    public masDeLoMismoCandidatoRepository : MasDeLoMismoCandidatoRepository,
  ) {}

  @post('/mas-de-lo-mismo-candidatos', {
    responses: {
      '200': {
        description: 'MasDeLoMismoCandidato model instance',
        content: {'application/json': {schema: getModelSchemaRef(MasDeLoMismoCandidato)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MasDeLoMismoCandidato, {exclude: ['codigo']}),
        },
      },
    })
    masDeLoMismoCandidato: Omit<MasDeLoMismoCandidato, 'codigo'>,
  ): Promise<MasDeLoMismoCandidato> {
    return this.masDeLoMismoCandidatoRepository.create(masDeLoMismoCandidato);
  }

  @get('/mas-de-lo-mismo-candidatos/count', {
    responses: {
      '200': {
        description: 'MasDeLoMismoCandidato model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(MasDeLoMismoCandidato)) where?: Where<MasDeLoMismoCandidato>,
  ): Promise<Count> {
    return this.masDeLoMismoCandidatoRepository.count(where);
  }

  @get('/mas-de-lo-mismo-candidatos', {
    responses: {
      '200': {
        description: 'Array of MasDeLoMismoCandidato model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(MasDeLoMismoCandidato)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(MasDeLoMismoCandidato)) filter?: Filter<MasDeLoMismoCandidato>,
  ): Promise<MasDeLoMismoCandidato[]> {
    return this.masDeLoMismoCandidatoRepository.find(filter);
  }

  @patch('/mas-de-lo-mismo-candidatos', {
    responses: {
      '200': {
        description: 'MasDeLoMismoCandidato PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MasDeLoMismoCandidato, {partial: true}),
        },
      },
    })
    masDeLoMismoCandidato: MasDeLoMismoCandidato,
    @param.query.object('where', getWhereSchemaFor(MasDeLoMismoCandidato)) where?: Where<MasDeLoMismoCandidato>,
  ): Promise<Count> {
    return this.masDeLoMismoCandidatoRepository.updateAll(masDeLoMismoCandidato, where);
  }

  @get('/mas-de-lo-mismo-candidatos/{id}', {
    responses: {
      '200': {
        description: 'MasDeLoMismoCandidato model instance',
        content: {'application/json': {schema: getModelSchemaRef(MasDeLoMismoCandidato)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<MasDeLoMismoCandidato> {
    return this.masDeLoMismoCandidatoRepository.findById(id);
  }

  @patch('/mas-de-lo-mismo-candidatos/{id}', {
    responses: {
      '204': {
        description: 'MasDeLoMismoCandidato PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MasDeLoMismoCandidato, {partial: true}),
        },
      },
    })
    masDeLoMismoCandidato: MasDeLoMismoCandidato,
  ): Promise<void> {
    await this.masDeLoMismoCandidatoRepository.updateById(id, masDeLoMismoCandidato);
  }

  @put('/mas-de-lo-mismo-candidatos/{id}', {
    responses: {
      '204': {
        description: 'MasDeLoMismoCandidato PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() masDeLoMismoCandidato: MasDeLoMismoCandidato,
  ): Promise<void> {
    await this.masDeLoMismoCandidatoRepository.replaceById(id, masDeLoMismoCandidato);
  }

  @del('/mas-de-lo-mismo-candidatos/{id}', {
    responses: {
      '204': {
        description: 'MasDeLoMismoCandidato DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.masDeLoMismoCandidatoRepository.deleteById(id);
  }
}
