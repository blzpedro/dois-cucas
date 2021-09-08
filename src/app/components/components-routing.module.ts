import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetoxComponent } from './cursos/detox/detox.component';
import { DocesComponent } from './cursos/doces/doces.component';
import { EspetoComponent } from './cursos/espeto/espeto.component';
import { PaoComponent } from './cursos/pao/pao.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [  
  { path: '', component: HeaderComponent, 
    children: [{ path: '', component: MainComponent }], canActivate: []
  },
  { path: '50-melhores-receitas-sucos-detox', component: DetoxComponent },
  { path: 'paes-caseiros-na-sua-casa', component: PaoComponent },
  { path: 'mestre-do-espetinho', component: EspetoComponent },
  { path: 'dieta-de-doces-sem-acucar', component: DocesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
