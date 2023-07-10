import { HttpStatus, Injectable } from "@nestjs/common";
import { Response } from "express";
import { CreateProfileDto } from "./dto/create.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Profile } from "./model/profile.schema";
import { Model } from "mongoose";

@Injectable()
export class ProfileService{
    constructor( @InjectModel(Profile.name) private profileModel: Model<Profile> ){}

    getAll(res: Response) {
        res.status(HttpStatus.OK)
        return {
            status: 'success',
            message: 'From Route'
        }
    }

    async create(createProfileDto: CreateProfileDto, res: Response): Promise<any> {
        console.log(createProfileDto)
        try{
            const profile = await this.profileModel.create(createProfileDto);
            console.log(profile)
            return res.status(201).json({
                status: 'success',
                profile
            })
        }catch(err) {
            res.status(HttpStatus.BAD_REQUEST).json({
                message: err
            });
        }
    }

    update() {
        return 'from update'
    }
}