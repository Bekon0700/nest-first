import { IsString, IsNumber } from "class-validator";

export class CreateProfileDto{
    @IsString()
    name: string;

    @IsNumber()
    age: Number;

    @IsString()
    phone: String;
}