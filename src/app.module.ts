import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ProfileModule } from "./profile/profile.module";
import config from './config/config';

@Module({
    imports: [
        ProfileModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config]
        })
    ]
})
export class AppModule {}