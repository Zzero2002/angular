class Account{
    Acc_no:number;
    Balance:number;
    constructor(newAcc_no = 1, newBalance=2){
        this.Acc_no = newAcc_no;
        this.Balance = newBalance;
    }
    debitAmount(){
        return this.Acc_no;
    }

    creditAmount(){
        return this.Acc_no;
    }

    getBalance(){
        return this.Balance;
    }
}
var A1 = new Account(20,40);
console.log(A1);


interface IAcoount{
    Date_Of_Opening:string;
    addCustomer();
    removeCustomer()
}



class Current_Account extends Account implements IAcoount{
     Interest_rate:number; 
    constructor(Acc_no, Balance,newInterest_rate){
        super(Acc_no,Balance)
        this.Interest_rate = newInterest_rate;
    }
    Date_Of_Opening: string;
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
    Acc_no: number;
    Balance: number;
    debitAmount(): number {
        throw new Error("Method not implemented.");
    }
    creditAmount(): number {
        throw new Error("Method not implemented.");
    }
    getBalance(): number {
        throw new Error("Method not implemented.");
    }
}
var C_A = new Current_Account(30,40,70);
console.log(C_A)


class Saving_Account extends Account implements IAcoount{
     Min_Balance:number; 
    constructor(Acc_no, Balance,newMin_balance){
        super(Acc_no,Balance)
        this.Min_Balance = newMin_balance
    }
    Date_Of_Opening: string;
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
    Acc_no: number;
    Balance: number;
    debitAmount(): number {
        throw new Error("Method not implemented.");
    }
    creditAmount(): number {
        throw new Error("Method not implemented.");
    }
    getBalance(): number {
        throw new Error("Method not implemented.");
    }
}
var S_A = new Saving_Account(50,100,400);
console.log(S_A)
