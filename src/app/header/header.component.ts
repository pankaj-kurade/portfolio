import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/pankajKurade.pdf'; // Path to your PDF
    link.download = 'PankajKurade.pdf'; // Name for the downloaded file
    link.click();
  }

}
