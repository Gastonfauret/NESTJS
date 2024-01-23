import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductDto } from './dto/product.dto/product.dto';


@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private productsRepository: Repository<Product>) { }

    getAll() {
        return this.productsRepository.find()
    }

    getId(id: number): Promise<Product> {
        return this.productsRepository.findOne(id);
    }

    async insert(body: ProductDto) {
        const product = this.productsRepository.create(body);
        await this.productsRepository.save(product);
        return product;
    }

    async update(id: number, body: any) {
        const userProduct = {
            id, ...body
        }
        const product = await this.productsRepository.preload(userProduct)
        if (product) {
            return this.productsRepository.save(product)
        }
        throw new NotFoundException(`No se encuentra el producto con el id ${id}`);
    }

    async delete(id: number) {
        const product = await this.productsRepository.findOne(id)
        if(product) {
            return this.productsRepository.remove(product)
        }
        throw new NotFoundException(`No se encuentra el producto con el id ${id}`)
    }

}
