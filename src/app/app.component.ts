import { Component, OnInit, OnDestroy } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from '@layout/private/header/header.component';
import { Observable, Subscriber, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy,OnInit {
  title = 'gestionRdv-NourBrahim';
  letter : string = '';
  letter1 : string = '';
  letter2 : string = '';
  subscription1? : Subscription;
  subscription2? : Subscription;
  subscription3? : Subscription;
  helloObservable? : Observable<string>;

  constructor() {
    this.helloObservable = new Observable<string>((subscriber: Subscriber<string>) => {
      const message = 'Hello, Angular';
      for(let i=0; i<message.length; i++) {
        setTimeout(() => {
          subscriber.next(message[i]);
      }, 1000 * (i+1));
      }
      setInterval(() => {
        subscriber.complete();  
      }, 1000 * (message.length + 1));
    });
  }

  ngOnInit(): void {

    const helloObserver1$ ={
      next: (letter: string) => {
        this.letter += letter;
      },
      complete: () => {
        console.log('Observable 1 completed');
      }
    };

    const helloObserver2$ ={
      next: (letter: string) => {
        this.letter += letter;
      },
      complete: () => {
        console.log('Observable 2 completed');
      }
    };

    this.subscription1 = this.helloObservable?.subscribe(helloObserver1$);
    this.subscription2 = this.helloObservable?.subscribe(helloObserver2$);
    this.subscription3 = this.helloObservable?.subscribe({
      next: (letter: string) => {
        this.letter += letter;
      },
      complete: () => {
        console.log('Observable 3 completed');
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe();
    this.subscription3?.unsubscribe();
    console.log('All subscriptions unsubscribed');
  }
}
