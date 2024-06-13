import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationsFrService } from '../../../shared/services/locations-fr.service';
import { Region } from '../../../shared/models/locations-fr';
import { UtilitiesService } from '../../../shared/services/utilities.service';
import { templateMail } from '../../../shared/models/template-mail';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.scss'
})

export class FormContactComponent implements OnInit {
  locationsFr: Region = LocationsFrService.locationsFr;
  contactForm!: FormGroup;
  serviceId: string = 'service_5ru7fw9';
  templateId: string = 'template_d02jila';
  publicKey: string = 'nAi6Eim9qL5XMDKyr';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initContactForm();
  }

  initContactForm(): void {
    this.contactForm = this.formBuilder.group({
      "lastName": ['', Validators.required],
      "firstName": ['', Validators.required],
      "email": ['', [Validators.required, Validators.email]],
      "tel": ['', [Validators.required, Validators.pattern(UtilitiesService.regexValidateTelFr)]],
      "compagnyName": ['', Validators.required],
      "compagnyPost": [''],
      "compagnyLocation": [''],
      "message": ['']
    });
  }

  onSubmitContactForm(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    } else {
      const contactFormData = this.contactForm.value;
      const templateParams = {
        firstName: contactFormData.firstName,
        lastName: contactFormData.lastName,
        email: contactFormData.email,
        tel: contactFormData.tel,
        compagnyName: contactFormData.compagnyName,
        compagnyPost: contactFormData.compagnyPost,
        location: contactFormData.compagnyLocation,
        message: contactFormData.message
      };
      this.sendMail(templateParams);
    }
  }

  sendMail(templateParams: {}): void {
    console.log(templateParams)
    emailjs.send(this.serviceId, this.templateId, templateParams, { publicKey: this.publicKey})
    .then(() => {
        console.log('SUCCESS!');
      },
      (error) => console.log('FAILED...', (error as EmailJSResponseStatus).text)
    );
  }

}
