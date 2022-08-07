import { Component, OnInit } from '@angular/core';
import { BackendCallService } from 'src/app/services/backend-call.service';
import { user } from 'src/types/user.type';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { LoggedInUserService } from '../../services/logged-in-user.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<SignInPageComponent>,
    private loggedInService: LoggedInUserService
  ) {}

  loading: boolean = false;
  createAccount: boolean = false;
  email = '';
  password = '';

  ngOnInit(): void {}

  clearDialog(): void {
    this.email = '';
    this.password = '';
  }

  // addUserToService(userInfo: any): void {
  //   let newUser: user = userInfo;
  //   this.loggedInService.login(newUser);
  // }

  async attemptSignOn(): Promise<void> {
    console.log('signing in', this.email);
    this.loading = true;

    const UserExists = await this.loggedInService.login(
      this.email,
      this.password
    );

    if (UserExists) {
      this.openSnackbar('Logged In');
      this.dialogRef.close();
    } else {
      this.openSnackbar('User not found/Incorrect passowrd');
      this.clearDialog();
    }

    this.loading = false;

    // this.backendService
    //   .logInUser(this.email, this.password)
    //   .subscribe((res: any) => {
    //     //decrypt hash
    //     if (res.length) {
    //       this.openSnackbar('Logged In');
    //       this.addUserToService(res[0]);
    //       this.dialogRef.close();
    //     } else {
    //       this.openSnackbar('User not found/Incorrect passowrd');
    //       this.clearDialog();
    //     }

    //     this.loading = false;
    //   });
  }

  async createNewAccount(): Promise<void> {
    this.loading = true;

    const UserCreate = await this.loggedInService.createNewAccount(
      this.email,
      this.password
    );

    if (UserCreate) {
      this.openSnackbar('Account Created');

      this.dialogRef.close();
    } else {
      this.openSnackbar('Error creating');
    }
    this.loading = false;

    // this.backendService
    //   .createUser(this.email, this.password)
    //   .subscribe((res: any) => {
    //     this.openSnackbar('Account Created');
    //     this.addUserToService(res);

    //     this.dialogRef.close();
    //   });
  }

  openSnackbar(msg: string): void {
    this._snackBar.open(msg, 'OK', {
      duration: 3000,
    });
  }
}
