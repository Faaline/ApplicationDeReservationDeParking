import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplicationDeGestionBoutiqueSharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [ApplicationDeGestionBoutiqueSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent],
})
export class DocsModule {}
