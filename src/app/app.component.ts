import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/home', icon: 'home' },
    { title: 'Announcements', url: '/announcemet', icon: 'person' },
    { title: 'Amount Payable', url: '/amountpayable', icon: 'code' },
    { title: 'Monthly Expenses', url: '/MonthlyExpenses', icon: 'call' },
    { title: 'Average Water Consumption', url: '/ave', icon: 'call' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  private currentColor: string;
  constructor() {
    this.currentColor = 'light';
  }
  changeToDarkColor() {
    this.currentColor = 'dark';
}
}
