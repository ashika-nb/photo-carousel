import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'carousel';
  allPages = [1, 2, 3, 4, 5, 6,7,8,9,10]
  pagesItems = 4;
  pages: Array<number> = []
  currentPage = 0
 
 

  ngOnInit() {
   
    this.setPages(1)
  }
  setPages(page: number) {
    if (page == 0 || page == this.allPages[this.allPages.length - 1]+1)
      return
    this.currentPage = page
    let first = 0

    if (page < 5) {
      first = 0
    } else {
      first = page - 4
    }
    this.pages = this.allPages.slice(first, first + 4)
    this.allPages
  }
}
