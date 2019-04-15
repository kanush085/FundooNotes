import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { NoteService } from "../../service/noteservice/note.service"
import { DataService } from "../../service/dataservice/data.service"
import { MatDialog } from '@angular/material';
import { UpdatenoteComponent } from "../updatenote/updatenote.component";

export interface DialogData {
  array: [];

}

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  @Input() cards;
  @Input() archived
  @Input() more: string;
  @Input() trash

  @Output() Pinned=new EventEmitter();
  @Output() UnPinned=new EventEmitter();
  message: string;
  pinned=true
  view;
  side = false;
  grid = {
    listView: this.view,
    gridView: !this.view
  }
  sidenave = {
    open: this.side,
    close: !this.side
  }

  constructor(private noteService: NoteService, private data: DataService, public dialog: MatDialog) { }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      console.log('message from service ', message);
      this.view = message;
      this.grid.listView = !this.view;
      this.grid.gridView = this.view;
    })

    this.data.sidenavMessage.subscribe(data => {
      console.log('data from data service', data);
      this.side = data;
      this.sidenave.open = this.side;
      this.sidenave.close = !this.side;

    }, err => {
      console.log(err);

    })
  }
  openDialog(array) {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '600px',
      data: { array }

    });
    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed', result);


      this.noteService.editTitle({
        "noteID": result['array']._id,
        "title": result['array'].title
      }).subscribe(result => {
        console.log(result);
      })
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog is closed after editing the description");
      this.noteService.editDescription({
        "noteID": result['array']._id,
        "description": result['array'].description
      }).subscribe(result => {
        console.log(result)
      })
    })


  }

  archive(array) {
    let ind = this.cards.indexOf(array);
    this.cards.splice(ind, 1);
  }

  unarchived($event) {
    this.archive($event);
  }

  deleteForever(array) {
    this.noteService.deleteNote({
      "noteID": [array._id]
    }).subscribe(data => {
      let ind = this.cards.indexOf(array)
      this.cards.splice(ind, 1)
    })
  }
  restore(array) {
    this.noteService.trashNote({
      "trash": false,
      "noteID": [array._id]
    }).subscribe(data => {
      let ind = this.cards.indexOf(array)
      this.cards.splice(ind, 1)
    })
  }
  trashcard($event) {
    let ind = this.cards.indexOf($event)
    this.cards.splice(ind, 1)
  }


doPinned(array){
  this.pinned=!this.pinned
  console.log("pinned",this.pinned);
  console.log("array id",[array._id]);
  
  this.noteService.doPinned({
  "pinned":true,
  "noteID":[array._id]
  }).subscribe( data=>{
    console.log("data in pinned",data);
    this.unPinbar(array)
  })
}

pinbar(array){
   array.pinned=false
  this.Pinned.emit(array)
}

doUnPinned(array){
  this.pinned=!this.pinned
  this.noteService.doPinned({
    "pinned":false,
    "noteID":[array._id]
  }).subscribe(data=>{
    console.log("data in unpinned",data);

    this.pinbar(array)
  })
}


unPinbar(array){
 array.pinned=true
this.UnPinned.emit(array)
}
}
