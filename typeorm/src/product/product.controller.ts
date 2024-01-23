import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { Review } from '../review/entities/review.entity';
import { ReviewService } from 'src/review/review.service';
import { ReviewDto } from 'src/review/dto/review.dto/review.dto';


@Controller('users')
export class ProductController {
  constructor(private readonly usersService: ProductService) { }

  @Post(':id/review')
  async createReview(@Param('id', ParseIntPipe) id: number, @Body() body: ReviewDto) {
    return this.ReviewService.saveReview(id, body)
  }

}
