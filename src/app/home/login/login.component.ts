import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = ''
  senha = ''
  constructor(
    private auth: AutenticacaoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.autenticar(this.email, this.senha).subscribe(()=>{
      this.router.navigate(['jogos'])
    }, error => {
      alert('Usuario ou senha inválido')
      console.log(error)})
  }

}
