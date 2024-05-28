import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/employee.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
   
    EmployeeModule 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
