import { Test, TestingModule } from '@nestjs/testing';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('controller tests', () => {
    it('should return users', () => {
      expect(controller.findAll()).toBeInstanceOf(Array<User>);
    });

    it('should return one user when pass an id', () => {
      expect(controller.findOne('2').id).toBe('2');
      expect(controller.findOne('2').name).toBe('User2');
    });

    it('should not return a user when pass an invalid id', () => {
      const user = () => {
        return controller.findOne('4');
      };

      expect(user).toThrowError();
    });
  });
});
