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
import {CargoAnteriorNoElectivo} from '../models';
import {CargoAnteriorNoElectivoRepository} from '../repositories';

export class CargoAnteriorNoElectivoController {
  constructor(
    @repository(CargoAnteriorNoElectivoRepository)
    public cargoAnteriorNoElectivoRepository : CargoAnteriorNoElectivoRepository,
  ) {}

  @post('/cargo-anterior-no-electivos', {
    responses: {
      '200': {
        description: 'CargoAnteriorNoElectivo model instance',
        content: {'application/json': {schema: getModelSchemaRef(CargoAnteriorNoElectivo)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CargoAnteriorNoElectivo, {exclude: ['codigo']}),
        },
      },
    })
    cargoAnteriorNoElectivo: Omit<CargoAnteriorNoElectivo, 'codigo'>,
  ): Promise<CargoAnteriorNoElectivo> {
    return this.cargoAnteriorNoElectivoRepository.create(cargoAnteriorNoElectivo);
  }

  @get('/cargo-anterior-no-electivos/count', {
    responses: {
      '200': {
        description: 'CargoAnteriorNoElectivo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CargoAnteriorNoElectivo)) where?: Where<CargoAnteriorNoElectivo>,
  ): Promise<Count> {
    return this.cargoAnteriorNoElectivoRepository.count(where);
  }

  @get('/cargo-anterior-no-electivos', {
    responses: {
      '200': {
        description: 'Array of CargoAnteriorNoElectivo model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(CargoAnteriorNoElectivo)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CargoAnteriorNoElectivo)) filter?: Filter<CargoAnteriorNoElectivo>,
  ): Promise<CargoAnteriorNoElectivo[]> {
    return this.cargoAnteriorNoElectivoRepository.find(filter);
  }

  @patch('/cargo-anterior-no-electivos', {
    responses: {
      '200': {
        description: 'CargoAnteriorNoElectivo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CargoAnteriorNoElectivo, {partial: true}),
        },
      },
    })
    cargoAnteriorNoElectivo: CargoAnteriorNoElectivo,
    @param.query.object('where', getWhereSchemaFor(CargoAnteriorNoElectivo)) where?: Where<CargoAnteriorNoElectivo>,
  ): Promise<Count> {
    return this.cargoAnteriorNoElectivoRepository.updateAll(cargoAnteriorNoElectivo, where);
  }

  @get('/cargo-anterior-no-electivos/{id}', {
    responses: {
      '200': {
        description: 'CargoAnteriorNoElectivo model instance',
        content: {'application/json': {schema: getModelSchemaRef(CargoAnteriorNoElectivo)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<CargoAnteriorNoElectivo> {
    return this.cargoAnteriorNoElectivoRepository.findById(id);
  }

  @patch('/cargo-anterior-no-electivos/{id}', {
    responses: {
      '204': {
        description: 'CargoAnteriorNoElectivo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CargoAnteriorNoElectivo, {partial: true}),
        },
      },
    })
    cargoAnteriorNoElectivo: CargoAnteriorNoElectivo,
  ): Promise<void> {
    await this.cargoAnteriorNoElectivoRepository.updateById(id, cargoAnteriorNoElectivo);
  }

  @put('/cargo-anterior-no-electivos/{id}', {
    responses: {
      '204': {
        description: 'CargoAnteriorNoElectivo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cargoAnteriorNoElectivo: CargoAnteriorNoElectivo,
  ): Promise<void> {
    await this.cargoAnteriorNoElectivoRepository.replaceById(id, cargoAnteriorNoElectivo);
  }

  @del('/cargo-anterior-no-electivos/{id}', {
    responses: {
      '204': {
        description: 'CargoAnteriorNoElectivo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cargoAnteriorNoElectivoRepository.deleteById(id);
  }
}
