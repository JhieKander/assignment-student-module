import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() student: Student) {
    return this.studentService.createStudent(student);
  }

  @Get()
  async getStudents() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  async getStudent(@Param('id') id: number) {
    return this.studentService.getStudentById(id);
  }

  @Put(':id')
  async updateStudent(@Param('id') id: number, @Body() student: Partial<Student>) {
    return this.studentService.updateStudent(id, student);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: number) {
    return this.studentService.deleteStudent(id);
  }
}