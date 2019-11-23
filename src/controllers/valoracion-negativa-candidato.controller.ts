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
import {ValoracionNegativaCandidato} from '../models';
import {ValoracionNegativaCandidatoRepository} from '../repositories';

export class ValoracionNegativaCandidatoController {
  constructor(
    @repository(ValoracionNegativaCandidatoRepository)
    public valoracionNegativaCandidatoRepository : ValoracionNegativaCandidatoRepository,
  ) {}

  @post('/valoracion-negativa-candidatos', {
    responses: {
      '200': {
        description: 'ValoracionNegativaCandidato model instance',
        content: {'application/json': {schema: getModelSchemaRef(ValoracionNegativaCandidato)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ValoracionNegativaCandidato, {exclude: ['codigo']}),
        },
      },
    })
    valoracionNegativaCandidato: Omit<ValoracionNegativaCandidato, 'codigo'>,
  ): Promise<ValoracionNegativaCandidato> {
    return this.valoracionNegativaCandidatoRepository.create(valoracionNegativaCandidato);
  }

  @get('/valoracion-negativa-candidatos/count', {
    responses: {
      '200': {
        description: 'ValoracionNegativaCandidato model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ValoracionNegativaCandidato)) where?: Where<ValoracionNegativaCandidato>,
  ): Promise<Count> {
    return this.valoracionNegativaCandidatoRepository.count(where);
  }

  @get('/valoracion-negativa-candidatos', {
    responses: {
      '200': {
        description: 'Array of ValoracionNegativaCandidato model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ValoracionNegativaCandidato)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ValoracionNegativaCandidato)) filter?: Filter<ValoracionNegativaCandidato>,
  ): Promise<ValoracionNegativaCandidato[]> {
    return this.valoracionNegativaCandidatoRepository.find(filter);
  }

  @patch('/valoracion-negativa-candidatos', {
    responses: {
      '200': {
        description: 'ValoracionNegativaCandidato PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ValoracionNegativaCandidato, {partial: true}),
        },
      },
    })
    valoracionNegativaCandidato: ValoracionNegativaCandidato,
    @param.query.object('where', getWhereSchemaFor(ValoracionNegativaCandidato)) where?: Where<ValoracionNegativaCandidato>,
  ): Promise<Count> {
    return this.valoracionNegativaCandidatoRepository.updateAll(valoracionNegativaCandidato, where);
  }

  @get('/valoracion-negativa-candidatos/{id}', {
    responses: {
      '200': {
        description: 'ValoracionNegativaCandidato model instance',
        content: {'application/json': {schema: getModelSchemaRef(ValoracionNegativaCandidato)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<ValoracionNegativaCandidato> {
    return this.valoracionNegativaCandidatoRepository.findById(id);
  }

  @patch('/valoracion-negativa-candidatos/{id}', {
    responses: {
      '204': {
        description: 'ValoracionNegativaCandidato PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ValoracionNegativaCandidato, {partial: true}),
        },
      },
    })
    valoracionNegativaCandidato: ValoracionNegativaCandidato,
  ): Promise<void> {
    await this.valoracionNegativaCandidatoRepository.updateById(id, valoracionNegativaCandidato);
  }

  @put('/valoracion-negativa-candidatos/{id}', {
    responses: {
      '204': {
        description: 'ValoracionNegativaCandidato PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() valoracionNegativaCandidato: ValoracionNegativaCandidato,
  ): Promise<void> {
    await this.valoracionNegativaCandidatoRepository.replaceById(id, valoracionNegativaCandidato);
  }

  @del('/valoracion-negativa-candidatos/{id}', {
    responses: {
      '204': {
        description: 'ValoracionNegativaCandidato DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.valoracionNegativaCandidatoRepository.deleteById(id);
  }
}
