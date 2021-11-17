import { CatalogueOfServices } from 'src/listOfServices/entities/listOfServices.entity';
import { Patients } from 'src/animals/entities/animals.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity('vetPersonnel')
export class MedicalPersonnel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    surname: string;

    @Column()
    lastName: string;

    @Column()
    address: string;

    @Column()
    position: string;

    @ManyToMany(type => CatalogueOfServices,  catalogueOfServices => catalogueOfServices.medicalPersonnels)
    catalogueOfServices: CatalogueOfServices[];

    @ManyToMany(type => Patients,  patients => patients.medicalPersonnel)
    patients: Patients[];
}