import { Get, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Tag, stock } from '../tags/tag/tag.interface';
import { NotFoundException } from '@nestjs/common';
import { TagDto } from './dto/tag.dto/tag.dto';

@Injectable()
export class TagsService {
    private productTag: Tag[] = [
        {
            id: 1,
            item: 'Electronic',
            type: 'Electronic',
            code: 12345,
            brand: 'Sanyo',
            stock: stock.stock
        },
        {
            id: 2,
            item: 'Food',
            type: 'Legums',
            code: 23456,
            brand: 'Marolio',
            stock: stock.stock
        },
        {
            id: 3,
            item: 'Drink',
            type: 'Soda',
            code: 34567,
            brand: 'Coca Cola',
            stock: stock.stock
        },
        {
            id: 4,
            item: 'Food',
            type: 'Cookies',
            code: 45678,
            brand: 'Granix',
            stock: stock.noStock
        },
        {
            id: 5,
            item: 'Toy',
            type: 'Action Figure',
            code: 56789,
            brand: 'Funko Pop',
            stock: stock.ordered
        }
    ];

    getAll() {
        return this.productTag
    }

    getById(id: number) {
        const foundTag = this.productTag.find((element: Tag) => element.id == id)
        if (foundTag) {
            return foundTag
        } else {
            throw new NotFoundException(`Tag with the ${id} wasn't found`, 'Product Not Found')
        }
    }

    insert(body: TagDto): Tag {
        const newTag: Tag = {
            id: this.productTag.length + 1,
            item: body.item,
            type: body.type,
            code: body.code,
            brand: body.brand,
            stock: body.stock
        };

        this.productTag = [...this.productTag, newTag];
        return newTag; 
    }

    update(id: number, body: any) {
        const tagProduct: Tag = {
            id: this.productTag.length + 1,
            item: body.item,
            type: body.type,
            code: body.code,
            brand: body.brand,
            stock: body.stock
        }
        this.productTag = this.productTag.map((item: Tag) => { return item.id == id ? tagProduct : item })
    }

    delete(id: number) {
        const foundTag = this.productTag.find((item: Tag) => item.id == id)
        if (foundTag) {
            return this.productTag = this.productTag.filter((item: Tag) => item.id != id)
        } else {
            throw new HttpException(`The id '${id}' wasn't found`, HttpStatus.NOT_FOUND)
        }
    }
}
