function makeAccount( name, balance, iban )
{
    this.name =  rajbeer;
    this.balance = amount;
    this.iban = iban

}
makeAccount.prototype.iban = function(iban){
if (iban==this.iban){
    return this.name + " your new balance is " + this.balance;
} else {
  return"iban is wrong" +this.name;
}
};
makeAccount.prototype.withdraw =function(amount)
{
    if(this.balance  -amount>=0){
        this.balance = this.balance - amount;
      return this.name + " your new balance is " + this.balance;
    } else {
      return "insufficient balance" + this.balance ;
    }
};
makeAccount.prototype.deposite =function(amount)
{
    if(balance.isInteger(amount) && balance.isInteger (this.balance)){
        this.balance = this.balance + amount;
      return this.name + " your new balance is " + this.balance;
    } else {
      return "invalid" + this.balance ;
    }
};
makeAccount.prototype.balance = function () {
    return this.name + " your balance is " + this.balance;
  };

