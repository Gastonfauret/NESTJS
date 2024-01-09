import { IsInt, IsString, Min } from "class-validator";

export class ProductDto {
    @IsString({message:"El campo 'name' debe ser un String"})
    name: string;

    @IsString({message:"El campo 'description' debe ser un String"})
    description: string;

    @IsInt({message:"El campo 'stock' debe ser un numero entero"})
    @Min(0, {message:"El stock debe ser 0 o un valor mayor"})
    stock: number;
}
