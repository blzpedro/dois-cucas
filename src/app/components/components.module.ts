import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared.module';
import { CarouselComponent } from './main/components/carousel/carousel.component';
import { DoisCucasComponent } from './main/components/dois-cucas/dois-cucas.component';
import { SeloComponent } from './main/components/selo/selo.component';
import { IndicadosComponent } from './main/components/indicados/indicados.component';
import { CursosComponent } from './main/components/cursos/cursos.component';
import { DepoimentosComponent } from './main/components/depoimentos/depoimentos.component';
import { FaqComponent } from './main/components/faq/faq.component';
import { ContatoComponent } from './main/components/contato/contato.component';
import { DetoxComponent } from './cursos/detox/detox.component';
import { DocesComponent } from './cursos/doces/doces.component';
import { EspetoComponent } from './cursos/espeto/espeto.component';
import { PaoComponent } from './cursos/pao/pao.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    CarouselComponent,
    DoisCucasComponent,
    IndicadosComponent,
    CursosComponent,
    DepoimentosComponent,
    SeloComponent,   
    FaqComponent,
    ContatoComponent,
    FooterComponent,
    DetoxComponent,
    DocesComponent,
    EspetoComponent,
    PaoComponent
  ],

  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule
  ],

  entryComponents: [    
  ],

  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}]

})
export class ComponentsModule { }
