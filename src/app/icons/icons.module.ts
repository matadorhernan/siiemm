import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allIcons } from 'ng-bootstrap-icons/icons';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';

@NgModule({
  declarations: [],
  imports: [CommonModule, BootstrapIconsModule.pick(allIcons)],
  exports: [BootstrapIconsModule],
})
export class IconsModule {}
