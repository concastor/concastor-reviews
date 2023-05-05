import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  collection,
  addDoc,
  getDoc,
  Firestore,
  onSnapshot,
  doc,
  getDocs,
  orderBy,
  limit,
  query,
  setDoc,
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor() {}
  app = initializeApp(environment.firebaseConfig);
  analytics = getAnalytics(this.app);
  db = getFirestore(this.app);

  gameSubject = new BehaviorSubject<any[]>([]);

  subscribeToAllData(): void {
    this.subscribeToGames();
  }

  subscribeToGames(): void {
    const gameQuery = query(collection(this.db, 'Games'), limit(20));

    onSnapshot(gameQuery, (querySnapshot) => {
      const results: any[] = [];
      querySnapshot.forEach((doc) => {
        results.push(doc.data());
      });
      console.log('started', results);
      this.gameSubject.next(results);
    });
  }

  getRecentGames(): Observable<any[]> {
    return this.gameSubject.asObservable();
  }
}
