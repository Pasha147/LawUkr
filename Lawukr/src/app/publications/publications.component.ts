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
      this.pubPict = dan.map((item) => {
        return { url: item, show: 'small' };
      });

      this.pubPict1 = dan.map((item, index) => {
        return {
          url: item,
          show: 'small',
          left: `${Math.round((100 * index) / (dan.length + 2))}%`,
        };
      });
    });
    // console.log(this.pubPict1);
  }

  pubPict1: any[] = [];
  clickPict1(url: string) {
    let curInd = this.pubPict1.findIndex((i) => i.url === url);
    console.log(curInd);

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

    console.log(this.pubPict1);
  }

  pubPict: any[] = [];
  clickPict(url: string) {
    let curInd = this.pubPict1.findIndex((i) => i.url === url);
    console.log(curInd);

    /*
    if (this.pubPict[curInd].show === 'small') {
      this.pubPict.forEach((item, index) => {
        index === curInd ? (item.show = 'cur') : (item.show = 'hid');
      });
    } else {
      if (this.pubPict[curInd].show === 'cur') {
        this.pubPict.forEach((item) => {
          item.show = 'small';
        });
      }
    }
    */

    console.log(this.pubPict1);
    /*
    this.pubPict.forEach((item, index) => {
      index === curInd
        ? (this.pubPict[index].show = 'cur')
        : (this.pubPict[index].show = 'hid');
    });
    console.log(this.pubPict);
    */
  }
}
