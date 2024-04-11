import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { SchoolModule } from "./school/school.module";

@Module({
  imports: [PrismaModule, SchoolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
