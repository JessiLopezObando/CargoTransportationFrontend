import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: Auth,private snackBar: MatSnackBar) { }

  register({ email, password}: any) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .catch((erro) => {this.snackBar.open(`${erro.message}`, "Cerrar", {
        duration: 3000,
      });});
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
