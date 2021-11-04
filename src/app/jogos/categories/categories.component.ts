import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { JogosService } from './../jogos.service';
import { CategoriesService } from './categories.service';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  @Input() id!: string;
  categories$!: Observable<any>;
  teste!: any;

  constructor(
    private categoriService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoriService.buscaPorCategoria(this.id);
  }
  mostrar(bolean: boolean) {
    let display = <HTMLSelectElement>document.getElementsByClassName('editar');
    display[0].hidden = display[0].hidden === true ? false : true;
    if (bolean) {
      display[0].hidden = true;
    }
    return display;
  }
  editando(text: any) {
    return this.categoriService
      .atualizaCategoria(this.id, text.value)
      .subscribe(() => {
        this.categories$ = this.categoriService.buscaPorCategoria(this.id);
        this.mostrar(true);
      });
  }
}
