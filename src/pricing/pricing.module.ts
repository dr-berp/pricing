import { Module } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { PricingController } from './pricing.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [PricingController],
  providers: [PricingService],
  imports: [NatsModule],
})
export class PricingModule {}
