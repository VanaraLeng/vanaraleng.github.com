class SavingAccount extends Account {
    
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    addInterest() {
        this._balance = this.getBalance() + this.getBalance() * this._interest / 100;
    }

    toString() {
        return "Saving Account " + this.getNumber() + ": balance " + this.getBalance() + ": interest" + this._interest;
    }

    endOfMonth() {
        this.addInterest();
        return (
          "This month " +
          this.getInterest() +
          "% was applied to account number:  " +
          super.getNumber()
        ); // does nothing
    }
}