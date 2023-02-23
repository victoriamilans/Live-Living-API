import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Properties from "./properties.entity";
import User from "./user.entity";

@Entity("schedules_user_properties")
class SchedulesUsersProperties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => User, { eager: true })
  user: User;

  @ManyToOne(() => Properties)
  properties: Properties;
}

export default SchedulesUsersProperties;
