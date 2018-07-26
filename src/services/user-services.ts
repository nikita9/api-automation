import { JsonObject, ResponseGeneric } from '@src/utils';
import { UserObject } from '@src/models/settings';
import { Post } from '@src/utils/requester/post';

export class UserService {
  public async logout(token: string, cookie: string): Promise<ResponseGeneric<UserObject>> {
    const post = new Post(`/user/logout`);
    return await post
      .setHeaders({'x-csrf-token': token, 'cookie': cookie})
      .send<UserObject>();
  }

  public async updateData(token: string,
                          cookie: string,
                          id: number,
                          body: JsonObject): Promise<ResponseGeneric<UserObject>> {
    const post = new Post(`/user/${id}`);
    return await post
      .setBody(body)
      .setHeaders({'x-csrf-token': token, 'cookie': cookie})
      .send<UserObject>();
  }

  public async changePassword(token: string,
                              cookie: string,
                              oldPassword: string,
                              newPassword: string): Promise<ResponseGeneric<UserObject>> {
    const post = new Post(`/user/change-password`);
    const body = {['old_password']: oldPassword, ['new_password']: newPassword};
    return await post
      .setBody(body)
      .setHeaders({'x-csrf-token': token, 'cookie': cookie})
      .send<UserObject>();
  }
}
