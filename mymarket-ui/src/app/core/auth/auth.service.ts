import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { runInThisContext } from 'vm';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser:User;
  private isUserLoggedIn:boolean = false;
  private userSubject:Subject<User> = new Subject<User>();
  

  constructor(
    private http: HttpService
  ) { 
    this.currentUser = new User();
    this.reloadLogin();
    
  }

  getUserSubscription(){
    return this.userSubject.asObservable();
  }

  async login(email:string){
    
    this.setEmailCurrentUser(email);
    const result:any = await this.setUserId();
    this.setLocalStorage(email, result.data);
    this.nextUser();
  } 

  logout(){
    const item = localStorage.getItem('email');
    if(item){
      localStorage.removeItem('email');
    }
  }

  setUserId(){
    // this.http.getUserIdByEmail(this.currentUser.email).subscribe((res:any) => {
    //   this.currentUser.id = res.data;
    // })
    return this.http.getUserIdByEmail(this.currentUser.email).toPromise();
  }

  getUserId(){
    return this.currentUser.id;
  }

  reloadLogin(){
    
    const email= localStorage.getItem('email');
    const id = localStorage.getItem('id')
    if(email && id){
      this.login(email);
      this.currentUser.id = parseInt(id);
    }
    
  }

  private nextUser(){
    this.userSubject.next(this.currentUser);
  }

  private setLocalStorage(email:string, id:number){
    
    localStorage.setItem('email', email);
    localStorage.setItem('id', id.toString());
    
  }


  private setEmailCurrentUser(email:string){
    this.currentUser.email = email;
    this.isUserLoggedIn = true;
  }

  isUserLogged(){
    return this.isUserLoggedIn;
  }
}
