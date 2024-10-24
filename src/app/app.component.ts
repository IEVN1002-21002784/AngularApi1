import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemahComponent } from './tem/temah/temah.component';
import { TemapComponent } from './tem/temap/temap.component';
import { AddmessaComponent } from './tem/addmessa/addmessa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemapComponent,AddmessaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApi1';
}
