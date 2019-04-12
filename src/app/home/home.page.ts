import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cards = [
    {
      title: 'Title 1',
      subtitle: 'Subtitle 1',
      description: 'Description 1',
    },
    {
      title: 'Title 2',
      subtitle: 'Subtitle 2',
      description: 'Description 2',
    }
  ];

}
