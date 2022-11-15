import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,
  FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-lazer',
  templateUrl: './lazer.component.html',
  styleUrls: ['./lazer.component.scss']
})
export class LazerComponent implements OnInit {

  public leisureForm : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.leisureForm = this.formBuilder.group({
    caminhar : false,
    fotografia: false,
    ler: false,
    bar: false,
    esportes: false,
    cinema: false,
    piquiniques: false,
    viajar: false,
    pescaria: false,
    turismo: false,
  });
  }

  ngOnInit(): void {
  }

  






}
