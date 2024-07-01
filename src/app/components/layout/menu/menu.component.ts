import { Component, OnInit, OnDestroy, HostListener, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from '../../../shared/services/components/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent implements OnInit, OnDestroy {
  isVisible: boolean = false;
  isVisibleSubscription!: Subscription;
  menuService = inject(MenuService);

  ngOnInit(): void {
    this.subscribeIsVisible();
  }

  ngOnDestroy(): void {
    this.unsubscribeIsVisible();
  }

  subscribeIsVisible(): void {
    this.isVisibleSubscription = this.menuService.isVisible$.subscribe({
      next: (isVisible) => {
        this.isVisible = isVisible;
      },
      error: (e) => console.error('error subscribeIsVisible : ', e)
    })
  }

  unsubscribeIsVisible(): void {
    if(this.isVisibleSubscription) {
      this.isVisibleSubscription.unsubscribe();
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDownTerminal(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'm') {
      event.preventDefault();
      if(!this.isVisible) {
        this.menuService.show();
      } else {
        this.menuService.hide();
      }
    }
  }
}
