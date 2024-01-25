import { Module } from '@nestjs/common';
import { ReviewModule } from './review/review.module';
import { ProductModule } from './product/product.module';


@Module({
    imports: [ProductModule, ReviewModule],
    controllers: [],
    providers: []
})
export class AppModule {}
