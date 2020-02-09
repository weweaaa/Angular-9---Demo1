import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';
  data: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getData().subscribe((value) => {
      this.data = value;
    });
  }

  /**
   * 抓取複製事件
   */
  userCopy(event: KeyboardEvent) {
    console.log('copy => ', event);
    // console.log(event.code);
    // if (event.ctrlKey === true && event.c === true) {
    //   console.log('使用者按下了 ctrl + c 複製組合鍵。');
    // }
  }

  /**
   * 抓取黏貼事件
   */
  userPaste(event: KeyboardEvent) {
    console.log('past => ', event);
  }

  /**
   * 滑鼠滾動事件
   */
  wheelChange(event: WheelEvent) {
    console.log(event);

    // TODO 處理滾動時要做的事情

    // 此作法可以攔截事件，避免事件繼續往 body 傳
    // 如果沒有做此作法，那在滾動滑鼠滾輪時，會造成 body 跟著一起滾動
    event.preventDefault();
  }


  userKeydown(event: KeyboardEvent) {
    // console.log('user keydown =>', event);
    if (!event.shiftKey && (event.key === 'Enter' || event.key === 'Tab')) {
      event.preventDefault();
      console.log('抓取到使用者組合鍵');
    }

    // if (event.ctrlKey && (event.key === 'KeyA' || event.key === 'KeyR')) {

    // }

    // event.preventDefault();
  }

  getData() {
    return this.http.get('http://localhost:4200/api/articles.json');
  }
}
