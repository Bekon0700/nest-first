import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Response } from "express";
import { ProfileService } from "./profile.service";
import { CreateProfileDto } from "./dto/create.dto";

@Controller('/profile')
export class ProfileController {
    constructor(private profileService: ProfileService){}

    @Get('/all')
    getProfiles(@Res({passthrough: true}) res: Response) {
        return this.profileService.getAll(res)
    }

    @Post()
    async createProfile(@Body() createprofileDto: CreateProfileDto, @Res() res: Response,): Promise<any> {
        return this.profileService.create(createprofileDto, res)
    }
}