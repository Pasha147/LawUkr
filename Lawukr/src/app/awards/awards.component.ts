import { Component, OnInit } from '@angular/core';
import { GetPostService } from '../get-post.service';
import { Slider } from '../interfaces';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
})
export class AwardsComponent implements OnInit {
  constructor(private getPostService: GetPostService) {}

  ngOnInit(): void {
    this.getSliderData();
  }

  slider: Slider[] = [];
  slider1: Slider[] = [];
  getSliderData(): void {
    this.getPostService.getSlider().subscribe((sliderData) => {
      this.slider = sliderData.map((i, index) => {
        if (index === sliderData.length - 1) {
          return { ...i, pos: 'cur' };
        }
        if (index === 0) {
          return { ...i, pos: 'next' };
        }
        if (index === sliderData.length - 2) {
          return { ...i, pos: 'prev' };
        }
        return { ...i, pos: 'all' };
      });
      this.slider1 = [...this.slider];
      this.slider1.reverse();
    });

    // console.log(this.slider);
  }

  sladerMove(direct: string) {
    let leng = this.slider.length;
    let curInd = this.slider.findIndex((i) => i.pos === 'cur');
    let prevInd = 0;
    let nextInd = 0;
    direct === 'left' && curInd++;
    direct === 'right' && curInd--;
    nextInd = curInd + 1;
    prevInd = curInd - 1;
    if (curInd === leng) {
      prevInd = leng - 1;
      curInd = 0;
      nextInd = 1;
    }
    if (curInd === leng - 1) {
      nextInd = 0;
    }
    if (curInd === -1) {
      prevInd = leng - 2;
      curInd = leng - 1;
      nextInd = 0;
    }
    if (curInd === 0) {
      prevInd = leng - 1;
    }
    this.slider.forEach((i) => {
      i.pos = 'all';
    });
    this.slider[prevInd].pos = 'prev';
    this.slider[curInd].pos = 'cur';
    this.slider[nextInd].pos = 'next';
  }

  clickPict(url: string) {
    let prevInd = this.slider.findIndex((i) => i.pos === 'prev');
    let nextInd = this.slider.findIndex((i) => i.pos === 'next');
    // let curInd = this.slider.findIndex((i) => i.pos === 'cur');
    let clickInd = this.slider.findIndex((i) => i.url === url);
    let leng = this.slider.length;
    // console.log('1.', prevInd, curInd, nextInd, clickInd, leng);
    // console.log(this.slider);

    this.slider.forEach((i) => {
      i.pos = 'all';
    });

    this.slider[clickInd].pos = 'cur';
    clickInd === 0 ? (prevInd = leng - 1) : (prevInd = clickInd - 1);
    this.slider[prevInd].pos = 'prev';
    clickInd === leng - 1 ? (nextInd = 0) : (nextInd = clickInd + 1);
    this.slider[nextInd].pos = 'next';

    /*
    this.slider[prevInd].pos = 'all';
    this.slider[nextInd].pos = 'all';
    this.slider[curInd].pos = 'prev';
    this.slider[clickInd].pos = 'cur';

    clickInd === 0 ? (prevInd = leng - 1) : (prevInd = clickInd - 1);
    this.slider[prevInd].pos = 'prev';
    clickInd === leng - 1 ? (nextInd = 0) : (nextInd = clickInd + 1);
    this.slider[nextInd].pos = 'next';

    // clickInd === leng - 1
    //   ? (this.slider[0].pos = 'next')
    //   : (this.slider[clickInd + 1].pos = 'next');
    // clickInd === 0
    //   ? (this.slider[leng - 1].pos = 'prev')
    //   : (this.slider[clickInd - 1].pos = 'prev');

    const t = () => {
      const time = setTimeout(() => {
        this.slider[curInd].pos = 'all';
        // this.slider[nextInd].pos = 'next';
        // clickInd === 0 ? (prevInd = leng - 1) : (prevInd = clickInd - 1);
        // console.log(prevInd);
        // this.slider[prevInd].pos = 'prev';
        console.log('2.', prevInd, curInd, nextInd, clickInd, leng);
        console.log(this.slider);
      }, 1000);
      return () => clearTimeout(time);
    };
    t();
*/
    /*
    this.slider[prevInd].pos = 'all';
    this.slider[nextInd].pos = 'all';
    this.slider[curInd].pos = 'prev';
    this.slider[clickInd].pos = 'cur';
    clickInd === leng - 1 ? (nextInd = 0) : (nextInd = clickInd + 1);
    this.slider[nextInd].pos = 'next';
    clickInd === 0 ? (prevInd = leng - 1) : (prevInd = clickInd - 1);
    console.log(prevInd);

    this.slider[prevInd].pos = 'prev';

    const t = (curInd: number) => {
      const time = setTimeout(() => {
        this.slider[curInd].pos = 'all';

        prevInd = this.slider.findIndex((i) => i.pos === 'prev');
        nextInd = this.slider.findIndex((i) => i.pos === 'next');
        curInd = this.slider.findIndex((i) => i.pos === 'cur');
        clickInd = this.slider.findIndex((i) => i.url === url);
        leng = this.slider.length;

        console.log('2.', prevInd, curInd, nextInd, clickInd, leng);
      }, 1000);
      return () => clearTimeout(time);
    };
    t(curInd);
*/
    // curInd = this.slider.findIndex((i) => i.pos === 'cur');
    // this.slider[curInd].pos = 'prev';
    // curInd = this.slider.findIndex((i) => i.url === url);
    // this.slider[curInd].pos = 'cur';

    // prevInd = this.slider.findIndex((i) => i.url === url);
    //     this.slider[curInd].pos = 'cur';

    // this.slider[prevInd].pos = 'prev';
    // () => {
    //   const time = setTimeout(() => {
    //     this.slider[nextInd].pos = 'next';

    //   }, 400);
    //   return () => clearTimeout(time);
    // };
  }
}
