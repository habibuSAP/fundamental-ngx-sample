import { Component, ViewEncapsulation } from '@angular/core';
import { ShellbarMenuItem, ShellbarUser, ShellbarUserMenu } from '@fundamental-ngx/core';

@Component({
  selector: 'fd-shellbar-side-nav-example',
  templateUrl: './shellbar-side-nav-example.component.html',
  styleUrls: ['./shellbar-side-nav-example.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShellbarSideNavExampleComponent {
  condensed = false;
  user: ShellbarUser =
      {
        fullName: 'Habibu Abdullahi',
        colorAccent: 7
      };

  userMenu: ShellbarUserMenu[] = [
    {
      text: 'Settings',
      callback: this.settingsCallback,
    },
    {
      text: 'Logout',
      callback: this.logoutCallback,
    },
  ];

  settingsCallback(): void {
    alert('Setting cliked');
  }

  logoutCallback(): void {
    alert('Logout clicked');
  }

  productMenuControl = 'Administration Cockpit';

  productMenuItems: ShellbarMenuItem[] = [
    {
      name: 'Administration Cockpit',
      callback: () => {
        alert('Admin cockpit clicked');
      },
    },
    {
      name: 'Product Cockpit',
      callback: () => {
        alert('Product clicked');
      },
    },
    {
      name: 'Adaptive Search',
      callback: () => {
        alert('Search clicked');
      },
    },
    {
      name: 'Extensions',
      callback: () => {
        alert('Extensions  clicked');
      },
    },
  ];
}
