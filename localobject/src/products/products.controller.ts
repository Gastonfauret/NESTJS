import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get()
    getProducts(): string {
        return 'Main Page'
    }

    @Get('hot')
    getHelloProducts(): string {
        return 'Secundary Page'
    }

    // @Get(':id')
    // find(@Param('id') id: number) {
    //     return `Sorry, We aren't have a product with the id ${id}. Please come back later`;
    // }

    // @Get(':id/:size')
    // findWithSize(@Param('id') id: number, @Param('size') size: string ) {
    //     return `On this page we get the id ${id} and the size of the product ${size}`
    // }

    @Get(':id')
    find(@Res() response, @Param('id') id: number) {
        if(id < 100) {
            return response.status(HttpStatus.OK).send(`Page product ${id}`); 
        } else { return response.status(HttpStatus.NOT_FOUND).send('Product not found.')}
    }

    @Post()
    @HttpCode(HttpStatus.NOT_FOUND)
    createProduct(@Body('name') name: string,
    @Body('description') description: string) {
        return `The Product "${name}" with description "${description}" was created sucessfully`
    }
};