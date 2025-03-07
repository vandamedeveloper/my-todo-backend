import { CreateDateColumn, OneToMany } from 'typeorm';
import { UpdateDateColumn } from 'typeorm';
import { Column } from 'typeorm';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './Task';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Array<Task>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
