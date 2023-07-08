import { HttpStatus, Injectable } from "@nestjs/common";
import { Response } from "express";

@Injectable()
export class ProfileService{

    getAll(res: Response) {
        res.status(HttpStatus.OK)
        return {
            status: 'success',
            message: 'From Route'
        }
    }

    create(createProfileDto) {
        return createProfileDto;
    }

    update() {
        return 'from update'
    }
}