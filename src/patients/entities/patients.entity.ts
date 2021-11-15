import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { MedicalPersonnel } from 'src/medical-personnel/entities/medical-personnel.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('animals')
export class Patients {
    @PrimaryGeneratedColumn()    
    id: number;

    @ApiProperty()
    @Column()
    type: string;

    @ApiProperty()
    @Column()
    male: string;

    @ManyToMany(type => MedicalPersonnel, medicalPersonnel => medicalPersonnel.patients)
    @JoinTable()
    medicalPersonnel: MedicalPersonnel[];    
}
