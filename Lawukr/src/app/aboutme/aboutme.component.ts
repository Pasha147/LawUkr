import { Component, OnInit } from '@angular/core';
import { GetPostService } from '../get-post.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent implements OnInit {
  constructor(private getPostService: GetPostService) {}

  ngOnInit(): void {
    this.getAboutMeData();
  }

  getAboutMeData(): void {
    this.getPostService.getAboutMeData().subscribe((data) => {
      this.aboutMeData = data;
    });
  }

  aboutMeData: any[] = [];
}
