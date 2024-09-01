import { Body, Controller, Get, NotFoundException, Param, Redirect, Post, Put, Res, Delete } from "@nestjs/common";
import { CreateLinkDto } from "./dtos/create-link.dto";
import { LinksService } from "./links.service";
import { UpdateLinkDtop } from "./dtos/update-link.dto";

@Controller("links")
export class LinksController {
    constructor(private readonly linkService: LinksService) {}

    @Post()
    async create(@Body() data: CreateLinkDto) {
        return this.linkService.create(data)
    }

    @Get(":id/redirect")
    async redirect(@Param('id') id: string, @Res() res) {
        let target = await this.linkService.find(id)

        if (! (target)) {
            throw new NotFoundException(`The id ${id} was not found`)
        }

        return res.redirect(target.targetUrl)
    }

    @Get(":id")
    async find(@Param('id') id: string) {
        return this.linkService.find(id)
    }

    @Get()
    async findAll() {
        return this.linkService.findAll()
    }

    @Delete(":id")
    async delete(@Param('id') id: string) {
        if(! (await this.exists(id))) {
            throw new NotFoundException(`The ${id} was not found`)
        }

        return this.linkService.delete(id)
    }

    @Put(":id")
    async update(@Body() data: UpdateLinkDtop, @Param('id') id: string) {
        if(! (await this.exists(id))) {
            throw new NotFoundException(`The ${id} was not found`)
        }

        return this.linkService.update(data, id)
    }

    async exists(id: string) {
        return this.linkService.find(id)
    }
}
