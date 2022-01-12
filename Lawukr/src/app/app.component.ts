import { Component } from '@angular/core';

interface Page {
  title: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.menuBtn();
    }, 200);
    setTimeout(() => {
      this.menuBtn();
    }, 600);
  }

  title = 'Lawukr';

  navIt: Page[] = [
    { title: 'Головна', path: 'main' },
    { title: 'Юридична консультація', path: 'consultation' },
    { title: 'Освіта та досвід', path: 'edexp' },
    { title: 'Нагороди', path: 'awards' },
    { title: 'Про мене', path: 'edexp' },
    { title: 'Публікації', path: 'edexp' },
  ];

 
  menuOn: boolean = false;
  btnStr: string = '>';

  menuBtn(): void {
    this.menuOn = !this.menuOn;
    this.menuOn ? (this.btnStr = '<') : (this.btnStr = '>');
  }
}
