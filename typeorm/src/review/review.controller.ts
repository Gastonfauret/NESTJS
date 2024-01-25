import { Controller, Post, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ReviewDto } from './dto/review.dto/review.dto';
import { ReviewsService } from './review.service';

@Controller('review')
export class ReviewController {
    constructor(private readonly reviewsService: ReviewsService) {}

    @Post(':id/review')
    async createReview(
        @Param('id', ParseIntPipe) id: number, @Body() body: ReviewDto
    ) {
        return this.reviewsService.saveReview(id, body);
    }
}
