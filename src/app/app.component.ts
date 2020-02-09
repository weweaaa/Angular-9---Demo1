import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

// Metadata(元數據、中繼資料) => 裝飾器 Decorator

// Angular 架構剖析
// templete <--> Metadata <--> component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';
  // data: any;
  data$: Observable<any>;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

    // 改為使用 將 Observable 傳到 templete 的作法，
    // 如果直接將 Observable  傳到 templete 使用 async 訂閱 http get Observable
    // 再載入畫面時，因為在 templete 我們有兩段使用到 data$ 的資料，這樣會造成兩次呼叫 http get
    // 原本在 directive 只會做一次的 subscribe，但是在 templete 兩次 data$ | async 就會有兩次的 subscribe
    // 所以如果要避免這種狀況，且又想把 Observable 傳到 templete 使用的話，
    // 可以在 Observable 後面加上 pipe()，在 pipe 裡面呼叫 Rxjs 的 share 的方法
    // 使用 Rxjs share 方法需要 import rxjs/operators
    this.data$ = this.getData().pipe(share());
    // this.getData().subscribe((value) => {
    //   this.data = value;
    // });
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


  /**
   * 抓取組合按鍵
   */
  userKeydown(event: KeyboardEvent) {
    // templete 事件寫法，必須使用以下寫法
    // keyup.control.a

    console.log('user keydown =>', event);

    // event.preventDefault();
  }

  getData() {
    return this.http.get('http://localhost:4200/api/articles.json');
  }
}
