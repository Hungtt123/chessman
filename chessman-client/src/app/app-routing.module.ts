import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dangnhap', loadChildren: () => import('./pages/dangnhap/dangnhap.module').then(m => m.DangnhapModule) },
  { path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule) },
  { path: 'xem', loadChildren: () => import('./pages/xem/xem.module').then(m => m.XemModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./pages/home1/home1.module').then(m => m.Home1Module) },
  { path: 'dangky', loadChildren: () => import('./pages/dangky/dangky.module').then(m => m.DangkyModule) },
  { path: 'info', loadChildren: () => import('./pages/info/info.module').then(m => m.InfoModule) },
  { path: 'game', loadChildren: () => import('./pages/game/game.module').then(m => m.GameModule) },
  { path: 'lobby', loadChildren: () => import('./pages/lobby/lobby.module').then(m => m.LobbyModule) },
  { path: 'play', loadChildren: () => import('./pages/play/play.module').then(m => m.PlayModule) },
  { path: 'cactheco', loadChildren: () => import('./pages/cactheco/cactheco.module').then(m => m.CacthecoModule) },
  { path: 'Room', loadChildren: () => import('./pages/room/room.module').then(m => m.RoomModule) },
  { path: 'help', loadChildren: () => import('./pages/help/help.module').then(m => m.HelpModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
