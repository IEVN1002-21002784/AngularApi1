import { Component } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';


@Component({
  selector: 'app-addmessa',
  standalone: true,
  imports: [],
  templateUrl: './addmessa.component.html',
  styles: ``
})
export class AddmessaComponent {

  constructor(public messajeService : MessageserviceService ) {}
}
