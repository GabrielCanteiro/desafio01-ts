import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SavingsAccount } from './class/SavingsAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(49809847970, 'Nath', 1)
peopleAccount.deposit(100)
console.log(peopleAccount.getName());
console.log(peopleAccount.getAccountNumber());
peopleAccount.getStatus();
//peopleAccount.setStatus(false)
peopleAccount.withdraw(100)
peopleAccount.setStatus(false)
peopleAccount.getStatus()

const empresa = new CompanyAccount('Google', 1)
console.log(empresa.getName());
empresa.getLoan(3500)
empresa.getBalance()

const companyAccount = new CompanyAccount('DIO', 22)
console.log(companyAccount.getName());
companyAccount.deposit(100)
companyAccount.getBalance()


const poupanca = new SavingsAccount('Gabriel', 7);
console.log(poupanca.getName());
poupanca.premiumDeposit(10);
poupanca.getBalance()




