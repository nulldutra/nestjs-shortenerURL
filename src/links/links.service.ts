import { Injectable } from "@nestjs/common";
import { CreateLinkDto } from "./dtos/create-link.dto";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateLinkDtop } from "./dtos/update-link.dto";

@Injectable()
export class LinksService {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateLinkDto) {
        return this.prisma.links.create({
            data: data,
            select: {
                id: true,
                targetUrl: true,
            }
        })
    }

    async find(id: string) {
        return this.prisma.links.findUnique({
            where: {
                id: id
            }
        })
    }

    async findAll() {
        return this.prisma.links.findMany()
    }

    async delete(id: string) {
        return this.prisma.links.delete({
            where: {
                id: id
            },
            select: {
                id: true,
                targetUrl: true,
                createdAt: true
            }
        })
    }

    async update(data: UpdateLinkDtop, id: string) {
        return this.prisma.links.update({
            data: data,
            where: {
                id: id
            },
            select: {
                id: true,
                targetUrl: true,
                updatedAt: true
            }
        })
    }
}
