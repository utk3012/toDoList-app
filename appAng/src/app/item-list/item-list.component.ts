import { Component, OnInit } from '@angular/core';
import {List} from "../list.model";
import {ViewListService} from "../view-list.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  private items: List[] = [];
  constructor(private viewListService: ViewListService) { }

  ngOnInit() {
    this.getAllList();
  }

  getAllList() {
    this.viewListService.getList()
      .subscribe(
        (lists) => {
          // console.log(lists);
          this.items = lists;
        },
      (error) => console.log(error)
      );
  }

  onDelete(list: List) {
    this.viewListService.onDelete(list._id)
      .subscribe(
        (resp) => {
          console.log(resp);
          this.items.splice(this.items.indexOf(list),1);
        },
        (error) => console.log(error)
      );
  }
  onAddList(list: List) {
    this.items.push(list);
  }
}
