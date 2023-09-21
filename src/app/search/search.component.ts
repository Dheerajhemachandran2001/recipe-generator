import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search:string=""
  @Output() seacrhEmitter=new EventEmitter<string>()
  @Output() randomEmitter=new EventEmitter()

  searchKey(event:any){
    this.search=event.target.value
  }
  
  emitSearch(){
    if(this.search!=="")
    this.seacrhEmitter.emit(this.search)
  }

  emitRandom(){
    this.randomEmitter.emit()
}

}
