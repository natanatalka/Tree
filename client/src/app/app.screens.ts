/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Login_PhonePortrait } from '../pages/Login/PhonePortrait/Login';
import { Test_PhonePortrait } from '../pages/Test/PhonePortrait/Test';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Login_PhonePortrait,
    Test_PhonePortrait
  ];
  static mapping = {
    'Login': {
      PhonePortrait: Login_PhonePortrait
    },
    'Test': {
      PhonePortrait: Test_PhonePortrait
    }
  }
}