import {Component, Output,EventEmitter} from '@angular/core';
@Component({

    selector:'app-header',
    templateUrl:'./header.component.html'


})
export class HeaderComponent{

    @Output() selectEvent=new EventEmitter<string>();

    onSelect(selected:string){

        this.selectEvent.emit(selected);

    }

}