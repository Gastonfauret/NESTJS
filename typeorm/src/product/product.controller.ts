import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';


@Controller('users')
export class ProductController {
  constructor(private readonly usersService: ProductService) { }


}
