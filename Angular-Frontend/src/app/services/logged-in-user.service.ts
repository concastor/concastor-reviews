import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { BackendCallService } from './backend-call.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInUserService {
  constructor(private backendService: BackendCallService) {}

  private currentUserSubject = new BehaviorSubject<any>(null);

  async login(email: string, password: string): Promise<Boolean> {
    const res = await firstValueFrom(
      this.backendService.logInUser(email, password)
    );

    console.log('res', res);
    // this.backendService.logInUser(email, password).subscribe((res: any) => {
    if (res.length) {
      this.currentUserSubject.next(res[0]);
      return true;
    }
    return false;
    // });
  }

  async createNewAccount(email: string, password: string): Promise<Boolean> {
    const res = await firstValueFrom(
      this.backendService.createUser(email, password)
    );

    if (res.length) {
      this.currentUserSubject.next(res[0]);
      return true;
    }

    return false;
  }

  getCurrentUser(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }
}
