import { Component, HostListener, OnInit, inject } from '@angular/core';
import { ModalComponent } from '../../base/modal/modal.component';
import { ModalService } from '../../../shared/services/components/modal.service';
import { AuthService } from '../../../shared/services/base/auth.service';

@Component({
  selector: 'app-modal-user-account',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './modal-user-account.component.html',
  styleUrl: './modal-user-account.component.scss'
})
export class ModalUserAccountComponent implements OnInit {
  isVisible: boolean = false;
  modalId: string = 'modal-user-account';
  userEmail!: string | undefined;
  userName!: string | undefined;
  modalService = inject(ModalService);
  authService = inject(AuthService);

  constructor() {}

  ngOnInit(): void {
    this.setUserInfos();
  }

  onPressKeyCtrlY(): void {
    this.isVisible = !this.isVisible;
    if(this.isVisible) {
      this.modalService.show(this.modalId);
    } else {
      this.modalService.hide(this.modalId);
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDownTerminal(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'y') {
      event.preventDefault();
      this.onPressKeyCtrlY();
    }
  }

  onClickLogout(): void {
    this.authService.logout();
    this.modalService.hide(this.modalId);
  }

  setUserInfos(): void {
    this.authService.user$.subscribe((user: { email: string; displayName: string; }) => {
      if(user) {
        if(user.email && user.displayName) {
          this.userEmail = user.email;
          this.userName = user.displayName;
        }
      }
    });
  }
}
