import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArtisanService } from '../artisants.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styleUrls: ['./artisan.component.css'],
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule],
  standalone: true,
})
export class ArtisanComponent implements OnInit {
  artisans: any[] = [];

  category = '';

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.getArtisansByCategory(this.category);
    });
  }

  getArtisansByCategory(category: string): void {
    this.artisanService
      .getArtisansByCategory(category)
      .subscribe((artisan) => {
        this.artisans = artisan;
      });
  }
}
