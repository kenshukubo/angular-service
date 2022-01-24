import { Component, OnInit, Input  } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.scss']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;

  ngOnInit(): void {
  }

}
