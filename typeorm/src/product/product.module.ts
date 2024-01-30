import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Review } from 'src/review/entities/review.entity';
import { ReviewController } from 'src/review/review.controller';
import { ReviewsService } from 'src/review/review.service';
import { Size } from './entities/size.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '32067437',
    database: 'product',
    entities: [Product],
    autoLoadEntities: true,
    synchronize: true
  }),
  TypeOrmModule.forFeature([Product, Review, Size]),
  ],
  controllers: [ProductController, ReviewController],
  providers: [ProductService, ReviewsService],
  exports: [TypeOrmModule]
})

export class ProductModule { }

