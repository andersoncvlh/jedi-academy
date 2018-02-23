import { Component } from '@angular/core';

@Component({
  selector: 'jedi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  luke = {name: 'Luke', isJedi: true, temple: 'Coruscant'};
  han = {name: 'Han Sole', isJedi: false};
  leia = {name: 'Luke', isJedi: true, temple: 'Coruscant'};
}
