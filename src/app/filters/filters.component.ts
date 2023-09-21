import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output() filterEmitter=new EventEmitter<string>()

  emitFilter(filter:string){
    this.filterEmitter.emit(filter)
  }
}
