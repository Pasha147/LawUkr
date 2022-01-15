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
    date: '',
    email: '',
    phone: '',
    text: '',
  };

  @ViewChild('myForm') form: any;

  onSubmit(obj: any): void {
    console.log(obj.form.value);

    this.getPost.postForm(this.formData).subscribe((a) => {
      console.log('a>', a);
      this.formData = {
        name: '',
        date: '',
        email: '',
        phone: '',
        text: '',
      };
    });
  }
}
