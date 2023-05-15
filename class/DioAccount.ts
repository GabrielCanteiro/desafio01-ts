export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (money:number): void => {
    this.balance = this.balance=+money
    console.log(`Você depoisitou ${money}`)
  }

  withdraw = (saque:number): void => {
    if(saque>this.balance || this.status !== true){
      throw new Error(`saldo insuficiente para o saque. Saldo ${this.balance}`);
    }
    this.balance -= saque
    console.log(`Você sacou ${saque}`)
  }

  getBalance = (): void => {
    console.log(this.balance)
  }


  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
