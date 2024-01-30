import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Review } from "../../review/entities/review.entity";
import { Size } from "./size.entity";
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
    
    @ManyToMany(() => Size, (size) => size.products, {cascade: true})
    @JoinTable()
    sizes: Size[];
}
