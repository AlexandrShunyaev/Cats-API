import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { S3 } from 'aws-sdk';
import { v4 as uuid } from 'uuid';
import { Repository } from "typeorm";
import { Cat } from "./cat-entity";

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat) private catsRepository: Repository<Cat>,
  ) {}

  async getAll() {
    return await this.catsRepository.find({ order: { catId: 'ASC' } });
  }

  async getOne(id: string) {
    const cat = await this.catsRepository.findOne(id);

    if (!cat) {
      throw new HttpException('There is no such cat!', HttpStatus.NOT_FOUND);
    }

    return cat;
  }

  async getBooked() {
    return await this.catsRepository.find({
      where: { isBooked: true },
      order: { catId: 'ASC' },
    });
  }

  async getNotBooked() {
    return await this.catsRepository.find({
      where: { isBooked: false },
      order: { catId: 'ASC' },
    });
  }

  async create(dto: CreateCatDto) {
    const cat = this.catsRepository.create(dto);
    await this.catsRepository.save(cat);
  }

  async remove(id: string) {
    await this.catsRepository.delete(id);
  }

  async update(dto: UpdateCatDto, id: string) {
    const cat = await this.catsRepository.findOne(id);

    if (!cat) {
      throw new HttpException('There is no such cat!', HttpStatus.NOT_FOUND);
    }

    const updatedCat = this.catsRepository.create(dto);
    this.catsRepository.merge(cat, updatedCat);
    await this.catsRepository.save(cat);
  }

  async book(id: string) {
    const cat = await this.catsRepository.findOne(id);

    if (cat) {
      if (!cat.isBooked) {
        await this.catsRepository.update(id, { isBooked: true });
      } else {
        return 'The cat is already booked!';
      }
    } else {
      throw new HttpException('There is no such cat!', HttpStatus.NOT_FOUND);
    }
  }

  async unbook(id: string) {
    const cat = await this.catsRepository.findOne(id);

    if (cat) {
      if (cat.isBooked) {
        await this.catsRepository.update(id, { isBooked: false });
      } else {
        return 'The cat has not been booked yet!';
      }
    } else {
      throw new HttpException('There is no such cat!', HttpStatus.NOT_FOUND);
    }
  }

  async uploadImg(id: string, dataBuffer: Buffer, filename: string) {
    const cat = await this.catsRepository.findOne(id);
    if (cat) {
      const s3 = new S3();
      const uploadResult = await s3
        .upload({
          Bucket: process.env.AWS_PUBLIC_BUCKET_NAME,
          Body: dataBuffer,
          Key: `${uuid()}-${filename}`,
        })
        .promise();

      await this.catsRepository.update(id, { img: uploadResult.Key });
    } else {
      throw new HttpException('There is no such cat!', HttpStatus.NOT_FOUND);
    }
    return;
  }
}
