import { IsString, IsInt, Min} from 'class-validator';

export class JsonApiDto {
    @IsInt()
    @Min(0)
    id: number;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsInt()
    @Min(0)
    age: number;

    @IsString()
    email:string;

    @IsString()
    phone: string;

    @IsString()
    address: string;

    @IsString()
    city: string;

    @IsString()
    state: string;

    @IsString()
    postalCode: string
}
