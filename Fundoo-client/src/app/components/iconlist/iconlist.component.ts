import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NoteService } from 'src/app/service/noteservice/note.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-iconlist',
  templateUrl: './iconlist.component.html',
  styleUrls: ['./iconlist.component.scss']
})
export class IconlistComponent implements OnInit {
  @Input() doarchive: boolean;
  @Input() more;
  @Input() card: any


  @Output() archivedCard = new EventEmitter()
  @Output() unarchiveCard = new EventEmitter();
  @Output() trashCard = new EventEmitter();
  @Output() archivednoteCard = new EventEmitter();
  constructor(private noteService: NoteService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  doArchive(card) {
    // console.log(this.card, "cardddd")
    // console.log(card._id, "cardidddddddddd")
    if (card == undefined) {
      this.archivednoteCard.emit(true)
    }
    else {
      this.noteService.archiveNote({
        "archive": true,
        "noteID": [card._id]
      }).subscribe(data => {
        console.log(data, "dataaaaaaaaaaaaaaaaaaaaa")
        this.cardArchive(card)
        this.snackBar.open("Note Archived", "Undo", { duration: 5000 })
      }), err => console.log(err)

    }
  }

  cardArchive(card) {
    this.archivedCard.emit(card)
  }



  doUnArchive(card) {
    this.noteService.archiveNote({
      "archive": false,
      "noteID": [card._id]
    }).subscribe(data => {
      this.notArchive(card)
    }), err => console.log(err)
  }
  notArchive(card) {
    this.unarchiveCard.emit(card)
  }

  deleteNote(card) {
    this.noteService.trashNote({
      "trash": true,
      "noteID": [card._id]
    }).subscribe(data => {
      console.log(data, "daaaaaaaaaaaaaaaaaaaaaaaaa");
      this.deletCard(card)
    }), err => console.log(err);

  }

  deletCard(card) {
    this.trashCard.emit(card)
  }
}