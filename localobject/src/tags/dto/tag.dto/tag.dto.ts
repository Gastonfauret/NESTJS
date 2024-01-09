import { stock } from "src/tags/tag/tag.interface";
import { IsString, IsInt, IsEnum } from "class-validator";

export class TagDto {
    @IsString()
    item: string;
    
    @IsString()
    type: string;

    @IsInt()
    code: number;

    @IsString()
    brand: string;

    @IsEnum(stock)
    stock: stock
}
