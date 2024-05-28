import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches, IsDate, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: 'First name is required' })
  @IsString()
  @Length(2, 30, { message: 'First name must be between 2 and 30 characters' })
  firstName: string;

  @Column()
  @IsNotEmpty({ message: 'Last name is required' })
  @IsString()
  @Length(2, 30, { message: 'Last name must be between 2 and 30 characters' })
  lastName: string;

  @Column({ unique: true })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @Column()
  @IsNotEmpty({ message: 'Password is required' })
  @Length(8, 50, { message: 'Password must be between 8 and 50 characters' })
  @Matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, {
    message: 'Password too weak. It should contain at least one uppercase letter, one lowercase letter, and one number.',
  })
  password: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  @Length(10, 15, { message: 'Phone number must be between 10 and 15 characters' })
  phone: string;

  @Column({ nullable: true })
  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'Date of birth must be a valid date' })
  dateOfBirth: Date;

  @Column()
  @IsNotEmpty({ message: 'Salary is required' })
  @IsNumber()
  salary: number;

  @Column()
  @IsNotEmpty({ message: 'Position is required' })
  @IsString()
  @Length(2, 50, { message: 'Position must be between 2 and 50 characters' })
  position: string;

  @Column({ default: true })
  isActive: boolean;
}
