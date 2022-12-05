import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-lazer',
  templateUrl: './lazer.component.html',
  styleUrls: ['./lazer.component.scss']
})
export class LazerComponent implements OnInit {

  public lazerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 

    this.lazerForm = this.formBuilder.group({
      caminhar: false,
      fotografia:false,
      ler: false,
      bar: false,
      esportes: false,
      cinema: false,
      piquiniques: false,
      viajar: false,
      pescaria: false,
      turismo:false,
    })
  }
  
  ngOnInit(): void {
    
  }

  salvar() {

    let lazer = {
      caminhar : this.lazerForm.value.caminhar,
      fotografia: this.lazerForm.value.fotografia,
      ler: this.lazerForm.value.ler,
      bar: this.lazerForm.value.bar,
      esportes: this.lazerForm.value.esportes,
      cinema: this.lazerForm.value.cinema,
      piquiniques: this.lazerForm.value.piquiniques,
      viajar: this.lazerForm.value.viajar,
      pescaria: this.lazerForm.value.pescaria,
      turismo:this.lazerForm.value.turismo

    }

    localStorage.setItem('lazer', JSON.stringify(lazer));
    alert('Preferências salvas! Confira a página principal')


  }
}