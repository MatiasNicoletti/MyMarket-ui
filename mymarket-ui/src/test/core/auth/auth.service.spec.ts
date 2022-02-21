import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../app/core/auth/auth.service';

describe('AuthService', () => {
  let service: AuthService;
  const user = {
    email: 'test@gmail.com',
    id: 1
  }

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule], providers: [AuthService] });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login user', async () => {
    service.login(user.email);
    expect(localStorage.getItem('email')).toEqual(user.email);
    expect(localStorage.getItem('id')).toEqual((user.id).toString());
  })

  it('should logout user', async () => {
    service.logout();
    expect(localStorage.getItem('email')).toBeUndefined()
    expect(localStorage.getItem('id')).toBeUndefined();
  });
});

