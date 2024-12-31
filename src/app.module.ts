import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookService } from './book.service';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username:"postgres",
    password:"root",
    database:"restaurant",
    synchronize:true,
    entities:[User]
  }), TypeOrmModule.forFeature([User])],
  
  controllers: [AppController],
  providers: [AppService, BookService],
})
export class AppModule {}
