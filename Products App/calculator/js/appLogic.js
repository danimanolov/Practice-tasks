angular.module("myApp", [])
.controller("Calculate", function(){
    this.Equals = function(){
        if(this.Symbol === "+")
            {
                this.Result = this.firstNumber + this.secondNumber;
            }
        else if(this.Symbol === "-")
            {
                this.Result = this.firstNumber - this.secondNumber;
            }
        else if(this.Symbol === "*")
            {
                this.Result = this.firstNumber * this.secondNumber;
            }
        else{
            this.Result = this.firstNumber / this.secondNumber;
        }
        return Result;
    }
    this.Plus = function(){
        this.Symbol = '+';
    }
    this.Minus = function(){
        this.Symbol = '-';
    }
    this.Times = function(){
        this.Symbol = '*';
    }
    this.Divide = function(){
        this.Symbol = '/';
    }
})