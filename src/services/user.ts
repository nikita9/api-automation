import { UserM, UserObject } from '@src/models/settings';
import { UserService } from '@src/services/user-services';
import { ResponseGeneric } from '@src/utils';

export class User {
  public readonly token: string;
  public readonly status: number;
  public readonly login: number;
  public readonly email: string;
  public readonly ['first_name']: string;
  public readonly ['last_name']: string;
  public readonly id: number;
  public readonly phone: string;
  private readonly cookie: string;

  constructor(data: UserM) {
    this.token = data.token;
    this.login = data.login;
    this.email = data.email;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.id = data.id;
    this.phone = data.phone;
    this.cookie = 'dsdsfsd';
  }
  
  public async logout(): Promise<ResponseGeneric<UserObject>> {
    const service = new UserService();
    return await service.logout(this.token, this.cookie);
  }
}
