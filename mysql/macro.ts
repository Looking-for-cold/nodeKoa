import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class macro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    type:number;

}
