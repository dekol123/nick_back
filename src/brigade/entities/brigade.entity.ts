import { Arrivals } from 'src/arrivals/entities/arrivals.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { BrigadeMedicalPersonnel } from 'src/brigade-medical-personnel/entities/brigade-medical-personnel.entity';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@Entity('emergencyCallGroup')
export class Brigade {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    nickName: string;    

    @OneToMany(() => Arrivals, arrival => arrival.brigades)
    arrivals: Arrivals[];

    @OneToMany(() => BrigadeMedicalPersonnel, brigadeMedicalPersonnel => brigadeMedicalPersonnel.brigade)
    brigadeMedicalPersonnels: BrigadeMedicalPersonnel[];    
}