import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
       private domSanitizer: DomSanitizer,
       private matIconRegistry: MatIconRegistry,
     ) {
       this.matIconRegistry.addSvgIcon(
         'crown',
         this.domSanitizer.bypassSecurityTrustResourceUrl('src/assets/crown.svg'));}
}
