import { CommonModule } from '@angular/common';
import { Component, SecurityContext } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ArtisanService } from '../artisants.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, RouterOutlet],
})
export class HeaderComponent {
  term: string = '';
  artisans: any[] = [];

  constructor(
    private artisanService: ArtisanService,
    private sanitizer: DomSanitizer
  ) {}

  search() {
    const sanitizedTerm = this.sanitizer.sanitize(
      SecurityContext.HTML,
      this.term
    );

    if (sanitizedTerm) {
      this.artisanService
        .searchArtisans(sanitizedTerm)
        .subscribe((artisans) => {
          this.artisans = artisans;
        });
    } else {
      console.warn(
        "Le terme de recherche a été désinfecté et n'est pas valide."
      );
      this.artisans = [];
    }
  }
}

