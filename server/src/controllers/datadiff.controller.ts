import { Controller, Get, Post, Query, Body } from '@nestjs/common';

import { DatediffService } from './../services/datediff.service';

@Controller('datediff')
export class DatadiffController {
  constructor(public datediffService: DatediffService) {}

  @Get()
  getDateDiff(
    @Query('birthday') birthday: string,
  ) {
    //return `Falta ${birthday} días para mi cumpleaños`;
    return this.datediffService.getDaysUntilMyBirthday(birthday)
  }
}
