import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShrutiComponentComponent } from './shruti-component/shruti-component.component';
import { JigarDemoComponent } from './jigar-demo/jigar-demo.component';

import { FormControlDirective, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularHooksComponent } from './angular-hooks/angular-hooks.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DemoDirectiveDirective } from './directive/demo-directive.directive';
import { HttpClientModule } from '@angular/common/http';
import {BaseService} from './services/base.service';

import {StrutiDemoService} from './services/struti-demo.service';

import { BackgroudDirectiveDirective } from './directive/backgroud-directive.directive';
import { ParentNikunjComponent } from './parent-nikunj/parent-nikunj.component';
import { ChildNikunjComponent } from './child-nikunj/child-nikunj.component';
import { MultiplyPipe } from './multiply.pipe';

import {CanAuthServiceService} from './service/can-auth-service.service';
import { NikunjDirectivesDirective } from './directive/nikunj-directives.directive';
import { NIkunjServiceService } from './services/nikunj-service.service';
import { CategoryComponent } from './category/category.component';
import { ParentJayComponentComponent } from './parent-jay-component/parent-jay-component.component';
import { ChildJayComponentComponent } from './child-jay-component/child-jay-component.component';
import { TAParentComponent } from './ta-parent/ta-parent.component';
import { TAChildComponent } from './ta-child/ta-child.component';
import { JayDemoDirectivesDirective } from './directive/jay-demo-directives.directive';

import { JayServiceService } from './services/jay-service.service';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { TejasabduldirectiveDirective } from './directive/tejasabduldirective.directive';
import { TAServicesService } from './services/ta-services.service';
import { SunitaMayurServiceService } from './services/sunita-mayur-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShrutiComponentComponent,
    JigarDemoComponent,
    HeaderComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    AngularHooksComponent,
    RegistrationFormComponent,
    DemoDirectiveDirective,
    BackgroudDirectiveDirective,
    ParentNikunjComponent,
    ChildNikunjComponent,
    MultiplyPipe,
    NikunjDirectivesDirective,
    CategoryComponent,
    ParentJayComponentComponent,
    ChildJayComponentComponent,
    TAParentComponent,
    TAChildComponent,
    JayDemoDirectivesDirective,
    FormValidationComponent,
    TejasabduldirectiveDirective
   
  ],
  exports:[DemoDirectiveDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BaseService,StrutiDemoService,CanAuthServiceService,NIkunjServiceService, JayServiceService,TAServicesService,SunitaMayurServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
