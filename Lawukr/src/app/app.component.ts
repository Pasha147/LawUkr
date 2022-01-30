import { Component } from '@angular/core';
import { Page } from './interfaces';

// interface Page {
//   title: string;
//   path: string;
// }

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
    { title: 'Досвід та освіта', path: 'edexp' },
    { title: 'Досягнення', path: 'awards' },
    { title: 'Про мене', path: 'edexp' },
    { title: 'Публікації', path: 'publications' },
  ];

  menuOn: boolean = false;
  btnStr: string = '>';

  menuBtn(): void {
    this.menuOn = !this.menuOn;
    this.menuOn ? (this.btnStr = '<') : (this.btnStr = '>');
  }
}
