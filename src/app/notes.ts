export class Notes {
  private judulNote : String;
  private isiNote : String;
  private tglDibuat : Date;
  private status : Boolean;

  constructor(judul : String, isi : String, tgl : Date) {
    this.judulNote = judul
    this.isiNote = isi
    this.tglDibuat = tgl
    this.status = false
  }

  public getJudul() {
    return this.judulNote
  }
  public getIsi() {
    return this.isiNote
  }
  public getTglDibuat() {
    return this.tglDibuat
  }
  public getStatus() {
    return this.status
  }
  public setStatus() {
    if (this.status) {
      this.status = false
    } else {
      this.status = true
    }
  }
}