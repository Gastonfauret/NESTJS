import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Review } from "../../review/entities/review.entity";

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 50 })
    name: string;

    @Column('varchar', { length: 250 })
    description: string;

    @Column('int', { width: 3 })
    stock: number;

    @OneToMany(() => Review, review => review.product)
    reviews: Review[];
}
