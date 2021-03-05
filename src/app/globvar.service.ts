import { Injectable } from "@angular/core";
import { Notes } from "./notes";

@Injectable()
export class GlobvarService {
  private arrNotes: Notes[] = [];
  private tempNotes: Notes[] = []
  constructor() {}
  public getAllNotes() {
    return this.arrNotes;
  }
  public getAllFavNotes() {
    this.tempNotes = []
    for (var idx = 0; idx < this.arrNotes.length; idx++) {
      if (this.arrNotes[idx].getStatus() == true) {
        this.tempNotes.push(this.arrNotes[idx])
      }
    }
    return this.tempNotes
  }
  public getNotesIdx(judul: String) {
    for (var idx = 0; idx < this.arrNotes.length; idx++) {
      if (judul == this.arrNotes[idx].getJudul()) {
        return this.arrNotes[idx].getJudul();
      }
    }
  }
  public pushNotes(newNotes: Notes) {
    this.arrNotes.push(newNotes);
  }
  public setStatusGlobal(judul : String) {
    for (var idx = 0; idx < this.arrNotes.length; idx++) {
      if (judul == this.arrNotes[idx].getJudul()) {
        this.arrNotes[idx].setStatus()
      }
    }
  }
}
