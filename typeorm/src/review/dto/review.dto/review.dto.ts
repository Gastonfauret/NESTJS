import { IsInt, IsString, Min } from "class-validator";

export class ReviewDto {

    @IsInt({message: "El Campo 'id' debe ser un numero entero"})
    @Min(0, {message: "El campo 'id' debe un valor mayor a 1"})
    id: number;

    @IsString({message: "El campo 'userName' debe ser un String"})
    userName: string;

    @IsString({message: "El campo 'userName' debe ser un String"})
    review: string;

    @IsInt({message: "El Campo 'valoration' debe ser un numero entero"})
    @Min(0, {message: "El campo 'valoration' debe ser un valor mayor a 1"})
    valoration: number;

    @IsInt({message: "El Campo 'productId' debe ser un numero entero"})
    @Min(0, {message: "El campo 'productId' debe un valor mayor a 1"})
    productId: number;
}
