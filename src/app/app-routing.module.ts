import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { SkillsComponent } from './skills/skills.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: '', component: SkillsComponent, outlet: 'test' },
  { path: '', component: MyWorkComponent },
  { path: '', component: FooterComponent },
  { path: '', component: SlideshowComponent },
  { path: '', component: ContactComponent },
  { path: '', component: AboutMeComponent },
  { path: 'imprint', component: ImprintComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
