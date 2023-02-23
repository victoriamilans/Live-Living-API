import { getRounds, hash, hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import SchedulesUsersProperties from "./scheduleUserProperties.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  isAdm: boolean;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await hash(this.password, 10);
    }
  }

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(
    () => SchedulesUsersProperties,
    (schedules) => schedules.properties
  )
  properties: SchedulesUsersProperties[];
}

export default User;
