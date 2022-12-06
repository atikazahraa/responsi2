import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren:() => import('./pengeluaran/pengeluaran.module').then( m => m.PengeluaranPageModule),
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'pengeluaran',
    loadChildren: () => import('./pengeluaran/pengeluaran.module').then( m => m.PengeluaranPageModule)
  },
  {
    path: 'pengeluaran-tambah',
    loadChildren: () => import('./pengeluaran-tambah/pengeluaran-tambah.module').then( m => m.PengeluaranTambahPageModule)
  },
  {
    path: 'pengeluaran-edit/:id',
    loadChildren: () => import('./pengeluaran-edit/pengeluaran-edit.module').then( m => m.PengeluaranEditPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
