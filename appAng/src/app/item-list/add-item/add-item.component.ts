import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ViewListService} from "../../view-list.service";
import {List} from "../../list.model";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Output() addList: EventEmitter<List> = new EventEmitter<List>();
  constructor(private viewListService: ViewListService) { }

  item: List;
  ngOnInit() {
  }

  onAdd(form: NgForm) {
    this.viewListService.saveList(form.value.title, form.value.desc)
      .subscribe(
        (response) => {
          console.log(response.text());
          if(response.status == 200) {
            this.item = {_id: response.text(), title: form.value.title, description: form.value.desc};
            form.reset();
            this.addList.emit(this.item);
          }
        },
        (error) => console.log(error)
      );
  }
}
