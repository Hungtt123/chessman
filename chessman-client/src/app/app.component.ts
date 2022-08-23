import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chessman';
  menuLeft = [
    {
      title: 'Đăng ký',
      href: 'dangky'
    },
    {
      title: 'Đăng nhập',
      href: 'dangnhap'
    },
    {
      title: 'Menu',
      href: 'menu'
    },
    {
      title: 'Xem',
      href: 'xem'
    },
    {
      title: 'Home',
      href: 'home'
    },
    {
      title: 'Info',
      href: 'info'
    },
    {
      title: 'Game',
      href: 'game'
    },
    {
      title: 'Lobby',
      href: 'loddy'
    },
  ]


 
  constructor(public authService: AuthService){}
  logout(){
    this.authService.logout()
  }
}
