import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // the @output() annotation enable us to listen to the "featureSelected" in parent component "app-component".
  @Output() featureSelected = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
