import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';

export const ERROR_LEVEL = new InjectionToken<number>('ERROR_LEVEL');

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private nivel: number = 99;

  constructor(@Optional() @Inject(ERROR_LEVEL) nivel: number) {
    if (nivel != null) {
      this.nivel = nivel;
    }
  }

  public error(msg: string): void {
    if (this.nivel > 0) {
      console.error(msg);
    }
  }
  public warn(msg: string): void {
    if (this.nivel > 1) {
      console.warn(msg);
    }
  }
  public info(msg: string): void {
    if (this.nivel > 2) {
      // tslint:disable-next-line: no-console
      if (console.info) {
        // tslint:disable-next-line: no-console
        console.info(msg);
      } else {
        console.log(msg);
      }
    }
  }
  public log(msg: string): void {
    if (this.nivel > 3) {
      console.log(msg);
    }
  }
}
