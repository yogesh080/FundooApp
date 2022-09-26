import { Component, Input, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;

  @Input() NotesArray: any;

  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dataService: DataServiceService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }
   

  

  ngOnInit(): void {
  }

  searchNote(event:any)
  {
      console.log("noteSearch",event.target.value)
      this.dataService.changeMessage(event.target.value)
  }

}
