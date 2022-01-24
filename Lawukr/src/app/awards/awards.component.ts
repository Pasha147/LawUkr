import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
})
export class AwardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.sliderOn();
  }

  sliderOn() {}

  left() {
    let leng = this.slider.length;
    let curInd = this.slider.findIndex((i) => i.pos === 'cur');
    let prevInd = 0;
    let nextInd = 0;
    curInd++;
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
    // console.log(prevInd, ' ', curInd, ' ', nextInd);
    this.slider.forEach((i) => {
      i.pos = 'all';
    });
    this.slider[prevInd].pos = 'prev';
    this.slider[curInd].pos = 'cur';
    this.slider[nextInd].pos = 'next';
  }
  right() {
    let leng = this.slider.length;
    let curInd = this.slider.findIndex((i) => i.pos === 'cur');
    let prevInd = 0;
    let nextInd = 0;
    curInd--;
    nextInd = curInd + 1;
    prevInd = curInd - 1;
    if (curInd === -1) {
      prevInd = leng - 2;
      curInd = leng - 1;
      nextInd = 0;
    }
    if (curInd === 0) {
      prevInd = leng - 1;
    }
    // console.log(prevInd, ' ', curInd, ' ', nextInd);
    this.slider.forEach((i) => {
      i.pos = 'all';
    });
    this.slider[prevInd].pos = 'prev';
    this.slider[curInd].pos = 'cur';
    this.slider[nextInd].pos = 'next';
  }

  slider = [
    {
      title: 'Title 1',
      url: './assets/awards/1.jpg',
      text: 'Text 1',
      pos: 'cur',
    },
    {
      title: 'Title 2',
      url: './assets/awards/2.jpg',
      text: 'Text 2',
      pos: 'next',
    },
    {
      title: 'Title 3',
      url: './assets/awards/3.jpg',
      text: 'Text 3',
      pos: 'all',
    },
    {
      title: 'Title 4',
      url: './assets/awards/4.jpg',
      text: 'Text 4',
      pos: 'all',
    },
    {
      title: 'Title 5',
      url: './assets/awards/7.jpg',
      text: 'Text 5',
      pos: 'prev',
    },
  ];
}
