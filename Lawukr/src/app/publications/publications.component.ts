import { Component, OnInit } from '@angular/core';
import { GetPostService } from '../get-post.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent implements OnInit {
  constructor(private getPostService: GetPostService) {}

  ngOnInit(): void {
    this.getPostService.getPublicPict().subscribe((dan) => {
      this.pubPict1 = dan.map((item, index) => {
        return {
          url: item,
          show: 'small',
          left: `${Math.round((80 * index) / dan.length) + 5}%`,
        };
      });
    });

    this.getPostService.getPublics().subscribe((dan) => {
      this.publics = dan;
    });
    // console.log(this.pubPict1);
  }

  pubPict1: any[] = [];
  clickPict1(url: string) {
    let curInd = this.pubPict1.findIndex((i) => i.url === url);
    // console.log(curInd);

    this.pubPict1.forEach((item, index) => {
      if (index === curInd) {
        if (item.show === 'small') {
          item.show = 'cur';
        } else {
          if (item.show === 'cur') {
            item.show = 'small';
          }
        }
      } else {
        item.show = 'small';
      }
    });
    // console.log(this.pubPict1);
  }

  publics: any[] = [];
}
