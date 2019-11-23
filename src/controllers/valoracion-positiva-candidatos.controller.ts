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
import {ValoracionPositivaCandidato} from '../models';
import {ValoracionPositivaCandidatoRepository} from '../repositories';

export class ValoracionPositivaCandidatosController {
  constructor(
    @repository(ValoracionPositivaCandidatoRepository)
    public valoracionPositivaCandidatoRepository : ValoracionPositivaCandidatoRepository,
  ) {}

  @post('/valoracion-positiva-candidatos', {
    responses: {
      '200': {
        description: 'ValoracionPositivaCandidato model instance',
        content: {'application/json': {schema: getModelSchemaRef(ValoracionPositivaCandidato)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ValoracionPositivaCandidato, {exclude: ['codigo']}),
        },
      },
    })
    valoracionPositivaCandidato: Omit<ValoracionPositivaCandidato, 'codigo'>,
  ): Promise<ValoracionPositivaCandidato> {
    return this.valoracionPositivaCandidatoRepository.create(valoracionPositivaCandidato);
  }

  @get('/valoracion-positiva-candidatos/count', {
    responses: {
      '200': {
        description: 'ValoracionPositivaCandidato model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ValoracionPositivaCandidato)) where?: Where<ValoracionPositivaCandidato>,
  ): Promise<Count> {
    return this.valoracionPositivaCandidatoRepository.count(where);
  }

  @get('/valoracion-positiva-candidatos', {
    responses: {
      '200': {
        description: 'Array of ValoracionPositivaCandidato model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ValoracionPositivaCandidato)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ValoracionPositivaCandidato)) filter?: Filter<ValoracionPositivaCandidato>,
  ): Promise<ValoracionPositivaCandidato[]> {
    return this.valoracionPositivaCandidatoRepository.find(filter);
  }

  @patch('/valoracion-positiva-candidatos', {
    responses: {
      '200': {
        description: 'ValoracionPositivaCandidato PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ValoracionPositivaCandidato, {partial: true}),
        },
      },
    })
    valoracionPositivaCandidato: ValoracionPositivaCandidato,
    @param.query.object('where', getWhereSchemaFor(ValoracionPositivaCandidato)) where?: Where<ValoracionPositivaCandidato>,
  ): Promise<Count> {
    return this.valoracionPositivaCandidatoRepository.updateAll(valoracionPositivaCandidato, where);
  }

  @get('/valoracion-positiva-candidatos/{id}', {
    responses: {
      '200': {
        description: 'ValoracionPositivaCandidato model instance',
        content: {'application/json': {schema: getModelSchemaRef(ValoracionPositivaCandidato)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<ValoracionPositivaCandidato> {
    return this.valoracionPositivaCandidatoRepository.findById(id);
  }

  @patch('/valoracion-positiva-candidatos/{id}', {
    responses: {
      '204': {
        description: 'ValoracionPositivaCandidato PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ValoracionPositivaCandidato, {partial: true}),
        },
      },
    })
    valoracionPositivaCandidato: ValoracionPositivaCandidato,
  ): Promise<void> {
    await this.valoracionPositivaCandidatoRepository.updateById(id, valoracionPositivaCandidato);
  }

  @put('/valoracion-positiva-candidatos/{id}', {
    responses: {
      '204': {
        description: 'ValoracionPositivaCandidato PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() valoracionPositivaCandidato: ValoracionPositivaCandidato,
  ): Promise<void> {
    await this.valoracionPositivaCandidatoRepository.replaceById(id, valoracionPositivaCandidato);
  }

  @del('/valoracion-positiva-candidatos/{id}', {
    responses: {
      '204': {
        description: 'ValoracionPositivaCandidato DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.valoracionPositivaCandidatoRepository.deleteById(id);
  }
}
