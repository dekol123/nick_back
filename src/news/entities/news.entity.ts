import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vet_news')
export class News{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    content: string
}