import { Controller, ParseIntPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PricingService } from './pricing.service';
import { CreatePricingDto } from './dto/create-pricing.dto';
import { UpdatePricingDto } from './dto/update-pricing.dto';
import { PaginationDto } from 'src/common';

@Controller()
export class PricingController {
  constructor(private readonly pricingService: PricingService) {}

  @MessagePattern('pricing.health')
  health() {
    return 'Pricing service is healthy.';
  }

  @MessagePattern('pricing.create')
  create(@Payload() createPricingDto: CreatePricingDto) {
    return this.pricingService.create(createPricingDto);
  }

  @MessagePattern('pricing.findAll')
  findAll(@Payload() paginationDto: PaginationDto) {
    return this.pricingService.findAll(paginationDto);
  }

  @MessagePattern('pricing.findOne')
  findOne(@Payload('id', ParseIntPipe) id: number) {
    return this.pricingService.findOne(id);
  }

  @MessagePattern('pricing.update')
  update(@Payload() updatePricingDto: UpdatePricingDto) {
    return this.pricingService.update(updatePricingDto);
  }

  @MessagePattern('pricing.remove')
  remove(@Payload('id', ParseIntPipe) id: number) {
    return this.pricingService.remove(id);
  }

  @MessagePattern('pricing.restore')
  restore(@Payload('id', ParseIntPipe) id: number) {
    return this.pricingService.restore(id);
  }
}
