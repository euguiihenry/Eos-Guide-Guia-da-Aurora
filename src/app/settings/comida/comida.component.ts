import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})
export class ComidaComponent implements OnInit {

  public comidaForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 

    this.comidaForm = this.formBuilder.group({
      padrao: false,
      pescatariana: false,
      vegetariana: false,
      lactovegetariana: false,
      ovovegetariana: false,
      vegana: false,
    })

  }

  ngOnInit(): void {
  }

  salvar() {

    let comida = {
      padrao: this.comidaForm.value.padrao,
      pescatariana: this.comidaForm.value.pescatariana,
      vegetariana: this.comidaForm.value.vegetariana,
      lactovegetariana: this.comidaForm.value.lactovegetariana,
      ovovegetariana: this.comidaForm.value.ovovegetariana,
      vegana: this.comidaForm.value.vegana
      
    }

    localStorage.setItem('comida', JSON.stringify(comida));
    alert('Preferências salvas! Confira a página principal')


  }

}
