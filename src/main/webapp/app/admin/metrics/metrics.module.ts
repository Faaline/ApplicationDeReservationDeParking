import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplicationDeGestionBoutiqueSharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [ApplicationDeGestionBoutiqueSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent],
})
export class MetricsModule {}
