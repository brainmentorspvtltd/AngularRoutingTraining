import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from './news.service';
import {News} from './news.model';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  message:string;
  constructor(private activatedRoute:ActivatedRoute,private newsService:NewsService) {

  }

  ngOnInit() {


    this.activatedRoute.params.subscribe(params=>{
      console.log('Params are ',params);
    //this.message = 'Hello';
    //this.message = 'Total News '+params.newscount+' and Type '+params.type;
      //this.message = `Total News Count is ${params.newscount} and The Type of News is  ${params.type}`;
      const newsArray:News[] = this.newsService.searchNews(params.newscount);
      this.message = `News for ${params.newscount} is ${newsArray[0].name}`;
    })
  }

}
