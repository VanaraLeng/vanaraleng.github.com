class CheckingAccount extends Account {
    
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    getOverdraft() { 
        return this._overdraft;
    }

    setOverdraft(val) {
        this._overdraft = val;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }

        if (this.getBalance() + this.getOverdraft() < amount) {
            throw new Error("Not enought balance");
        }

        this._balance -= amount;
    }

    toString() {
        return "Checking Account " + this.getNumber() + ": balance " + this.getBalance() + ": overdraft limit" + this.getOverdraft();
    }

    endOfMonth() {
        if (this.getBalance() > 0) {
          return this.toString();
        } else {
          return "Warning, low balance CheckingAccount " + this.toString();
        }
    }
}