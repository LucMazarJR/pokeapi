import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-layout',
  imports: [Header, RouterModule],
  templateUrl: './layout.html',
})
export class Layout {

}
