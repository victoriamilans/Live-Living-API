import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Addresses from "./adresses.entity";
import Categories from "./categories.entity";
import SchedulesUsersProperties from "./scheduleUserProperties.entity";

@Entity("properties")
class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false, nullable: true })
  sold: boolean;

  @Column("decimal", { precision: 12, scale: 2 })
  value: number;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addresses)
  @JoinColumn()
  address: Addresses;

  @ManyToOne(() => Categories, { eager: true, nullable: true })
  category: Categories;

  @OneToMany(
    () => SchedulesUsersProperties,
    (schedules) => schedules.properties
  )
  schedules: SchedulesUsersProperties[];
}

export default Properties;
