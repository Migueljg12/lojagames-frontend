import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  private urlOriginal = ''

  @Input() set banco(banco:string){
    if(banco.startsWith('data')){
      this.urlOriginal = banco
    }else{
      this.urlOriginal = `${API}/api/game/search`
    }
  }

  get url():string{
    return this.urlOriginal
  }

  constructor() { }

  ngOnInit(): void {
  }

}
