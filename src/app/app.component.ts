import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  titleComment: string;
  greeting: string;
  titleClasses: { [ name: string ]: boolean };

  constructor() {
    this.title = 'angular-starter';
    this.titleComment = 'This is awesome!';
    this.greeting = '';
    this.titleClasses = {
      italic: true,
      hoverable: true
    };
  }

  onTitleClicked(event: MouseEvent) {
    console.log('The title was clicked', event);
  }

  hello(name: string): string {
    return `Hello ${name}`;
  }

}
