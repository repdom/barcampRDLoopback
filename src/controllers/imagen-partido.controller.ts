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
import {ImagenPartido} from '../models';
import {ImagenPartidoRepository} from '../repositories';

export class ImagenPartidoController {
  constructor(
    @repository(ImagenPartidoRepository)
    public imagenPartidoRepository : ImagenPartidoRepository,
  ) {}

  @post('/imagen-partidos', {
    responses: {
      '200': {
        description: 'ImagenPartido model instance',
        content: {'application/json': {schema: getModelSchemaRef(ImagenPartido)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ImagenPartido, {exclude: ['codigo']}),
        },
      },
    })
    imagenPartido: Omit<ImagenPartido, 'codigo'>,
  ): Promise<ImagenPartido> {
    return this.imagenPartidoRepository.create(imagenPartido);
  }

  @get('/imagen-partidos/count', {
    responses: {
      '200': {
        description: 'ImagenPartido model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ImagenPartido)) where?: Where<ImagenPartido>,
  ): Promise<Count> {
    return this.imagenPartidoRepository.count(where);
  }

  @get('/imagen-partidos', {
    responses: {
      '200': {
        description: 'Array of ImagenPartido model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ImagenPartido)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ImagenPartido)) filter?: Filter<ImagenPartido>,
  ): Promise<ImagenPartido[]> {
    return this.imagenPartidoRepository.find(filter);
  }

  @patch('/imagen-partidos', {
    responses: {
      '200': {
        description: 'ImagenPartido PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ImagenPartido, {partial: true}),
        },
      },
    })
    imagenPartido: ImagenPartido,
    @param.query.object('where', getWhereSchemaFor(ImagenPartido)) where?: Where<ImagenPartido>,
  ): Promise<Count> {
    return this.imagenPartidoRepository.updateAll(imagenPartido, where);
  }

  @get('/imagen-partidos/{id}', {
    responses: {
      '200': {
        description: 'ImagenPartido model instance',
        content: {'application/json': {schema: getModelSchemaRef(ImagenPartido)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<ImagenPartido> {
    return this.imagenPartidoRepository.findById(id);
  }

  @patch('/imagen-partidos/{id}', {
    responses: {
      '204': {
        description: 'ImagenPartido PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ImagenPartido, {partial: true}),
        },
      },
    })
    imagenPartido: ImagenPartido,
  ): Promise<void> {
    await this.imagenPartidoRepository.updateById(id, imagenPartido);
  }

  @put('/imagen-partidos/{id}', {
    responses: {
      '204': {
        description: 'ImagenPartido PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() imagenPartido: ImagenPartido,
  ): Promise<void> {
    await this.imagenPartidoRepository.replaceById(id, imagenPartido);
  }

  @del('/imagen-partidos/{id}', {
    responses: {
      '204': {
        description: 'ImagenPartido DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.imagenPartidoRepository.deleteById(id);
  }
}
