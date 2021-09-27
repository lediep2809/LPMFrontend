import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/User';
import { map } from 'rxjs/operators';

const apiUrl:string = 'https://localhost:44387';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {


    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
      this.user = this.userSubject.asObservable();
    }


    login(username: any, password: any) {
      return this.http.post<any>(`${apiUrl}/users/authenticate`, { username, password })
        .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        }));

    }
    logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('currentUser');
      this.userSubject.next({});
      this.router.navigate(['/']);
    }

    public get userValue(): User {
      return this.userSubject.value;
  }
    register(user: User) {
        return this.http.post(`${apiUrl}/users/register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${apiUrl}/users/${id}`);
    }

    update(id: string , params: any) {
      return this.http.put(`${apiUrl}/users/${id}`, params)
          .pipe(map(x => {
              // update stored user if the logged in user updated their own record
              if (id == this.userValue.id) {
                  // update local storage
                  const user = { ...this.userValue, ...params };
                  localStorage.setItem('user', JSON.stringify(user));
                  // publish updated user to subscribers
                  this.userSubject.next(user);
              }
              return x;
          }));
  }

    delete(id: string) {
      return this.http.delete(`${apiUrl}/users/${id}`)
          .pipe(map(x => {
              // auto logout if the logged in user deleted their own record
              if (id == this.userValue.id) {
                  this.logout();
              }
              return x;
          }));
  }

}
