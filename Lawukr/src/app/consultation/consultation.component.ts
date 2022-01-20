import { Component, OnInit, ViewChild } from '@angular/core';
import { GetPostService } from '../get-post.service';

import { ConsultForm } from '../interfaces';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
})
export class ConsultationComponent implements OnInit {
  constructor(private getPost: GetPostService) {}

  ngOnInit(): void {}

  formData: ConsultForm = {
    name: '',
    bearthday: '',
    email: '',
    phone: '',
    text: '',
  };

  // @ViewChild('myForm') form: any;
  // @ViewChild('myInput') forme:any;

  // onSubmit(obj:any, inp:any): void {
  onSubmit(): void {
    //  console.log(obj);
    //  console.log(obj.form.invalid);
    //  console.log(inp.valid);

    // this.getPost.postForm(this.formData).subscribe((a) => {
    //   console.log('a>', a);
    //   this.formData = {
    //     name: '',
    //     bearthday: '',
    //     email: '',
    //     phone: '',
    //     text: '',
    //   };
    // });
    let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (reg.test(this.formData.phone)) {
      console.log('Phone:Yes');
    } else {
      console.log('Phone:No');
    }
let regDate=/^([1-9][0-9]?)\\.([1-9][0-9]?)\\.([1-2][0-9]{3})$/;
let regDate1=/^([0-9]{2})\\.([0-9]{2})\\.([1-2][0-9]{3})$/;
let regex = new RegExp("^([0-9]{2})\\.([0-9]{2})\\.([1-2][0-9]{3})$");

if(regex.test(this.formData.bearthday))
{
      console.log('Bearthday:Yes');
    } else {
      console.log('Bearthday:No');
    }
  }
}
