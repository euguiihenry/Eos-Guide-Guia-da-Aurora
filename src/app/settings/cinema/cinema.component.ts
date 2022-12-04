
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  public cinemaForm!: FormGroup; 
  constructor(private formBuilder: FormBuilder) { 
    this.cinemaForm = this.formBuilder.group({
      musical : false,
      biografia : false,
      investigacao : false,
      drama  : false,
      aventura : false,
      thriller : false,
      horror : false,
      guerra : false,
      scifi : false,
      acao : false,
      comedia : false,
      romance  : false
    })
  }

  ngOnInit(): void {
  }

  salvar() {

    let cinema = {
      musical : this.cinemaForm.value.musical,
      biografia : this.cinemaForm.value.biografia,
      investigacao : this.cinemaForm.value.investigacao,
      drama  : this.cinemaForm.value.drama,
      aventura : this.cinemaForm.value.aventura,
      thriller : this.cinemaForm.value.thriller,
      horror : this.cinemaForm.value.horror,
      guerra : this.cinemaForm.value.guerra,
      scifi : this.cinemaForm.value.scifi,
      acao : this.cinemaForm.value.acao,
      comedia : this.cinemaForm.value.comedia,
      romance  : this.cinemaForm.value.romance,
      

    }

    localStorage.setItem('cinema', JSON.stringify(cinema));
    console.log(cinema);
    alert('Preferências salvas! Confira a página principal')


  }

}
