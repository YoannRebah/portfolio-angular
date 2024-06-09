import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navigation } from '../../../shared/models/navigation';

@Component({
  selector: 'app-list-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-footer.component.html',
  styleUrls: ['./list-footer.component.scss']
})
export class ListFooterComponent {
  footerLinks: Navigation[] = [
    {
      href: '#',
      html: "Accueil",
      ariaLabel: 'Accueil',
    },
    {
      href: '#intro',
      html: "Introduction",
      ariaLabel: 'Introduction',
    },
    {
      href: '#skills',
      html: "Compétences",
      ariaLabel: 'Compétences',
    },
    {
      href: '#tools-overview',
      html: "Logiciels",
      ariaLabel: 'Logiciels',
    },
    {
      href: '#notable-achievements',
      html: "Réalisations Notables",
      ariaLabel: 'Réalisations Notables',
    },
    {
      href: '#current-job',
      html: "Poste Actuel",
      ariaLabel: 'Poste Actuel',
    },
    {
      href: '#interests',
      html: "Centres d'intérêt",
      ariaLabel: 'Centres d\'intérêt',
    },
    {
      href: '#arcade-room',
      html: "Salle d'Arcade",
      ariaLabel: 'Salle d\'Arcade',
    },
    {
      href: '#contact',
      html: "Contact",
      ariaLabel: 'Contact',
    },
    {
      href: '#location',
      html: 'Localisation',
      ariaLabel: 'Localisation',
    },
    {
      href: '#references',
      html: 'Références & Inspirations',
      ariaLabel: 'Références & Inspirations',
    },
    {
      href: 'https://github.com/YoannRebah/portfolio-angular',
      html: 'Code Source (Git)',
      ariaLabel: 'Code Source (Git)',
      target: "_blank"
    },
  ];
}