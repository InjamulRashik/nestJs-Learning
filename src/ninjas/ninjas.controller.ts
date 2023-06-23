import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

//Decorator Types Used Here [Get,Post,Put,Delete,Param,Query,Body]

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) {} //Dependecy Injection
  // GET/ninjas?weapon=fast --> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    // const service = new NinjasService();
    // console.log(service);
    return this.ninjaService.getNinjas(weapon);
  }

  // GET/ninjas/:id --> {...}
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return this.ninjaService.getNinja(+id);
  }
  //POST /ninjas
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjaService.createNinja(createNinjaDto);
  }
  //PUT-PATCH /ninjas/:id---> {...}
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjaService.updateNinja(+id, updateNinjaDto);
  }
  // DELETE /ninjas/:id
  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return this.ninjaService.removeNinja(+id);
  }
}
