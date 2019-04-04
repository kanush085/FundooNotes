import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from "@angular/cdk/layout";
import { MatDialog, } from "@angular/material";
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
  message: string='Fundoo';
  Search: string;
  labelList: any;
  email: string;
  username:string;
  flag:boolean = true;
  private _mobileQueryListener: () => void;
  constructor(media: MediaMatcher,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar, changeDetectorRef: ChangeDetectorRef, ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.email = localStorage.getItem('email');
    this.username=localStorage.getItem('name')

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  signout(){  
    localStorage.clear()
    this.router.navigate(['login'])
  }
  refresh(): void {
    window.location.reload();
    
}
note(){
  this.message="Fundoo"
 
}

reminders(){
  this.message="Reminders"
}

trashBox(){
  this.message="Trash"
}
archive(){
  this.message="Archive"
}

}
