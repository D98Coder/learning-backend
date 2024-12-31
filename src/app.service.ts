import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
// import { BookService } from './book.service';

// import { book } from './data/book.dto';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async add(name: string): Promise<User>{

  const doc = this.repository.create({name})
  const newDoc = await this.repository.save(doc)
  return newDoc
  }

  async delet(id: number): Promise<void> {
     await this.repository.delete(id);
      
  }


  async findAll(): Promise<User[]>{
    return await this.repository.find()
  }

  async byId(id:number): Promise<User>{
    return await this.repository.findOneBy({id})
  }

  async deleteBook(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async updateUser(book : any, id:number){
  const updatedData = await this.repository.update(id,book)
  if( !updatedData)
  throw new Error("data not found")
return updatedData
}
}
