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

  val1 = '';
  val2 = '';

 formData: ConsultForm = {
    name: '',
    date: '',
    email: '',
    phone: '',
    text: '',
  };



  @ViewChild('myForm') form: any;

onSubmit(obj:any):void{
  console.log(obj);
  this.send()
}

 

  send(): void {
    let resp: string = '';
    this.getPost.postForm(this.formData).subscribe((a) => {
      console.log('a>', a);
    });
  }
}
