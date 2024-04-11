import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { School } from "@prisma/client";
import { SchoolDto, USchoolDto } from "../dto/school.dto";

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}

  async getSchools(): Promise<School[]> {
    return this.prisma.school.findMany();
  }

  async getSchool({ id }: { id: number }): Promise<School> {
    return this.prisma.school.findUnique({
      where: { id },
    });
  }

  async createSchool({ school }: { school: SchoolDto }): Promise<School> {
    return this.prisma.school.create({
      data: school,
    });
  }

  async updateSchool({
    id,
    school,
  }: {
    id: number;
    school: USchoolDto;
  }): Promise<School> {
    return this.prisma.school.update({
      where: { id: id },
      data: school,
    });
  }

  async deleteSchool({ id }: { id: number }): Promise<School> {
    return this.prisma.school.delete({
      where: { id },
    });
  }
}
