import { Injectable } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { Timer } from 'src/app/models/timer';
import { XiangqiService } from '../xiangqi/xiangqi.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  isGameStart = false
  currentUserIDControll = ''
  time = new Timer()

  /////
  timePerMove = 30

  player1: Player
  player2: Player


  constructor(private xiangqiS: XiangqiService) {
    this.player1 = this.newPlayer('user2', 'HungTT', 1222, 'a3', 'xmtsvspc', true)
    this.player2 = this.newPlayer('user1', 'DucTH', 1230, 'a2', 'XMTSVSPC', false)
  }
  startGame(player1: Player, player2: Player) {
    this.isGameStart = true;

    player1.chessControl.timer.setlimitSecond(60 * 15)
    player2.chessControl.timer.setlimitSecond(60 * 15)
    this.time.setlimitSecond(this.timePerMove)
    this.currentUserIDControll = player1.id

    this.time.startCountDown()
    player1.chessControl.timer.startCountDown()
  }

  canPickChess(userChessControll: string, chessName: string) {
    if (this.isGameStart && this.isAlly(userChessControll, chessName) && userChessControll.includes(chessName)) {
      return true
    }
    return false
  }

  changeCurrentPlayer(player1: Player, player2: Player) {
    if (this.currentUserIDControll == player1.id) {
      this.currentUserIDControll = player2.id
      //p1 => p2
      player1.chessControl.timer.pause()
      if (player2.chessControl.timer.isStart) {
        player2.chessControl.timer.unPause()
      }
      else {
        player2.chessControl.timer.startCountDown()
      }
    }
    else {
      this.currentUserIDControll = player1.id
      //p2 => p1
      player2.chessControl.timer.pause()
      if (player1.chessControl.timer.isStart) {
        player1.chessControl.timer.unPause()
      }
      else {
        player1.chessControl.timer.startCountDown()
      }
    }
    this.time.setlimitSecond(this.timePerMove)
  }

  isAlly(c1: string, c2: string) {
    let c3 = c1 + c2
    return c3.toUpperCase() == c3 || c3.toLocaleLowerCase() == c3
  }

  newPlayer(id: string, name: string, elo: number, img: string, control: string, isBase: boolean) {
    let player: Player = {
      id: id,
      name: name,
      elo: elo,
      img: img,
      isBase: isBase,
      chessControl: {
        chessIDControl: control,
        timer: new Timer(),
        chessSDie: [],
        isCheckmat: false,
        chessCheckmat: this.xiangqiS.newChess()
      }
    }
    return player
  }
  enoughPlayer() {
    if (this.player1.id == '') {
      return false
    }
    if (this.player2.id == '') {
      return false
    }
    return true
  }
  getUserById(id: string) {
    if (this.enoughPlayer()) {
      if (this.player1.id == id) {
        return this.player1
      }
      return this.player2
    }
    return this.newPlayer('', '', 1200, 'a2', '', true)
  }
  getCurrentUser() {
    if (this.enoughPlayer()) {
      if (this.player1.id == this.currentUserIDControll) {
        return this.player1
      }
      return this.player2
    }
    return this.newPlayer('', '', 1200, 'a2', '', false)
  }
}
