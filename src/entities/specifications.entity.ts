import { BaseEntity } from "../shares/base.entity";
import { Column, Entity } from "typeorm";

@Entity('specifications')
export class Specifications extends BaseEntity{
    @Column({nullable:true})
    temperature:number;

    @Column({nullable:true,name:'co_concentration'})
    COConcentration:number;

    @Column({nullable:true,name:'lpg_gas_concentration'})
    LPGGasConcentration:number;
}