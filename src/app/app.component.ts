import { Component } from '@angular/core';
import { JournalComponent } from './journal/journal.component';

@Component({
  selector: 'app-root',
  imports: [JournalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-journal';
}
