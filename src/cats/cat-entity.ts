import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'cats' })
export class Cat {
  @PrimaryGeneratedColumn('uuid',{ name: 'cat_id'})
  public catId: string;

  @Column()
  public name: string;

  @Column()
  public color: string;

  @Column()
  public breed: string;

  @Column()
  public age: number;

  @Column()
  public price: number;


  @Column({ nullable: true })
  public img?: string;

  @Column({ name: 'is_booked' })
  public isBooked: boolean;
}
