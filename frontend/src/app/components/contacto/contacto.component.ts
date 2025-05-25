import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-contacto',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  faqOpen: boolean[] = [false, false, false];

  toggleFaq(index: number) {
    this.faqOpen[index] = !this.faqOpen[index];}
  protected readonly faEnvelope = faEnvelope;
  protected readonly faPhone = faPhone;
  protected readonly faLocationDot = faLocationDot;
}
