import { ApiProperty } from '@nestjs/swagger';
import { Brigade } from 'src/brigade/entities/brigade.entity';
import { RegisterOfCards } from 'src/register-of-cards/entities/register-of-cards.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity('emergencyCall')
export class Arrivals {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    reason: string;  

    @ApiProperty()
    @ManyToOne(() => Brigade, brigade => brigade.arrivals)
    brigades: Brigade;

    @Column({ nullable: true })
    @ApiProperty()
    brigadesId?: number;

    @ApiProperty()
    @ManyToOne(() => RegisterOfCards, registerOfCards => registerOfCards.arrivals)
    registerOfCards: RegisterOfCards;

    @Column({ nullable: true })
    @ApiProperty()
    registerOfCardsId?: number;
}