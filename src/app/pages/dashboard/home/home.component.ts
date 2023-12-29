import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private tokenService: TokenService) {

  }

  ngOnInit(): void {
    console.log(this.tokenService.getToken)
  }

  // currency: string;
  // userName: string;
  // paymentType: string;
  // advanceType: string;
  // showVendorName: boolean;
  // showEmployeeCollectorName: boolean;
  // showVendorAdvance: boolean;
  // showEmployeeAdvance: boolean;
  // vendorName: string;
  // employeeCollectorName: string;
  // vendorAdvance: number;
  // employeeAdvance: number;

  userName: string = "Victor";
  currency: string = ''
  naira: string = 'NGN'
  dollar: string = 'USD'


  showVendorName: boolean = false;
  showEmployeeCollectorName: boolean = false;
  showVendorAdvance: boolean = false
  showEmployeeAdvance: boolean = false

  paymentType: string = '';
  advanceType: string = '';
  employeeCollectorName: string = '';
  vendorName: string = '';
  employeeAdvance: string = ''
  vendorAdvance: string = ''
  showDeleteExpenses: boolean = false
  count: number = 0

  projectExpenses: any[] = [
    {
      projectCode: '',
      internalOrder: '',
      accountsCode: '',
      itemAmount: '',
      expenseDetails: ''
    }
  ];

  saveData(data: any) {
    console.log(data.value.name + data.value.email + data.value.password)
  }

  getCurrency() {
    console.log(this.currency)
  }
  toggleVendorNameVisibility() {
    this.showVendorName = this.paymentType === 'Payment to Vendor';
    this.showEmployeeCollectorName = this.paymentType === 'Payment to Employee'
    // Payment to Employee
  }

  addExpense() {
    this.projectExpenses.push({
      projectCode: '',
      internalOrder: '',
      accountsCode: '',
      itemAmount: '',
      expenseDetails: ''
    });
    this.showDeleteExpenses = true;
    this.count++
  }

  removeExpense(index: any) {
    this.projectExpenses.splice(index, 1)
    this.count--
  }

  toggleAdvanceType() {
    this.showVendorAdvance = this.advanceType === 'Advance to Vendor'
    this.showEmployeeAdvance = this.advanceType === 'Advance to Employee'
  }

  // sendRequest(data: any) {
  //   console.log(data.value)
  // }

  sendRequest(form: any): void {
    const formValues = form.value;
    console.log('Form Values:', formValues);
    alert("Working...")
  }
}
