import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Gender } from "../dto/create.dto";

@Schema()
export class Profile{
    @Prop({required: true, trim: true, unique: true})
    name: String;

    @Prop()
    age: Number;
    
    @Prop()
    phone: String;
    
    @Prop()
    gender: Gender;
    
    @Prop([String])
    hobby: String[];
}

export const ProfileSchema = SchemaFactory.createForClass(Profile)