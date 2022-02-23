import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', component: PageNotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
