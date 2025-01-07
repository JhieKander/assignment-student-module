import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module'; // Import the StudentModule
import { Student } from './student/student.entity'; // Import the Student entity (this will be used by TypeORM)

@Module({
  imports: [
    // Configure TypeORM with MySQL and other necessary options
    TypeOrmModule.forRoot({
      type: 'mysql',             // Database type
      host: 'localhost',         // Database host (adjust as per your MySQL setup)
      port: 3306,                // MySQL default port
      username: 'root',          // Your MySQL username
      password: '@Admin123',      // Your MySQL password
      database: 'student',    // The database name to connect to
      entities: [Student],       // Define the entities to be used by TypeORM
      synchronize: true,         // Automatically sync the DB schema with entities (set to false in production)
    }),
    StudentModule,              // Add your Student module here
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
