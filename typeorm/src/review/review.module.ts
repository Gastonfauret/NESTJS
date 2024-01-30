import { Module } from '@nestjs/common';
import { ReviewsService } from './review.service';
import { ReviewController } from './review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Product } from 'src/product/entities/product.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Review, Product])],
    controllers: [ReviewController],
    providers: [ReviewsService],
    exports: [TypeOrmModule]
})
export class ReviewModule {}


// import { Module } from '@nestjs/common';
// import { ReviewService } from './review.service';
// import { ReviewController } from './review.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Review } from './entities/review.entity';

// @Module({
//   imports: [
//     TypeOrmModule.forFeature([Review]),
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: '32067437',
//       database: 'review', // Cambiar el nombre de la base de datos si es diferente
//       entities: [Review],
//       autoLoadEntities: true,
//       synchronize: true,
//     }),
//   ],
//   controllers: [ReviewController],
//   providers: [ReviewService],
//   exports: [TypeOrmModule],
// })
// export class ReviewModule {}
