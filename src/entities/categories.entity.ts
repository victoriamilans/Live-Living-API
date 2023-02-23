import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Addresses from "./adresses.entity";
import Properties from "./properties.entity";

@Entity("categories")
class Categories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Properties, (property) => property.category)
  properties: Properties[];
}

export default Categories;
