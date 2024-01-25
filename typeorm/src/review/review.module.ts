import { Module } from '@nestjs/common';
import { ReviewsService } from './review.service';
import { ReviewController } from './review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Product } from 'src/product/entities/product.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Review, Product])],
    controllers: [ReviewController],
    providers: [ReviewsService]
})
export class ReviewModule {}
