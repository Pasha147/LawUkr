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
      this.pubPict = dan;
    });
    console.log(this.pubPict);
  }
  pubPict: string[] = [];
}
