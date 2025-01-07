import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async createStudent(student: Student): Promise<Student> {
    return this.studentRepository.save(student);
  }

  async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async getStudentById(id: number): Promise<Student> {
    return this.studentRepository.findOneBy({ id });
  }

  async updateStudent(id: number, student: Partial<Student>): Promise<Student> {
    await this.studentRepository.update(id, student);
    return this.getStudentById(id);
  }

  async deleteStudent(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}