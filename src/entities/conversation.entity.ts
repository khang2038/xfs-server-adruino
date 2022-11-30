import { BaseEntity } from "../shares/base.entity";
import { Column, Entity } from "typeorm";

@Entity('conversations')
export class Conversation extends BaseEntity{
  @Column()
  member1:string

  @Column()
  member2:string
}