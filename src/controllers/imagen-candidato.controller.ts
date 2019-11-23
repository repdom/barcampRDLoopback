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
import {ImagenCandidato} from '../models';
import {ImagenCandidatoRepository} from '../repositories';

export class ImagenCandidatoController {
  constructor(
    @repository(ImagenCandidatoRepository)
    public imagenCandidatoRepository : ImagenCandidatoRepository,
  ) {}

  @post('/imagen-candidatos', {
    responses: {
      '200': {
        description: 'ImagenCandidato model instance',
        content: {'application/json': {schema: getModelSchemaRef(ImagenCandidato)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ImagenCandidato, {exclude: ['codigo']}),
        },
      },
    })
    imagenCandidato: Omit<ImagenCandidato, 'codigo'>,
  ): Promise<ImagenCandidato> {
    return this.imagenCandidatoRepository.create(imagenCandidato);
  }

  @get('/imagen-candidatos/count', {
    responses: {
      '200': {
        description: 'ImagenCandidato model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ImagenCandidato)) where?: Where<ImagenCandidato>,
  ): Promise<Count> {
    return this.imagenCandidatoRepository.count(where);
  }

  @get('/imagen-candidatos', {
    responses: {
      '200': {
        description: 'Array of ImagenCandidato model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ImagenCandidato)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ImagenCandidato)) filter?: Filter<ImagenCandidato>,
  ): Promise<ImagenCandidato[]> {
    return this.imagenCandidatoRepository.find(filter);
  }

  @patch('/imagen-candidatos', {
    responses: {
      '200': {
        description: 'ImagenCandidato PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ImagenCandidato, {partial: true}),
        },
      },
    })
    imagenCandidato: ImagenCandidato,
    @param.query.object('where', getWhereSchemaFor(ImagenCandidato)) where?: Where<ImagenCandidato>,
  ): Promise<Count> {
    return this.imagenCandidatoRepository.updateAll(imagenCandidato, where);
  }

  @get('/imagen-candidatos/{id}', {
    responses: {
      '200': {
        description: 'ImagenCandidato model instance',
        content: {'application/json': {schema: getModelSchemaRef(ImagenCandidato)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<ImagenCandidato> {
    return this.imagenCandidatoRepository.findById(id);
  }

  @patch('/imagen-candidatos/{id}', {
    responses: {
      '204': {
        description: 'ImagenCandidato PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ImagenCandidato, {partial: true}),
        },
      },
    })
    imagenCandidato: ImagenCandidato,
  ): Promise<void> {
    await this.imagenCandidatoRepository.updateById(id, imagenCandidato);
  }

  @put('/imagen-candidatos/{id}', {
    responses: {
      '204': {
        description: 'ImagenCandidato PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() imagenCandidato: ImagenCandidato,
  ): Promise<void> {
    await this.imagenCandidatoRepository.replaceById(id, imagenCandidato);
  }

  @del('/imagen-candidatos/{id}', {
    responses: {
      '204': {
        description: 'ImagenCandidato DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.imagenCandidatoRepository.deleteById(id);
  }
}
