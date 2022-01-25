import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'cat' })
@Entity({ name: 'cats' })
export class Cat {
  @Field()
  @PrimaryGeneratedColumn('uuid',{ name: 'cat_id'})
  public catId: string;

  @Field()
  @Column()
  public name: string;

  @Field()
  @Column()
  public color: string;

  @Field()
  @Column()
  public breed: string;

  @Field()
  @Column()
  public age: number;

  @Field()
  @Column()
  public price: number;

  @Field()
  @Column({ nullable: true })
  public img?: string;

  @Field()
  @Column({ name: 'is_booked' })
  public isBooked: boolean;
}
