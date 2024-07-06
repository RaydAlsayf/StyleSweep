import { Component, OnInit } from '@angular/core';
import { LanguageService } from './shared/services/language/language.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private languageService: LanguageService, private router: Router) { }

  title = 'StyleSweep';

  ngOnInit() {
    console.log('Hello, StyleSweep');

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.languageService.setInitialLanguage();
    });
  }

  changeLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}

