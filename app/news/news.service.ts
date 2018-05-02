import {Injectable} from '@angular/core';
import {News} from './news.model';
@Injectable()
export class NewsService{
  news:News[]=[];
  constructor(){
  this.loadNews();
  }
  private loadNews():void{
  this.news.push(new News(100,"IPL News"));
  this.news.push(new News(101,"FIFA NEWS"));
  this.news.push(new News(102,"BOLLYWOOD NEWS"));
  this.news.push(new News(103,"MUSIC NEWS"));
  }
  public searchNews(id:number){
    return this.news.filter(newsObject=>newsObject.id==id);
  }

}
