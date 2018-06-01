import { Injectable } from "@angular/core";
import { of } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class UserService {

    private users: User[] = [
        {
            userName: 'user 1',
            email: 'user 1@user.com'
        },
        {
            userName: 'user 2',
            email: 'user 1@user.com'
        },
        {
            userName: 'user 3',
            email: 'user 1@user.com'
        },
        {
            userName: 'user 4',
            email: 'user 1@user.com'
        },
        {
            userName: 'user 5',
            email: 'user 1@user.com'
        },
        {
            userName: 'user 6',
            email: 'user 1@user.com'
        },
        {
            userName: 'user 7',
            email: 'user 1@user.com'
        },
        {
            userName: 'user 8',
            email: 'user 1@user.com'
        },
        {
            userName: 'user 9',
            email: 'user 1@user.com'
        },
        {
            userName: 'user 10',
            email: 'user 1@user.com'
        }                                                                        
    ];

    getUsers(page) {
        return of(this.users);
    }
}