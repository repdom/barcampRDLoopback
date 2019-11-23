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
import {Candidato} from '../models';
import {CandidatoRepository} from '../repositories';

export class CandidatoController {
  constructor(
    @repository(CandidatoRepository)
    public candidatoRepository : CandidatoRepository,
  ) {}

  @post('/candidatos', {
    responses: {
      '200': {
        description: 'Candidato model instance',
        content: {'application/json': {schema: getModelSchemaRef(Candidato)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Candidato, {exclude: ['codigo']}),
        },
      },
    })
    candidato: Omit<Candidato, 'codigo'>,
  ): Promise<Candidato> {
    return this.candidatoRepository.create(candidato);
  }

  @get('/candidatos/count', {
    responses: {
      '200': {
        description: 'Candidato model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Candidato)) where?: Where<Candidato>,
  ): Promise<Count> {
    return this.candidatoRepository.count(where);
  }

  @get('/candidatos', {
    responses: {
      '200': {
        description: 'Array of Candidato model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Candidato)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Candidato)) filter?: Filter<Candidato>,
  ): Promise<Candidato[]> {
    return this.candidatoRepository.find(filter);
  }

  @patch('/candidatos', {
    responses: {
      '200': {
        description: 'Candidato PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Candidato, {partial: true}),
        },
      },
    })
    candidato: Candidato,
    @param.query.object('where', getWhereSchemaFor(Candidato)) where?: Where<Candidato>,
  ): Promise<Count> {
    return this.candidatoRepository.updateAll(candidato, where);
  }

  @get('/candidatos/{id}', {
    responses: {
      '200': {
        description: 'Candidato model instance',
        content: {'application/json': {schema: getModelSchemaRef(Candidato)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Candidato> {
    return this.candidatoRepository.findById(id);
  }

  @patch('/candidatos/{id}', {
    responses: {
      '204': {
        description: 'Candidato PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Candidato, {partial: true}),
        },
      },
    })
    candidato: Candidato,
  ): Promise<void> {
    await this.candidatoRepository.updateById(id, candidato);
  }

  @put('/candidatos/{id}', {
    responses: {
      '204': {
        description: 'Candidato PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() candidato: Candidato,
  ): Promise<void> {
    await this.candidatoRepository.replaceById(id, candidato);
  }

  @del('/candidatos/{id}', {
    responses: {
      '204': {
        description: 'Candidato DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.candidatoRepository.deleteById(id);
  }
}
