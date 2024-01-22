import { Controller, Get, Param, ParseIntPipe, Post, Body, Delete, HttpCode, HttpStatus, Res, BadRequestException, NotFoundException } from '@nestjs/common';
import { JsonApiService } from './json-api.service';
import { JsonApiDto } from './dto/json-api.dto/json-api.dto';
import { JsonApi } from './interfaces/json-api/json-api.interface';
import { Response } from 'express';

@Controller('users')
export class JsonApiController {
    constructor(private readonly jsonApiService: JsonApiService) { }

    @Get()
    async getUsers() {
        try {
            const users = await this.jsonApiService.getUsers();
            return users;
        } catch (error) {
            return error
        }
    }

    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number) {
        return this.jsonApiService.getUsersById(id)
    }

    @Post()
    async create(@Res() res: Response, @Body() user: JsonApiDto) {
        try {
            const serviceResponse = await this.jsonApiService.create(user);
            return res
        } catch (error) {
            throw new BadRequestException('Data not allowed' + error);
        }
    }
    

    
}
