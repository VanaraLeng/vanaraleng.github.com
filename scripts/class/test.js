// mocha.setup("bdd"); // initialize mocha
// let assert = chai.assert;

describe("Account", () => {
  it("getNumber", () => {
    let account = new Account(12345);
    assert.equal(account.getNumber(), 12345);
  });
  it("getBalance", () => {
    let account = new Account(12345);
    assert.equal(account.getBalance(), 0.0);
  });
  it("deposit", () => {
    let account = new Account(12345);
    account.deposit(100000);
    assert.equal(account.getBalance(), 100000);
  });
  it("withdraw", () => {
    let account = new Account(12345);
    account.deposit(100000);
    account.withdraw(100000);
    assert.equal(account.getBalance(), 0.0);
  });
  it("toString", () => {
    let account = new Account(12345);
    account.deposit(100000);
    const expected = "Account 12345: balance 100000";
    assert.equal(account.toString(), expected);
  });
  it("endOfMonth", () => {
    let account = new Account(12345);
    assert.equal(account.endOfMonth(), "");
  });
});

describe("SavingAccount", () => {
  it("addInterest", () => {
    let savingAccount = new SavingAccount(12345, 10);
    savingAccount.deposit(100000);
    savingAccount.addInterest();
    assert.equal(savingAccount.getBalance(), 110000);
  });

  it("endOfMonth", () => {
    let savingAccount = new SavingAccount(12345, 10);
    savingAccount.deposit(100000);
    savingAccount.addInterest();
    assert.equal(savingAccount.endOfMonth(), "This month 10% was applied to account number:  12345");
  });
});

describe("CheckingAccount", () => {
  it("getOverdraft", () => {
    let checkingAccount = new CheckingAccount(12345, 50);
    assert.equal(checkingAccount.getOverdraft(), 50);
  });
  it("setOverdraft", () => {
    let checkingAccount = new CheckingAccount(12345, 50);
    checkingAccount.setOverdraft(10);
    assert.equal(checkingAccount.getOverdraft(), 10);
  });
  it("withdraw", () => {
    let checkingAccount = new CheckingAccount(12345, 50);
    checkingAccount.setOverdraft(10);
    checkingAccount.withdraw(10);
    assert.equal(checkingAccount.getBalance(), -10);

    expect(checkingAccount.withdraw.bind(checkingAccount, 8)).to.throw("Not enought balance");
  })

  it("withdraw below redline", () => {
    let checkingAccount = new CheckingAccount(12345, 20);
    
    expect(checkingAccount.withdraw.bind(checkingAccount, 30)).to.throw("Not enought balance");
  })
});

describe("Bank", () => {
  it("addAccount", () => {
    let bank = new Bank();
    let number = bank.addAccount();
    assert.equal(number, 1);
  });
  it("addSavingAccount", () => {
    let bank = new Bank();
    let number = bank.addSavingAccount(10);
    assert.equal(number, 2);
  });
  it("addCheckingAccount", () => {
    let bank = new Bank();
    let number = bank.addCheckingAccount(200);
    assert.equal(number, 3);
  });
});
