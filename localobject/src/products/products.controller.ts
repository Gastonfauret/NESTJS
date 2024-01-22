import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { Product } from './interfaces/products/product.interface';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto/product.dto';
import { ProductPatchDto } from './dto/product-patch.dto/product-patch.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }
    @Get()
    getAllProducts(): Product[] {
        return this.productsService.getAll();
    }

    @Get(':id')
    async find(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.getId(id);
    }

    @Post()
    createProduct(@Body() productDto: ProductDto) {
        return this.productsService.insert(productDto);
    }

    @Post(':id')
    async update(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Body() body) {
        return this.productsService.update(id, body);
    }

    @Patch(':id')
    async patch(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: ProductPatchDto,
    ) {
        return this.productsService.patch(id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number) {
        this.productsService.delete(id);
    }
}

//Pagina 86 - VAlidaciones Avanzadas en Nest
