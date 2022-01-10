import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async getAll() {
    return await this.catsService.getAll();
  }

  @Get('/get_one/:id')
  async getOne(@Param('id') id: number) {
    return await this.catsService.getOne(id);
  }

  @Get('/booked')
  async getBooked() {
    return await this.catsService.getBooked();
  }

  @Get('/not_booked')
  async getNotBooked() {
    return await this.catsService.getNotBooked();
  }

  @Post('/create')
  async create(@Body() dto: CreateCatDto) {
    await this.catsService.create(dto);
  }

  @Post('/upload_img/:id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImg(@Param('id') id: number, @UploadedFile() file: Express.Multer.File) {
    //console.log(file);
    await this.catsService.uploadImg(id, file.buffer, file.originalname);
  }

  @Delete('/remove/:id')
  async delete(@Param('id') id: number) {
    await this.catsService.remove(id);
  }

  @Put('/update/:id')
  async update(@Body() dto: UpdateCatDto, @Param('id') id) {
    await this.catsService.update(dto, id);
  }

  @Put('/book/:id')
  async book(@Param('id') id: number) {
    await this.catsService.book(id);
  }

  @Put('/unbook/:id')
  async unbook(@Param('id') id: number) {
    await this.catsService.unbook(id);
  }
}
