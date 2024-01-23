import { Module } from '@nestjs/common';
import { ReviewModule } from './review/review.module';
import { ProductModule } from './product/product.module';
import { ReviewController } from './review/review.controller';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ReviewService } from './review/review.service';

@Module({
    imports: [ProductModule, ReviewModule],
    controllers: [ProductController, ReviewController],
    providers: [ProductService, ReviewService]
})
export class AppModule {}
