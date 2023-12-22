import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localIt from '@angular/common/locales/it';
import { UcfirstPipe } from './ucfirst.pipe';

registerLocaleData(localIt);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UcfirstPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'angular pipe';
  brithDate: Date = new Date();
  lorem: string =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit vero, dolorum tempore culpa eligendi nemo porro cum qui magnam! Inventore harum, neque nobis perspiciatis fuga aperiam error eum. Vero, quasi.';
}
