import { Query, Resolver } from '@nestjs/graphql';
import {CatsService} from "./cats.service";

export class CatsResolver{
    constructor(private readonly catsService: CatsService) {}
}