import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { SchoolService } from "./school.service";
import { School } from "@prisma/client";
import { SchoolDto, USchoolDto } from "../dto/school.dto";

@Controller("school")
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Get()
  async getSchools(): Promise<School[]> {
    return this.schoolService.getSchools();
  }

  @Get(":id")
  async getSchool(@Param("id") id: string): Promise<School> {
    return this.schoolService.getSchool({ id: Number(id) });
  }

  @Post()
  async createSchool(@Body() school: SchoolDto): Promise<School> {
    return this.schoolService.createSchool({ school });
  }

  @Patch(":id")
  async updateSchool(
    @Param("id") id: string,
    @Body() school: USchoolDto,
  ): Promise<School> {
    return this.schoolService.updateSchool({ id: Number(id), school });
  }

  @Delete(":id")
  async deleteSchool(@Param("id") id: string): Promise<School> {
    return this.schoolService.deleteSchool({ id: Number(id) });
  }
}
