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
  }
}
