import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Patch, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { TagsService } from './tags.service';
import { Tag } from './tag/tag.interface';
import { TagDto } from './dto/tag.dto/tag.dto';

@Controller('tags')
export class TagsController {
    constructor(private tagsService: TagsService) { }

    @Get()
    getAll() {
        return this.tagsService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: number) {
        return this.tagsService.getById(id)
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async post(@Body() body: TagDto): Promise<Tag> {
    return this.tagsService.insert(body);
    }


    @Post(':id')
    update(@Param('id') id: number, @Body() body) {
        return this.tagsService.update(id, body)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number) {
        this.tagsService.delete(id)
    }
}
