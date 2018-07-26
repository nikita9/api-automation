import { Post } from '@src/utils/requester';
import { UserPayload } from '@src/utils';
import { User } from '@src/services/user';
import { UserObject } from '@src/models/settings';

export class Guest {
  public async login({ email, password }: UserPayload): Promise<User> {
    const post = new Post('/user/login');
    const body = { ['email']: email, ['password']: password};
    const { body: { data } } = await post
      .setBody(body)
      .send<UserObject>();

    return new User(data);
  }

  public async restorePassword({ phone, id }: UserPayload): Promise<User> {
    const post = new Post('/user/password');
    const body = { ['phone']: phone, ['id']: id};
    const { body: { data } } = await post
      .setBody(body)
      .send<UserObject>();

    return new User(data);
  }
}
