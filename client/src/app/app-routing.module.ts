import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {MainWindowComponent} from './views/main-window/main-window.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {PageNotFoundComponent} from './views/page-not-found/page-not-found.component';
import {UserTableComponent} from './views/modules/user/user-table/user-table.component';
import {UserFormComponent} from './views/modules/user/user-form/user-form.component';
import {UserDetailComponent} from './views/modules/user/user-detail/user-detail.component';
import {UserUpdateFormComponent} from './views/modules/user/user-update-form/user-update-form.component';
import {RoleTableComponent} from './views/modules/role/role-table/role-table.component';
import {RoleFormComponent} from './views/modules/role/role-form/role-form.component';
import {RoleDetailComponent} from './views/modules/role/role-detail/role-detail.component';
import {RoleUpdateFormComponent} from './views/modules/role/role-update-form/role-update-form.component';
import {ChangePasswordComponent} from './views/modules/user/change-password/change-password.component';
import {ResetPasswordComponent} from './views/modules/user/reset-password/reset-password.component';
import {ChangePhotoComponent} from './views/modules/user/change-photo/change-photo.component';
import {MyAllNotificationComponent} from './views/modules/user/my-all-notification/my-all-notification.component';
import {ItemTableComponent} from './views/modules/item/item-table/item-table.component';
import {ItemFormComponent} from './views/modules/item/item-form/item-form.component';
import {ItemDetailComponent} from './views/modules/item/item-detail/item-detail.component';
import {ItemUpdateFormComponent} from './views/modules/item/item-update-form/item-update-form.component';
import {PurchaseTableComponent} from './views/modules/purchase/purchase-table/purchase-table.component';
import {PurchaseFormComponent} from './views/modules/purchase/purchase-form/purchase-form.component';
import {PurchaseDetailComponent} from './views/modules/purchase/purchase-detail/purchase-detail.component';
import {PurchaseUpdateFormComponent} from './views/modules/purchase/purchase-update-form/purchase-update-form.component';
import {CustomerpaymentTableComponent} from './views/modules/customerpayment/customerpayment-table/customerpayment-table.component';
import {CustomerpaymentFormComponent} from './views/modules/customerpayment/customerpayment-form/customerpayment-form.component';
import {CustomerpaymentDetailComponent} from './views/modules/customerpayment/customerpayment-detail/customerpayment-detail.component';
import {CustomerpaymentUpdateFormComponent} from './views/modules/customerpayment/customerpayment-update-form/customerpayment-update-form.component';
import {EmployeeTableComponent} from './views/modules/employee/employee-table/employee-table.component';
import {EmployeeFormComponent} from './views/modules/employee/employee-form/employee-form.component';
import {EmployeeDetailComponent} from './views/modules/employee/employee-detail/employee-detail.component';
import {EmployeeUpdateFormComponent} from './views/modules/employee/employee-update-form/employee-update-form.component';
import {DisposalTableComponent} from './views/modules/disposal/disposal-table/disposal-table.component';
import {DisposalFormComponent} from './views/modules/disposal/disposal-form/disposal-form.component';
import {DisposalDetailComponent} from './views/modules/disposal/disposal-detail/disposal-detail.component';
import {DisposalUpdateFormComponent} from './views/modules/disposal/disposal-update-form/disposal-update-form.component';
import {SupplierpaymentTableComponent} from './views/modules/supplierpayment/supplierpayment-table/supplierpayment-table.component';
import {SupplierpaymentFormComponent} from './views/modules/supplierpayment/supplierpayment-form/supplierpayment-form.component';
import {SupplierpaymentDetailComponent} from './views/modules/supplierpayment/supplierpayment-detail/supplierpayment-detail.component';
import {SupplierpaymentUpdateFormComponent} from './views/modules/supplierpayment/supplierpayment-update-form/supplierpayment-update-form.component';
import {SaleTableComponent} from './views/modules/sale/sale-table/sale-table.component';
import {SaleFormComponent} from './views/modules/sale/sale-form/sale-form.component';
import {SaleDetailComponent} from './views/modules/sale/sale-detail/sale-detail.component';
import {SaleUpdateFormComponent} from './views/modules/sale/sale-update-form/sale-update-form.component';
import {CustomerreturnTableComponent} from './views/modules/customerreturn/customerreturn-table/customerreturn-table.component';
import {CustomerreturnFormComponent} from './views/modules/customerreturn/customerreturn-form/customerreturn-form.component';
import {CustomerreturnDetailComponent} from './views/modules/customerreturn/customerreturn-detail/customerreturn-detail.component';
import {CustomerreturnUpdateFormComponent} from './views/modules/customerreturn/customerreturn-update-form/customerreturn-update-form.component';
import {PurchaseorderTableComponent} from './views/modules/purchaseorder/purchaseorder-table/purchaseorder-table.component';
import {PurchaseorderFormComponent} from './views/modules/purchaseorder/purchaseorder-form/purchaseorder-form.component';
import {PurchaseorderDetailComponent} from './views/modules/purchaseorder/purchaseorder-detail/purchaseorder-detail.component';
import {PurchaseorderUpdateFormComponent} from './views/modules/purchaseorder/purchaseorder-update-form/purchaseorder-update-form.component';
import {SupplierTableComponent} from './views/modules/supplier/supplier-table/supplier-table.component';
import {SupplierFormComponent} from './views/modules/supplier/supplier-form/supplier-form.component';
import {SupplierDetailComponent} from './views/modules/supplier/supplier-detail/supplier-detail.component';
import {SupplierUpdateFormComponent} from './views/modules/supplier/supplier-update-form/supplier-update-form.component';
import {SupplierreturnTableComponent} from './views/modules/supplierreturn/supplierreturn-table/supplierreturn-table.component';
import {SupplierreturnFormComponent} from './views/modules/supplierreturn/supplierreturn-form/supplierreturn-form.component';
import {SupplierreturnDetailComponent} from './views/modules/supplierreturn/supplierreturn-detail/supplierreturn-detail.component';
import {SupplierreturnUpdateFormComponent} from './views/modules/supplierreturn/supplierreturn-update-form/supplierreturn-update-form.component';
import {CustomerTableComponent} from './views/modules/customer/customer-table/customer-table.component';
import {CustomerFormComponent} from './views/modules/customer/customer-form/customer-form.component';
import {CustomerDetailComponent} from './views/modules/customer/customer-detail/customer-detail.component';
import {CustomerUpdateFormComponent} from './views/modules/customer/customer-update-form/customer-update-form.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: MainWindowComponent,
    children: [

      {path: 'users', component: UserTableComponent},
      {path: 'users/add', component: UserFormComponent},
      {path: 'users/change-my-password', component: ChangePasswordComponent},
      {path: 'users/change-my-photo', component: ChangePhotoComponent},
      {path: 'users/my-all-notifications', component: MyAllNotificationComponent},
      {path: 'users/reset-password', component: ResetPasswordComponent},
      {path: 'users/:id', component: UserDetailComponent},
      {path: 'users/edit/:id', component: UserUpdateFormComponent},

      {path: 'roles', component: RoleTableComponent},
      {path: 'roles/add', component: RoleFormComponent},
      {path: 'roles/:id', component: RoleDetailComponent},
      {path: 'roles/edit/:id', component: RoleUpdateFormComponent},

      {path: 'items', component: ItemTableComponent},
      {path: 'items/add', component: ItemFormComponent},
      {path: 'items/:id', component: ItemDetailComponent},
      {path: 'items/edit/:id', component: ItemUpdateFormComponent},

      {path: 'purchases', component: PurchaseTableComponent},
      {path: 'purchases/add', component: PurchaseFormComponent},
      {path: 'purchases/:id', component: PurchaseDetailComponent},
      {path: 'purchases/edit/:id', component: PurchaseUpdateFormComponent},

      {path: 'customerpayments', component: CustomerpaymentTableComponent},
      {path: 'customerpayments/add', component: CustomerpaymentFormComponent},
      {path: 'customerpayments/:id', component: CustomerpaymentDetailComponent},
      {path: 'customerpayments/edit/:id', component: CustomerpaymentUpdateFormComponent},

      {path: 'employees', component: EmployeeTableComponent},
      {path: 'employees/add', component: EmployeeFormComponent},
      {path: 'employees/:id', component: EmployeeDetailComponent},
      {path: 'employees/edit/:id', component: EmployeeUpdateFormComponent},

      {path: 'disposals', component: DisposalTableComponent},
      {path: 'disposals/add', component: DisposalFormComponent},
      {path: 'disposals/:id', component: DisposalDetailComponent},
      {path: 'disposals/edit/:id', component: DisposalUpdateFormComponent},

      {path: 'supplierpayments', component: SupplierpaymentTableComponent},
      {path: 'supplierpayments/add', component: SupplierpaymentFormComponent},
      {path: 'supplierpayments/:id', component: SupplierpaymentDetailComponent},
      {path: 'supplierpayments/edit/:id', component: SupplierpaymentUpdateFormComponent},

      {path: 'sales', component: SaleTableComponent},
      {path: 'sales/add', component: SaleFormComponent},
      {path: 'sales/:id', component: SaleDetailComponent},
      {path: 'sales/edit/:id', component: SaleUpdateFormComponent},

      {path: 'customerreturns', component: CustomerreturnTableComponent},
      {path: 'customerreturns/add', component: CustomerreturnFormComponent},
      {path: 'customerreturns/:id', component: CustomerreturnDetailComponent},
      {path: 'customerreturns/edit/:id', component: CustomerreturnUpdateFormComponent},

      {path: 'purchaseorders', component: PurchaseorderTableComponent},
      {path: 'purchaseorders/add', component: PurchaseorderFormComponent},
      {path: 'purchaseorders/:id', component: PurchaseorderDetailComponent},
      {path: 'purchaseorders/edit/:id', component: PurchaseorderUpdateFormComponent},

      {path: 'suppliers', component: SupplierTableComponent},
      {path: 'suppliers/add', component: SupplierFormComponent},
      {path: 'suppliers/:id', component: SupplierDetailComponent},
      {path: 'suppliers/edit/:id', component: SupplierUpdateFormComponent},

      {path: 'supplierreturns', component: SupplierreturnTableComponent},
      {path: 'supplierreturns/add', component: SupplierreturnFormComponent},
      {path: 'supplierreturns/:id', component: SupplierreturnDetailComponent},
      {path: 'supplierreturns/edit/:id', component: SupplierreturnUpdateFormComponent},

      {path: 'customers', component: CustomerTableComponent},
      {path: 'customers/add', component: CustomerFormComponent},
      {path: 'customers/:id', component: CustomerDetailComponent},
      {path: 'customers/edit/:id', component: CustomerUpdateFormComponent},

      {path: 'dashboard', component: DashboardComponent},
      {path: '', component: DashboardComponent},
    ]
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
