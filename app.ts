import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Gabriel', 10)
peopleAccount.deposit(300)
peopleAccount.withdraw(30)
peopleAccount.getName()
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
companyAccount.withdraw(160)
companyAccount.getLoan(200)
console.log(companyAccount)

const specialAccount: SpecialAccount = new SpecialAccount('Admin',2316)
specialAccount.plusDeposit(120)