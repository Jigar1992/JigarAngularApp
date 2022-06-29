import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { JigarDemoComponent } from './jigar-demo/jigar-demo.component';
import { ShrutiComponentComponent } from './shruti-component/shruti-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { AngularHooksComponent } from './angular-hooks/angular-hooks.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ParentNikunjComponent } from './parent-nikunj/parent-nikunj.component';
import { ParentJayComponentComponent } from './parent-jay-component/parent-jay-component.component';
import {CanAuthServiceService} from './service/can-auth-service.service';
import { TAParentComponent } from './ta-parent/ta-parent.component';
import { ChildJayComponentComponent } from './child-jay-component/child-jay-component.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { MTDemoComponent } from './mtdemo/mtdemo.component';
import { MKFormValidationComponent } from './mk-form-validation/mk-form-validation.component';


const routes: Routes = [
  { path:  '', redirectTo: '/regForm', pathMatch: 'full',   }, // Default
  { path:  'MayankKaran', component:  MTDemoComponent },
  { path:  'jayPage', component:  ChildJayComponentComponent },
  { path:  'formValidation', component:  FormValidationComponent },
  { path:  'MKValidation1', component:  MKFormValidationComponent },
  { path:  'TejasAbdullPage', component: TAParentComponent, canActivate:[CanAuthServiceService] },
  { path:  'productShruti', component: ProductListComponent  },
  { path:  'productShruti/:id', component: ProductListComponent  },
  { path:  'jigarDemo', component: JigarDemoComponent  },
  { path:  'shruti', component: ShrutiComponentComponent, canActivate:[CanAuthServiceService]  },
  { path:  'parent', component: ParentComponentComponent,canActivate:[CanAuthServiceService]  },
  { path:  'angularHooks', component: AngularHooksComponent,canActivate:[CanAuthServiceService]  },
  { path:  'regForm', component: RegistrationFormComponent ,canActivate:[CanAuthServiceService] },
  { path:  'NikunjParent', component: ParentNikunjComponent, canActivate:[CanAuthServiceService]  },
  { path: '**', component: ParentComponentComponent },
 




  

  
  // {path: '', pathMatch: 'full', redirectTo: 'contacts'},
  // {path: 'contacts', pathMatch: 'full', component: ProductListComponent  },
  // { path:  'product', component: ProductListComponent  },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  // children: [ //Nesting routes
  //   {
  //     path: 'child-a', // child route path
  //     component: ChildAComponent, // child route component that the router renders
  //   },
  //   {
  //     path: 'child-b',
  //     component: ChildBComponent, // another child route component that the router renders
  //   },

  // <a [routerLink]="['/crisis-center']">Crisis Center</a>
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
