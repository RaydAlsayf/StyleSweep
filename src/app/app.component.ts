import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LanguageService } from './services/language/language.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private languageService: LanguageService,
    private router: Router
  ) {}

  ngOnInit() {
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
