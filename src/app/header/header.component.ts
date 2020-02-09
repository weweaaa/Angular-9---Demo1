import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickTest(event: MouseEvent) {
    console.log(event);
    if (event.metaKey === true) {
      console.log('使用者組合了 windows 鍵');
    } else if (event.altKey === true) {
      console.log('使用者組合了 alt 鍵');
    }
  }
}
