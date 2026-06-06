import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/pankaj-Dev-Resume.pdf'; // Path to your PDF
    link.download = 'pankaj-Dev-Resume.pdf'; // Name for the downloaded file
    link.click();
  }

}
