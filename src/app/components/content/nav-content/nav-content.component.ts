import { Component, OnInit, inject } from '@angular/core';
import { Anchor } from '../../../shared/models/anchor.interface';
import { ModalService } from '../../../shared/services/components/modal.service';
import { AuthService } from '../../../shared/services/base/auth.service';
import { LoaderHourglassService } from '../../../shared/services/components/loader-hourglass.service';
import { MenuService } from '../../../shared/services/components/menu.service';

@Component({
  selector: 'app-nav-content',
  standalone: true,
  imports: [],
  templateUrl: './nav-content.component.html',
  styleUrl: './nav-content.component.scss'
})

export class NavContentComponent implements OnInit{
  navAnchors: Anchor[] = [
    {
      href: '#',
      classNames: 'text-base',
      iconClassNames: 'fa-solid fa-home',
      ariaLabel: 'Accueil',
      text: 'Accueil',
    },
    {
      href: '#skills',
      classNames: 'text-sm',
      iconClassNames: 'fa-solid fa-briefcase',
      text: 'Compétences',
      ariaLabel: 'Compétences',
    },
    {
      href: '#notable-achievements',
      classNames: 'text-sm',
      iconClassNames: 'fa-solid fa-diagram-project',
      text: 'Réalisations',
      ariaLabel: 'Réalisations',
    },
    {
      href: '#contact',
      classNames: 'text-sm',
      iconClassNames: 'fa-solid fa-phone',
      text: 'Contact',
      ariaLabel: 'Contact',
    },
    {
      href: 'https://github.com/YoannRebah/portfolio-angular',
      classNames: 'text-sm',
      iconClassNames: 'fa-brands fa-github',
      text: 'Git',
      target: '_blank',
      ariaLabel: 'Code source',
      tooltip: 'Code source',
    },
  ];
  userLoggedIn: boolean = false;
  userName!: string | undefined;
  userNameFirstLetter!: string | undefined;
  modalService = inject(ModalService);
  authService = inject(AuthService);
  loaderHourglassService = inject(LoaderHourglassService);
  menuService = inject(MenuService);

  constructor() {}

  ngOnInit(): void {
    this.checkUserConnectionStatus();
  }

  onClickShowSettings(): void {
    this.modalService.show('modal-settings');
  }

  onClickShowUserAccount(): void {
    this.modalService.show('modal-user-account');
  }

  onClickLoginRegister(): void {
    this.loaderHourglassService.show();
  }

  onClickShowMenu(): void {
    this.menuService.show();
  }

  checkUserConnectionStatus(): void {
    this.authService.user$.subscribe((user: { email: string; displayName: string; }) => {
      if(user) {
        this.authService.currentUserSignal.set({
          email: user.email!,
          username: user.displayName!
        });
        this.userName = this.authService.currentUserSignal()?.username;
        if(this.userName) {
          this.userNameFirstLetter = this.userName.substring(0, 1);
        }
        this.userLoggedIn = true;
      } else {
        this.authService.currentUserSignal.set(null);
        this.userLoggedIn = false;
      }
    });
  }

}