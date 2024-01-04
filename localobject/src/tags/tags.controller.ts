import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Patch, Delete } from '@nestjs/common';
import { TagsService } from './tags.service';
import { Tag } from './tag/tag.interface';

@Controller('tags')
export class TagsController {
    constructor(private tagsService: TagsService) {}

    @Get()
    getAll(){
        return this.tagsService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id:number) {
        return this.tagsService.getById(id)
    }
    
    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body) {
        return this.tagsService.insert(body)
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
