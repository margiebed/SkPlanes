import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private fireAuth: AngularFireAuth) {}

  login(credentials: {email: string, password: string}) {
    return this.fireAuth.auth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }
}
