import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '32067437',
    database: 'product',
    entities: [Products],
    autoLoadEntities: true,
    synchronize: true
  }),
  TypeOrmModule.forFeature([Products]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [TypeOrmModule]
})

export class AppModule { }

//Page 99 - Sincronizar las entidades con tablas de la base de datos