import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private messageServ: MessageService) {}

  ngOnInit(): void {}

  imgUrl = './assets/ov.png';

  // messagesBarPhone = this.items[0].show;
  // messagesBarEmail = this.items[1].show;
  messagesBarPhone = false;
  messagesBarEmail = false;
  items = [
    {
      name: 'phone',
      message: 'Номер скопійовано',
      strClip: '0687018511',
      show: false,
    },
    {
      name: 'email',
      message: 'Адресу скопійовано',
      strClip: 'oksanazay@ukr.net',
      show: false,
    },
  ];

  contactClick(str: string) {
    if (this.items.find((i) => i.show)) {
      return;
    }
    let item = this.items.find((i) => i.name === str);
    this.messageServ.add(item!.message);
    item!.show = true;
    navigator.clipboard.writeText(item!.strClip);
    setTimeout(() => {
      this.messageServ.clear();
      item!.show = false;
    }, 2000);
  }
}
