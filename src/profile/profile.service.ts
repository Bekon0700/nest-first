import { HttpStatus, Injectable } from "@nestjs/common";
import { Response } from "express";
import { CreateProfileDto } from "./dto/create.dto";

@Injectable()
export class ProfileService{

    getAll(res: Response) {
        res.status(HttpStatus.OK)
        return {
            status: 'success',
            message: 'From Route'
        }
    }

    create(createProfileDto: CreateProfileDto) {
        console.log(typeof createProfileDto.gender)
        return createProfileDto;
    }

    update() {
        return 'from update'
    }
}