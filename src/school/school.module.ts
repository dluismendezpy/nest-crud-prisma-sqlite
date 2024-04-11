import { Module } from "@nestjs/common";
import { SchoolService } from "./school.service";
import { SchoolController } from "./school.controller";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  providers: [SchoolService],
  controllers: [SchoolController],
  imports: [PrismaModule],
})
export class SchoolModule {}
