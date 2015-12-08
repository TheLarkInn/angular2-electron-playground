import {Component} from 'angular2/angular2';

@Component({
  selector: 'my-app',
  templateUrl: './components/app/app.html'
})
export class MyApp {
  constructor() {

  }

  ngOnInit() {
    console.log('NG INIT');
  }
}
