import { Component, inject } from '@angular/core';
import { Anchor } from '../../../shared/models/anchor.interface';
import { MenuService } from '../../../shared/services/components/menu.service';
import { ModalService } from '../../../shared/services/components/modal.service';

@Component({
  selector: 'app-menu-content',
  standalone: true,
  imports: [],
  templateUrl: './menu-content.component.html',
  styleUrl: './menu-content.component.scss'
})

export class MenuContentComponent {
  menuService = inject(MenuService);
  modalService = inject(ModalService);
  menuLinks: Anchor[] = [
    {
      text: 'Accueil',
      href: '#',
      ariaLabel: 'Accueil',
    },
    {
      text: 'Introduction',
      href: '#intro',
      ariaLabel: 'Introduction',
    },
    {
      text: 'Compétences',
      href: '#skills',
      ariaLabel: 'Compétences',
    },
    {
      text: 'Réalisations Notables',
      href: '#notable-achievements',
      ariaLabel: 'Réalisations Notables',
    },
    {
      text: 'Logiciels & Outils',
      href: '#tools-overview',
      ariaLabel: 'Logiciels & Outils',
    },
    {
      text: 'Poste Actuel',
      href: '#current-job',
      ariaLabel: 'Poste Actuel',
    },
    {
      text: 'Localisation',
      href: '#location',
      ariaLabel: 'Localisation',
    },
    {
      text: 'Centres d\'intérêt',
      href: '#interests',
      ariaLabel: 'Centres d\'intérêt',
    },
    {
      text: 'Salle d\'Arcade',
      href: '#arcade-room',
      ariaLabel: 'Salle d\'Arcade',
    },
    {
      text: 'Formulaire de Contact',
      href: '#contact',
      ariaLabel: 'Formulaire de Contact',
    },
    {
      text: 'Les articles du blog',
      href: '#blog',
      ariaLabel: 'Les articles du blog',
    },
    {
      text: '<i class="fa-brands fa-github" aria-hidden="true"></i> Code source',
      href: 'https://github.com/YoannRebah/portfolio-angular',
      target: '_blank',
      ariaLabel: 'Code source (GitHub)',
    }
  ]

  onClickHideMenu(): void {
    this.menuService.hide();
  }

  onClickShowSettings(): void {
    this.modalService.show('modal-settings');
  }
}
