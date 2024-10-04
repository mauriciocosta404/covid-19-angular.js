import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { CasesComponent } from "../../components/cases/cases.component";
import { AboutComponent } from "../../components/about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, CasesComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
