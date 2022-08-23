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
    const data = await firstValueFrom(
      this.backendService.logInUser(email, password)
    );

    if (data) {
      this.currentUserSubject.next(data[0]);
      return true;
    }
    return false;
  }

  async createNewAccount(email: string, password: string): Promise<Boolean> {
    const data = await firstValueFrom(
      await this.backendService.createUser(email, password)
    );

    if (data) {
      this.currentUserSubject.next(data);
      return true;
    }
    return false;
  }

  getCurrentUser(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }
}
