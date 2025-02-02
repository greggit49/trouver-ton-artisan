import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArtisanService } from '../artisants.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  etapes = [
    { texte: "Choisir la catégorie d'artisanat dans le menu" },
    { texte: 'Choisir un artisan' },
    { texte: "Contacter l'artisan via le formulaire de contact" },
    { texte: 'Réponse sous 48h' },
  ];
  artisan: any;

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.artisanService.getArtisantByTop().subscribe((data: any[]) => {
      this.artisan = data;
    });
  }
}