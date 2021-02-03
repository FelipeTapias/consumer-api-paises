import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BodyService } from './body.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  form: FormGroup;
  data: any;
  dataCountry: any;
  show:boolean = false;
  dataNumber: any;

  constructor(private services: BodyService) { }

  initForm(){
    this.form = new FormGroup({
      country: new FormControl('', Validators.required)
    });
  };

  // dateForever(){
  //   this.services.getInfoNumber().subscribe(
  //     res => {
  //         this.dataNumber = res;
  //         console.log(`Esta es la API de los numeros: ${this.dataNumber}`);
  //     }
  //   );
  // }

  ngOnInit(): void {
    this.initForm();
    // this.dateForever();
    this.services.getAll().subscribe(
      res => {
        this.data = res;
      }
    )

  }

  onSubmit(){
    if(this.form.valid){
      const code = this.form.value.country;
      this.services.getCountry(code).subscribe(
        res => {
          this.dataCountry = res;
          this.show = true;
        }
      );
    } else {
      console.log("Debes de seleccionar un país.");
      alert('Debes de seleccionar un país.');
    }
  }

}
