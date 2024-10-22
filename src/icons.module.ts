import { NgModule } from '@angular/core';
import { LucideAngularModule, icons } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick(icons)],
  exports: [LucideAngularModule]
})
export class IconsModule { }
