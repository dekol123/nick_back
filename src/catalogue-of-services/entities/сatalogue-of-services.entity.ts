import { ApiProperty } from '@nestjs/swagger';
import { ComplexOfServices } from 'src/complex-of-services/entities/complex-of-services.entity';
import { MedicalPersonnel } from 'src/medical-personnel/entities/medical-personnel.entity';
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