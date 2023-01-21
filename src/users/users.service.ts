import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const user: User = {
      id: '4',
      name: createUserDto.name,
    };
    return user;
  }

  findAll() {
    const users: User[] = [
      {
        id: '1',
        name: 'User1',
      },
      {
        id: '2',
        name: 'User2',
      },
      {
        id: '3',
        name: 'User3',
      },
    ];

    return users;
  }

  findOne(id: string) {
    const users: User[] = [
      {
        id: '1',
        name: 'User1',
      },
      {
        id: '2',
        name: 'User2',
      },
      {
        id: '3',
        name: 'User3',
      },
    ];

    const user: User = users.find((u) => u.id === id);

    if (user.id === undefined) {
      throw new Error("user doesn't exists");
    }

    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
