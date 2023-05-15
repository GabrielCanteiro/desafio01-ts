import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, ){
    super(name, accountNumber)
  }

  getLoan(value: number): void {
      this.balance += value;
      console.log(`Empréstimo de ${value} aprovado. Saldo: ${this.balance}`);
       }
  }

