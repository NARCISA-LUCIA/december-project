import { Component } from '@angular/core';
import { LocalStorageService } from './service/localstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'december-project';

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.localStorageService.setCompanyId(23);
    this.localStorageService.setProjectId(14);
  }
}
