import { Test, TestingModule } from '@nestjs/testing';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('service tests', () => {
    it('should return users', () => {
      expect(service.findAll()).toBeInstanceOf(Array<User>);
    });

    it('should return one user when pass an id', () => {
      expect(service.findOne('2').id).toBe('2');
      expect(service.findOne('2').name).toBe('User2');
    });

    it('should not return a user when pass an invalid id', () => {
      const user = () => {
        return service.findOne('4');
      };

      expect(user).toThrowError();
    });
  });
});
