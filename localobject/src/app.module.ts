import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { TagsModule } from './tags/tags.module';


@Module({
  imports: [ProductsModule, TagsModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
