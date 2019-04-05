import { Component, OnInit } from '@angular/core';
import { NoteService } from "../../service/noteservice/note.service"
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private noteService: NoteService) { }
  cards: any[]=[]
  Allcards: any[]=[]
  addnote: any
  ngOnInit() {
    this.getCards()
  }
grid='column'

  getCards() {
    this.noteService.getNote().subscribe(data => {
      console.log("------------", data);
      var carddata = data['data']
      this.cards=[];
      for (let i = 0; i < carddata.length; i++) {
     this.cards.push(carddata[i])
      }
      console.log("array cards",this.cards);
      
      this.cards = this.cards.reverse();
    })
  }

  recieveMessage($event) {
    this.addnote = $event;
    console.log(this.addnote, "......addnote")
    this.Allcards.push(this.addnote);
    this.ngOnInit();
  }

//   gridChange(){
//     console.log(this.grid);
    
// if(this.grid=='column'){
//   this.grid='row wrap'
// }else{
//   this.grid='column'
// }



  

}
