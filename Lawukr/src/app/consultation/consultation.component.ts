import { Component, OnInit, ViewChild } from '@angular/core';
import { GetPostService } from '../get-post.service';

import { ConsultForm } from '../interfaces';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
})
export class ConsultationComponent implements OnInit {
  constructor(
    private getPost: GetPostService,
    private messageServ: MessageService
  ) {}
  ngOnInit(): void {}

  messagesBar: boolean = false;
  formData: ConsultForm = {
    name: '',
    bearthday: '',
    email: '',
    phone: '',
    text: '',
  };

  onSubmit(): void {
    this.messagesBar = true;
    this.messageServ.add('Повідомлення відправляється...');
    this.getPost.postForm(this.formData).subscribe((a) => {
      console.log('a>', a);
      this.messageServ.clear();
      this.messageServ.add('Повідомлення доставлено');
      const interv = setTimeout(() => {
        this.messageServ.clear();
        this.messagesBar = false;
      }, 4000);
    });
  }
}

/*
formData: ConsultForm = {
    name: 'Pasha',
    bearthday: '1978',
    email: 'q@q',
    phone: '1234567890',
    text: 'Hello',
  };
*/

// @ViewChild('myForm') form: any;
// @ViewChild('myInput') forme:any;

// onSubmit(obj:any, inp:any): void {

//  console.log(obj);
//  console.log(obj.form.invalid);
//  console.log(inp.valid);

/*
    //Валидация через регулярные выражения
let regAge= /[1-2][0-9]{3}/
console.log(this.formData.bearthday);

  if (regAge.test(this.formData.bearthday)) {
      console.log('bearthday:Yes');
    } else {
      console.log('bearthday:No');
    }


    let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (reg.test(this.formData.phone)) {
      console.log('Phone:Yes');
    } else {
      console.log('Phone:No');
    }
let regDate=/^([1-9][0-9]?)\\.([1-9][0-9]?)\\.([1-2][0-9]{3})$/;
let regDate1=/^([0-9]{2})\\.([0-9]{2})\\.([1-2][0-9]{3})$/;
let regex = new RegExp("^([0-9]{2})\\.([0-9]{2})\\.([1-2][0-9]{3})$");

if(regDate1.test(this.formData.phone))
{
      console.log('Phone:Yes');
    } else {
      console.log('Phone:No');
    }
    */
