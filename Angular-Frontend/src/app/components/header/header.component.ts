import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoggedInUserService } from 'src/app/services/logged-in-user.service';
import { SignInPageComponent } from 'src/app/shared/sign-in-page/sign-in-page.component';
import { user } from 'src/types/user.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private loggedInService: LoggedInUserService,
    public dialog: MatDialog
  ) {}

  user: user;

  ngOnInit(): void {
    this.loggedInService.getCurrentUser().subscribe((info) => {
      this.user = info;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SignInPageComponent, {
      width: '500px',

      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
