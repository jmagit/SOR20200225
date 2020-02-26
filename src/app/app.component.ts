import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/my-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'curso en soria';

  constructor(private out: LoggerService) {
  }
  ngOnInit(): void {
    this.out.error('Esto es un error');
    this.out.warn('Esto es un warn');
    this.out.info('Esto es un info');
    this.out.log('Esto es un log');
  }


}
