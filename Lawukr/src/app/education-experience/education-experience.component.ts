import { Component, OnInit } from '@angular/core';
import { GetPostService } from '../get-post.service';

@Component({
  selector: 'app-education-experience',
  templateUrl: './education-experience.component.html',
  styleUrls: ['./education-experience.component.scss'],
})
export class EducationExperienceComponent implements OnInit {
  constructor(private getPostService: GetPostService) {}

  ngOnInit(): void {
    this.getExpData();
  }
  getExpData(): void {
    this.getPostService.getExp().subscribe((data) => {
      this.expData = data;
    });
  }

  expData: any[] = [];
}
