import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './content-hero.html',
  styleUrl: './content-hero.css',
})
export class ContentHeroComponent {
  @Input({ required: true }) currentPage!: string;
  @Input({ required: true }) subtitle!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input() homeRoute: string = '/';
}
