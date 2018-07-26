import { ResponseGeneric } from '@src/utils';
import { Get } from '@src/utils/requester';

export class General {
  public async getListOfStaticPages(): Promise<ResponseGeneric<any>> {
    const get = new Get(`/node`);

    return await get
      .send<any>();
  }

  public async checkPhoneNumber(phoneNumber: number): Promise<ResponseGeneric<any>> {
    const get = new Get(`/phone/${phoneNumber}`);

    return await get
      .send<any>();
  }
}
