import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaClient } from '@prisma/client';
import { NATS_SERVICE } from 'src/config';
import { CreatePricingDto } from './dto/create-pricing.dto';
import { UpdatePricingDto } from './dto/update-pricing.dto';
import { PaginationDto } from 'src/common';

@Injectable()
export class PricingService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PricingService.name);

  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {
    super();
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Connected to the database \\(^.^)/');
  }

  create(createPricingDto: CreatePricingDto) {
    return createPricingDto;
  }

  findAll(paginationDto: PaginationDto) {
    return paginationDto;
  }

  findOne(id: number) {
    return `This action returns a #${id} pricing`;
  }

  update(updatePricingDto: UpdatePricingDto) {
    return updatePricingDto;
  }

  remove(id: number) {
    return `This action removes a #${id} pricing`;
  }

  restore(id: number) {
    return `This action restores a #${id} pricing`;
  }
}
