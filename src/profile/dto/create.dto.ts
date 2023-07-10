import { IsString, IsNumber, IsArray, IsEnum } from "class-validator";

export enum Gender {
    Male = 'Male',
    Female = 'Female'
}

export class CreateProfileDto{
    @IsString()
    name: string;

    @IsNumber()
    age: Number;

    @IsString()
    phone: String;

    @IsArray()
    hobby: String[]

    @IsEnum(Gender)
    gender: Gender;
}