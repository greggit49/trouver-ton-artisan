import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-page-found',
  standalone: true,
  imports: [
    HeaderComponent, FooterComponent
  ],
  templateUrl: './page-found.component.html',
  styleUrl: './page-found.component.css'
})
export class PageFoundComponent {

}
