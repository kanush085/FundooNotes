import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from "@angular/cdk/layout";
import { MatDialog,} from "@angular/material";  
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { ChangeDetectorRef, OnDestroy } from "@angular/core";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  message: any;
  Search: string;
  labelList: any; 
  private _mobileQueryListener: () => void;
  constructor( media: MediaMatcher,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,changeDetectorRef: ChangeDetectorRef,) 
    {  this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

public Notes: boolean = false;

}
