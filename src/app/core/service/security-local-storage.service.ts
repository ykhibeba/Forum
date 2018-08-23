import {LocalStorageService} from './local-storage.service';

export class SecurityLocalStorageService {

  private static currentUserKey = 'currentUser';

  public static getCurrentUser(): UserInfoInLocalStorage {
    return LocalStorageService.getObject<UserInfoInLocalStorage>(this.currentUserKey);
  }

  public static setCurrentUser(user: UserInfoInLocalStorage): void {
    LocalStorageService.setValue(user, this.currentUserKey);
  }

  public static isPresentUser(): boolean {
    return !!localStorage.getItem(this.currentUserKey);
  }

}

export class UserInfoInLocalStorage {
  access_token: string;
  expires_in: number;
  token_type: string;

  constructor(access_token: string) {
    this.access_token = access_token;
  }
}
