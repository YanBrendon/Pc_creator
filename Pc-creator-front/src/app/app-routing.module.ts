import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from './check-login.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [CheckLoginGuard]
  },
  {
    path: '',
    redirectTo: 'logon',
    pathMatch: 'full'
  },
  {
    path: 'montagem/:id',
    loadChildren: () => import('./montagem/montagem.module').then(m => m.MontagemPageModule),
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'processador/:id',
    loadChildren: () => import('./processador/processador.module').then(m => m.ProcessadorPageModule),
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'placa-mae/:id',
    loadChildren: () => import('./placa-mae/placa-mae.module').then(m => m.PlacaMaePageModule),
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'memoria-ran/:id',
    loadChildren: () => import('./memoria-ran/memoria-ran.module').then(m => m.MemoriaRanPageModule),
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'armazenamento/:id',
    loadChildren: () => import('./armazenamento/armazenamento.module').then(m => m.ArmazenamentoPageModule),
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'view-placa-mae',
    loadChildren: () => import('./view-placa-mae/view-placa-mae.module').then(m => m.ViewPlacaMaePageModule),
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'view-processador',
    loadChildren: () => import('./view-processador/view-processador.module').then(m => m.ViewProcessadorPageModule),
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'view-armazenamento',
    loadChildren: () => import('./view-armazenamento/view-armazenamento.module').then(m => m.ViewArmazenamentoPageModule),
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'view-memoria-ram',
    loadChildren: () => import('./view-memoria-ram/view-memoria-ram.module').then(m => m.ViewMemoriaRamPageModule),
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'maquina',
    loadChildren: () => import('./maquina/maquina.module').then(m => m.MaquinaPageModule),
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'usuario-registro',
    loadChildren: () => import('./usuario-registro/usuario-registro.module').then(m => m.UsuarioRegistroPageModule)
  },
  {
    path: 'logon',
    loadChildren: () => import('./logon/logon.module').then(m => m.LogonPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
