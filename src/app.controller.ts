import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { BookService } from './book.service';

@Controller('/book')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private bookService: BookService,
  ) {}

  @Get('/')
  findAll() {
    return this.appService.findAll();
  }

  @Get('/:id')
  byId(@Param("id")id:number) {
    return this.appService.byId(id);
  }

  @Post('/')
  addUser(@Req() req: Request) {
    console.log('body data', req.body);
    return this.appService.add(req.body.name);
  }

  @Delete('/:id')
  async deleteBook(@Param("id")id:number) {
    // console.log('Deleting book with id:', id, 'and name:',)
    return this.appService.delet(id);
  }
  

  // @Delete('/')
  // deleteBook(@Req() req: Request) {
  //   console.log('Deleting book with id:', req.body.id);
  //   return this.bookService.req(req.body);
  // }

  

  @Put('/:id')
  updateBook(@Body() book : any, @Param("id") id:number) {
    return this.appService.updateUser(book, id);
  }
}
