import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount{

    plusDeposit = (value:number):void => {
        this.balance += value + 10
        console.log(`SpecialAccount saldo: ${this.balance}`)
    }
}