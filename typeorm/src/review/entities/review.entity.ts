import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../product/entities/product.entity";

@Entity('reviews')

export class Review {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 50 })
    userName: string;

    @Column('varchar', { length: 250 })
    review: string;

    @Column('int', { width: 1 })
    valoration: number;

    @Column('int', { width: 11 })
    productId: number;

    @ManyToOne(() => Product, product => product.reviews)
    product: Product
}