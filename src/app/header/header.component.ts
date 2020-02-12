import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() titleName: string;

  // 錯誤的事件宣告方式
  // @Output() changeTitle: EventEmitter<string>;
  // 要實際 new 出事件物件出來
  @Output() changeTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if (this.titleName === undefined) {
      this.titleName = '記載著 Will 在網路世界的學習心得與技術分享';
    }
  }

  clickTest(event: MouseEvent) {
    console.log(event);
    if (event.metaKey === true) {
      console.log('使用者組合了 windows 鍵');
    } else if (event.altKey === true) {
      console.log('使用者組合了 alt 鍵');
    }
  }

  changeTitleName() {
    this.changeTitle.emit(this.titleName + '!');
  }
}
