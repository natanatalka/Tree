/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Login_PhonePortrait } from '../pages/Login/PhonePortrait/Login';
import { Test_PhonePortrait } from '../pages/Test/PhonePortrait/Test';
import { Pony_PhonePortrait } from '../pages/Pony/PhonePortrait/Pony';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Login_PhonePortrait,
    Test_PhonePortrait,
    Pony_PhonePortrait
  ];
  static mapping = {
    'Login': {
      PhonePortrait: Login_PhonePortrait
    },
    'Test': {
      PhonePortrait: Test_PhonePortrait
    },
    'Pony': {
      PhonePortrait: Pony_PhonePortrait
    }
  }
}