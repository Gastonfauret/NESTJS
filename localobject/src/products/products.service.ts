import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/products/product.interface';
import { ProductPatchDto } from './dto/product-patch.dto/product-patch.dto';
@Injectable()
export class ProductsService {
    private products: Product[] = [
        {
            id: 1,
            name: 'Vela aromática',
            description: 'Esta vela lanza ricos olores',
        },
        {
            id: 2,
            name: 'Marco de fotos pequeño',
            description: 'Marco ideal para tus fotos 10x15',
        }
    ];
    getAll(): Product[] {
        return this.products;
    }
    getId(id: number): Product {
        const product = this.products.find((item: Product) => item.id == id);
        if (product) {
            return product
        } else {
            throw new NotFoundException(`The product with the id ${id} wasn't found`, 'Product Not Found')
        }
    }
    insert(body: any) {
        this.products = [
            ...this.products,
            {
                id: this.lastId() + 1,
                name: body.name,
                description: body.description,
            }
        ];
    }
    update(id: number, body: any) {
        let product: Product = {
            id,
            name: body.name,
            description: body.description,
        }
        this.products = this.products.map((item: Product) => {
            return item.id == id ? product : item;
        });
    }

    patch(id: number, body: ProductPatchDto) {
        let previousProduct = this.getId(id);
        let product: Product = {
            ...previousProduct,
            ...body
        }
        this.products = this.products.map((item: Product) => {
            return item.id == id ? product : item;
        });
    }

    delete(id: number) {
        const product = this.products.find((item: Product) => item.id == id);
        if (product) {
            this.products = this.products.filter((item: Product) => item.id != id);
        } else {
            throw new HttpException(`The product with the id numer '${id}' doesn't exist.`, HttpStatus.NOT_FOUND)
        }
    }

    private lastId(): number {
        return this.products[this.products.length - 1].id;
    }
}