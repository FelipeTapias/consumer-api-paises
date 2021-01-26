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

  constructor(private services: BodyService) { }

  initForm(){
    this.form = new FormGroup({
      country: new FormControl('', Validators.required)
    });
  };

  ngOnInit(): void {
    this.initForm();
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
      console.log("Debe llenar los campos");
      alert('Debe llenar los campos');
    }
  }

}
