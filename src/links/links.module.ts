import { Module } from "@nestjs/common";
import { LinksController } from "./links.controller";
import { LinksService } from "./links.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [LinksController],
    providers: [LinksService],
    exports: [],
})

export class LinksModule {}
