export interface UserObject {
  readonly type: string;
  readonly data: UserM;
}

export interface UserM {
  readonly token: string;
  readonly name: string;
  readonly status: number;
  readonly login: number;
  readonly email: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly id: number;
  readonly phone: string;
  readonly fb_user: string;
}
