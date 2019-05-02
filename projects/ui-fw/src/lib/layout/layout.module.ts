import { NgModule } from '@angular/core';
import { UIHeaderComponent } from './header/header.component';
import { UINavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  imports: [],
  declarations: [
    UIHeaderComponent
  ],
  exports: [
    UIHeaderComponent, UINavigationBarComponent
  ]
})
export class LayoutModule {}

export { UIHeaderComponent };
