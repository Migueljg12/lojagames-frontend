import { JogosService } from './../jogos.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-novo-jogo',
  templateUrl: './novo-jogo.component.html',
  styleUrls: ['./novo-jogo.component.css'],
})
export class NovoJogoComponent implements OnInit {
  formularioJogo!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private jogoServ: JogosService
  ) {}

  ngOnInit(): void {
    this.formularioJogo = this.formBuilder.group({
      gameName: ['', [Validators.required]],
      category: [''],
      stock: [''],
      description: [''],
      price: [''],
    });
  }

  upload() {
    const gameName = this.formularioJogo.get('gameName')?.value ?? '';
    const category = this.formularioJogo.get('category')?.value ?? '';
    const stock = this.formularioJogo.get('stock')?.value ?? '';
    const description = this.formularioJogo.get('description')?.value ?? '';
    const price = this.formularioJogo.get('price')?.value ?? '';

    this.jogoServ
      .uploadJogo(gameName, category, stock, description, price)
      .subscribe(() => this.router.navigate(['jogos']));
  }
}
