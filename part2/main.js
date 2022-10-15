var Account = /** @class */ (function () {
    function Account(newAcc_no, newBalance) {
        if (newAcc_no === void 0) { newAcc_no = 1; }
        if (newBalance === void 0) { newBalance = 2; }
        this.Acc_no = newAcc_no;
        this.Balance = newBalance;
    }
    Account.prototype.debitAmount = function () {
        return this.Acc_no;
    };
    Account.prototype.creditAmount = function () {
        return this.Acc_no;
    };
    Account.prototype.getBalance = function () {
        return this.Balance;
    };
    return Account;
}());
var A1 = new Account(20, 40);
console.log(A1);
var Current_Account = /** @class */ (function () {
    function Current_Account(Acc_no, Balance) {
        Current_Account.Interest_rate++;
    }
    Current_Account.prototype.addCustomer = function () {
        throw new Error("Method not implemented.");
    };
    Current_Account.prototype.removeCustomer = function () {
        throw new Error("Method not implemented.");
    };
    Current_Account.prototype.debitAmount = function () {
        throw new Error("Method not implemented.");
    };
    Current_Account.prototype.creditAmount = function () {
        throw new Error("Method not implemented.");
    };
    Current_Account.prototype.getBalance = function () {
        throw new Error("Method not implemented.");
    };
    Current_Account.Interest_rate = 0;
    return Current_Account;
}());
var C_A = new Current_Account(30, 40);
console.log(C_A);
console.log(Current_Account.Interest_rate);
var Saving_Account = /** @class */ (function () {
    function Saving_Account(Acc_no, Balance) {
        Saving_Account.Min_Balance++;
    }
    Saving_Account.prototype.addCustomer = function () {
        throw new Error("Method not implemented.");
    };
    Saving_Account.prototype.removeCustomer = function () {
        throw new Error("Method not implemented.");
    };
    Saving_Account.prototype.debitAmount = function () {
        throw new Error("Method not implemented.");
    };
    Saving_Account.prototype.creditAmount = function () {
        throw new Error("Method not implemented.");
    };
    Saving_Account.prototype.getBalance = function () {
        throw new Error("Method not implemented.");
    };
    Saving_Account.Min_Balance = 0;
    return Saving_Account;
}());
var S_A = new Saving_Account(50, 100);
console.log(S_A);
console.log(Saving_Account.Min_Balance);
