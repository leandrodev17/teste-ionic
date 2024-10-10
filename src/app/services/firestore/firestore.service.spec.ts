import { TestBed } from '@angular/core/testing';

import { FirestoreService } from './firestore.service';
import { IUser } from 'src/app/interfaces/user.interface';

describe('FirestoreService', () => {
  let service: FirestoreService;

  const generateIUser = () => {
    const randomString = () =>
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);

    const nome = randomString();
    const email = `${randomString()}@${randomString()}.test`;
    const foto = randomString();
    

    return {nome, email, foto} as IUser;
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("salvar usuario no firestore", async () => {
    const user = generateIUser();

    const result = await service.checkUserByEmail(user.email, '/usuarios');
    
    expect(result).toEqual(true);
  });
});
