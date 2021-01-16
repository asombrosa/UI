import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {
  @ViewChild('textarea') textarea: ElementRef;

  counter: number;
  counterArray: Array<number>;
  constructor() { }

  ngOnInit() {
    console.log(this.textarea);
    this.counter = 2;
    console.log("textarea.rows:", this.counter);
    this.counterArray = new Array(this.counter);
  }

  onEnter(thing: HTMLTextAreaElement) {
    console.log(thing);
    console.log(thing.rows);
    this.counter = ++thing.rows;
    console.log("textarea.rows:", this.counter);
    this.counterArray = new Array(this.counter);
  }

}
