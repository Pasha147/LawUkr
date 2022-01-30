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

  imgUrl = './assets/main1.jpg';

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
    let item = this.items.find((i) => i.name === str);
    if (!item!.show) {
      navigator.clipboard.writeText(item!.strClip);
      item!.show = true;
      const t = () => {
        const time = setTimeout(() => {
          item!.show = false;
        }, 2000);
        return () => clearTimeout(time);
      };
      t();
    } else {
      item!.show = false;
    }
  }
}

/*
contactClick(str: string) {
    if (this.items.find((i) => i.show && i.name === str)) {
      console.log(this.items.find((i) => i.show));
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
*/
