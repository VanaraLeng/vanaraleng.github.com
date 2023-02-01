class Bank {
  static nextNumber = 1;

  constructor() {
    this._accounts = new Array();
  }

  static increaseNextNumber() {
    this.nextNumber += 1;
  }

  addAccount() {
    let account1 = new Account(Bank.nextNumber);
    this._accounts.push(account1);
    Bank.increaseNextNumber()
    console.log(account1.getNumber());
    return account1.getNumber();
  }
  addSavingAccount(interest) {
    let account2 = new SavingAccount(Bank.nextNumber, interest);
    this._accounts.push(account2);
    Bank.increaseNextNumber()
    return account2.getNumber();
  }
  addCheckingAccount(overdraft) {
    let account3 = new CheckingAccount(Bank.nextNumber, overdraft);
    this._accounts.push(account3);
    Bank.increaseNextNumber()
    return account3.getNumber();
  }
  closeAccount(number) {
    this.accounts.filter((account) => {
      account.getNumber() !== number;
    });
  }
  accountReport() {
    this._accounts.forEach((account) => {
      console.log(account.toString());
    });
  }
  endOfMonth() {
    this._accounts.forEach((account) => {
      console.log(account.endOfMonth());
    });
  }
}