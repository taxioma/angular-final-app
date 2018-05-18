import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {FieldSettings} from '../field-settings';

@Component({
  selector: 'app-form-settings',
  templateUrl: './form-settings.component.html',
  styleUrls: ['./form-settings.component.css']
})
export class FormSettingsComponent implements OnInit {
  dataSource: MatTableDataSource<FieldSettings> = new MatTableDataSource();
  public displayedColumns: ['fieldName', 'fieldValue', 'fieldType'];

  constructor() { }

  ngOnInit() {
  }

}
