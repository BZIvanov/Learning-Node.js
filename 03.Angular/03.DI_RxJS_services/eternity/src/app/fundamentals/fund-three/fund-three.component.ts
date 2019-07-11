import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ObservableDemoService } from '../../services/observable-demo.service';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ett-fund-three',
  templateUrl: './fund-three.component.html',
  styleUrls: ['./fund-three.component.scss']
})
export class FundThreeComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput', { static: true }) myInput: ElementRef;

  constructor(private myService: ObservableDemoService) { }

  // uncomment below services to see the result in the console
  ngOnInit() {
    //this.myService.basicObservable();
    //this.myService.pipeObservable();
  }

  ngAfterViewInit() {
    fromEvent(this.myInput.nativeElement, 'keyup').pipe(
      map(() => this.myInput.nativeElement.value)
    ).subscribe((e) => {
      console.log(e);
    });
  }
}
