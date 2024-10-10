import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { User } from '@codetrix-studio/capacitor-google-auth';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  const generateUserGoogleAuth = () => {
    const randomString = () =>
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);

    const name = randomString();
    const email = `${randomString()}@${randomString()}.test`;
    const imageUrl = randomString();
    const idToken = randomString();
    const authentication = {
      idToken: randomString()
    }

    return { name, email, imageUrl, authentication} as User;
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Salvar sessão firebase", async () => {
    const user = generateUserGoogleAuth();

    const result = await service.saveSessionFirebase(user);
    expect(result).toEqual(false);
  });
});
