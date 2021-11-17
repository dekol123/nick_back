import { ApiProperty } from '@nestjs/swagger';
import { ComplexOfServices } from 'src/complexServices/entities/complexServices.entity';
import { MedicalPersonnel } from 'src/vetPersonnel/entities/medical-personnel.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('listOfServices')
export class CatalogueOfServices{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    price: number;

    @ApiProperty()
    @Column()
    serviceDescription: string;

    @ApiProperty()
    @ManyToMany(type => MedicalPersonnel,  medicalPersonnel => medicalPersonnel.catalogueOfServices)
    @JoinTable()
    medicalPersonnels: MedicalPersonnel[];

    @ApiProperty()
    @ManyToMany(type => ComplexOfServices,  complexOfServices => complexOfServices.catalogueOfServices)
    @JoinTable()    
    complexOfServices: ComplexOfServices[];    

}