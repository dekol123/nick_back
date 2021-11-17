import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Arrivals } from 'src/emergencyCall/entities/arrivals.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('animalOwner')
export class RegisterOfCards {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    firstName: string;

    @ApiProperty()
    @Column()
    surname: string;

    @ApiProperty()
    @Column()
    lastName: string;

    @ApiProperty()
    @Column()
    registration: string;

    @OneToMany(() => Arrivals, arrivals => arrivals.registerOfCards)
    arrivals: Arrivals[];

    @Column({ nullable: true })
    @ApiProperty()
    arrivalsId: number;
}