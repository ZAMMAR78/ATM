class ATM {
    balance;
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    checkBalance() {
        return this.balance;
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `You have withdrawn $${amount}. Current balance: $${this.balance}`;
        }
        else {
            return "Insufficient funds or invalid amount!";
        }
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `You have deposited $${amount}. Current balance: $${this.balance}`;
        }
        else {
            return "Invalid amount!";
        }
    }
}
// Example usage
const myATM = new ATM(1000);
console.log(myATM.checkBalance()); // Output: 1000
console.log(myATM.withdraw(200)); // Output: You have withdrawn $200. Current balance: $800
console.log(myATM.deposit(500)); // Output: You have deposited $500. Current balance: $1300
console.log(myATM.checkBalance()); // Output: 1300
console.log(myATM.withdraw(1500)); // Output: Insufficient funds or invalid amount!
export {};
