import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductDto } from './dto/product.dto/product.dto';
import { Size } from './entities/size.entity';


@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private productsRepository: Repository<Product>,
        @InjectRepository(Size) private sizesRepository: Repository<Size>) { }

    getAll() {
        return this.productsRepository.find()
    }

    getId(id: number): Promise<Product> {
        return this.productsRepository.findOne({ where: { id } });
    }

    async insert(body: ProductDto) {
        const sizes = await Promise.all(body.sizes.map(size => this.selectOrCreateSize(size)));
        const product = this.productsRepository.create(
            { ...body, sizes }
        );
        await this.productsRepository.save(product);
        return product;
    }

    private async selectOrCreateSize(size: string): Promise<Size> {
        let sizeEntity = await this.sizesRepository.findOne({ size });
        if (sizeEntity) {
            return sizeEntity;
        }
        return this.sizesRepository.create({ size });
    }

    async update(id: number, body: ProductDto): Promise<Product> {
        const sizes = body.sizes && await Promise.all(body.sizes.map(size => this.selectOrCreateSize(size)));
        let inputProduct = {
            id,
            ...body,
            sizes,
        }
        const product = await this.productsRepository.preload(inputProduct);

        if (product) {
            return this.productsRepository.save(product);
        }
        throw new NotFoundException(`No he encontrado el producto con id ${id}`);
    }



    async delete(id: number) {
        const product = await this.productsRepository.findOne({ where: { id } })
        if (product) {
            return this.productsRepository.remove(product)
        }
        throw new NotFoundException(`No se encuentra el producto con el id ${id}`)
    }

}
